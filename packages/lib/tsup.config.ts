import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => {
  return {
    entry: ['hooks/index.ts'],
    outDir: 'dist',
    format: ['esm'],
    dts: true,
    minify: !options.watch,
    watch: options.watch,
    clean: true,
    platform: 'browser'
  };
});
