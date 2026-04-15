import { existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';

const currentDir = dirname(fileURLToPath(import.meta.url));
const websiteRoot = join(currentDir, '..');

function titleFromSlug(slug) {
  return slug
    .replace(/\.md$/i, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]/g, ' ')
    .trim();
}

function readApiItems(sectionDir, routePrefix) {
  if (!existsSync(sectionDir)) {
    return [];
  }

  return readdirSync(sectionDir)
    .filter((name) => name.endsWith('.md') && name.toLowerCase() !== 'index.md')
    .sort((a, b) => a.localeCompare(b))
    .map((name) => {
      const slug = name.replace(/\.md$/i, '');
      return {
        text: titleFromSlug(slug),
        link: `${routePrefix}/${slug}`
      };
    });
}

function buildApiSidebar() {
  const apiRoot = join(websiteRoot, 'api');
  const classes = readApiItems(join(apiRoot, 'classes'), '/api/classes');
  const interfaces = readApiItems(join(apiRoot, 'interfaces'), '/api/interfaces');
  const typeAliases = readApiItems(join(apiRoot, 'type-aliases'), '/api/type-aliases');

  const sidebar = [
    {
      text: 'API',
      items: [{ text: 'Index', link: '/api/' }]
    }
  ];

  if (classes.length) {
    sidebar.push({ text: 'Classes', items: classes });
  }

  if (interfaces.length) {
    sidebar.push({ text: 'Interfaces', items: interfaces });
  }

  if (typeAliases.length) {
    sidebar.push({ text: 'Type Aliases', items: typeAliases });
  }

  return sidebar;
}

export default defineConfig({
  title: 'Codemetrica',
  description: 'Tree-sitter code metrics and smell analysis for Python and Java',
  themeConfig: {
    outline: 'deep',
    outlineTitle: 'On this page',
    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'API', link: '/api/' },
      { text: 'GitHub', link: 'https://github.com/sparklabOrg/codemetrica' }
    ],
    sidebar: {
      '/docs/': [
        { text: 'Getting Started', link: '/docs/getting-started' },
        { text: 'Metrics', link: '/docs/metrics' },
        { text: 'Code Smells', link: '/docs/code-smells' },
        { text: 'Test Smells', link: '/docs/test-smells' },
        { text: 'Reference', link: '/docs/reference' },
        { text: 'Resources', link: '/docs/resources' },
        { text: 'API', link: '/api/' }
      ],
      '/api/': buildApiSidebar()
    }
  }
});