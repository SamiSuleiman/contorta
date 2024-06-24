import { defineConfig } from 'vite';
import analog, { type PrerenderContentFile } from '@analogjs/platform';

export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      prerender: {
        routes: async () => [
          '/',
          '/blog',
          {
            contentDir: 'src/content/blog',
            transform: (file: PrerenderContentFile) => {
              if (file.attributes['draft']) return false;
              const slug = file.attributes['slug'] || file.name;
              return `/blog/${slug}`;
            },
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
