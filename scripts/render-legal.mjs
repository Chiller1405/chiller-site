// Regenerates src/legal-snapshot.json from the legal React components, so the home page's
// privacy / terms / accessibility pop-ups always show the current texts.
// Runs automatically before `npm run build` and `npm run dev` (see package.json).
import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({
  root,
  configFile: false,
  plugins: [react()],
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});
try {
  const mod = await server.ssrLoadModule('/scripts/legal-entry.jsx');
  const data = mod.render();
  for (const [k, v] of Object.entries(data)) {
    if (!v || v.length < 500) throw new Error(`legal page "${k}" rendered suspiciously short (${v ? v.length : 0} chars)`);
  }
  fs.writeFileSync(path.join(root, 'src', 'legal-snapshot.json'), JSON.stringify(data));
  console.log('legal snapshot written:', Object.entries(data).map(([k, v]) => `${k}=${v.length}`).join(' '));
} finally {
  await server.close();
}
