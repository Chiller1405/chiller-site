// Guard: the homepage (index.html) carries a hand-copied, compacted copy of the affiliate config
// (`const AFF = {...}`) so its chat links can skip the /go hop. This check fails the build if that
// copy drifts from src/config/affiliateProviders.js (the source of truth used by /go).
// Compact format: c=cleanUrl, a=isActive?1:0, t='append'|'tpl'|'none', p=affiliateParams,
// h=affiliateHash, u=affiliateUrl (template, only for t='tpl').
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { affiliateProviders } from '../src/config/affiliateProviders.js';

const root = fileURLToPath(new URL('..', import.meta.url));

function compact(p) {
  const active = Boolean(p.isActive);
  const t = !active ? 'none' : p.linkType === 'append' ? 'append' : p.affiliateUrl ? 'tpl' : 'none';
  return {
    c: p.cleanUrl,
    a: active ? 1 : 0,
    t,
    p: t === 'append' ? (p.affiliateParams || '') : '',
    h: t === 'append' ? (p.affiliateHash || '') : '',
    u: t === 'tpl' ? p.affiliateUrl : '',
  };
}

const expected = {};
for (const p of affiliateProviders) expected[p.id] = compact(p);

const html = readFileSync(root + 'index.html', 'utf8');
const m = html.match(/const AFF = (\{.*?\});\s*$/m);
if (!m) {
  console.error('check-aff-map: could not find `const AFF = {...};` in index.html');
  process.exit(1);
}
let actual;
try { actual = JSON.parse(m[1]); } catch (e) {
  console.error('check-aff-map: AFF literal in index.html is not valid JSON: ' + e.message);
  process.exit(1);
}

const diffs = [];
for (const id of new Set([...Object.keys(expected), ...Object.keys(actual)])) {
  if (!(id in actual)) { diffs.push(`- ${id}: missing from index.html AFF`); continue; }
  if (!(id in expected)) { diffs.push(`- ${id}: in index.html AFF but not in affiliateProviders.js`); continue; }
  for (const k of ['c', 'a', 't', 'p', 'h', 'u']) {
    if (actual[id][k] !== expected[id][k]) {
      diffs.push(`- ${id}.${k}: index.html=${JSON.stringify(actual[id][k])} expected=${JSON.stringify(expected[id][k])}`);
    }
  }
  for (const k of Object.keys(actual[id])) if (!['c', 'a', 't', 'p', 'h', 'u'].includes(k)) diffs.push(`- ${id}: unexpected field "${k}" in index.html AFF`);
}

if (diffs.length) {
  console.error('check-aff-map: index.html AFF map is out of sync with src/config/affiliateProviders.js:\n' + diffs.join('\n'));
  console.error('\nFix index.html (or the config) so they match. Expected AFF line:\n  const AFF = ' + JSON.stringify(expected) + ';');
  process.exit(1);
}
console.log(`check-aff-map: OK (${Object.keys(expected).length} providers in sync)`);
