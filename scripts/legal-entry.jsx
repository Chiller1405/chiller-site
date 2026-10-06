import { renderToStaticMarkup } from 'react-dom/server';
import PrivacyPolicy from '../src/components/PrivacyPolicy.jsx';
import TermsOfService from '../src/components/TermsOfService.jsx';
import AccessibilityStatement from '../src/components/AccessibilityStatement.jsx';

// Renders the live legal pages (the single source of truth for the legal texts) to static HTML.
// Used by scripts/render-legal.mjs to build src/legal-snapshot.json for the home page's pop-ups.
function clean(html) {
  return html
    .replace(/<button[^>]*back-btn[\s\S]*?<\/button>/g, '') // "back to home" button
    .replace(/<h1[\s\S]*?<\/h1>/, '')                       // the page title (the modal has its own)
    .replace(/ style="[^"]*"/g, '');                        // inline styles of the old page layout
}

export function render() {
  return {
    privacy: clean(renderToStaticMarkup(<PrivacyPolicy />)),
    terms: clean(renderToStaticMarkup(<TermsOfService />)),
    a11y: clean(renderToStaticMarkup(<AccessibilityStatement />)),
  };
}
