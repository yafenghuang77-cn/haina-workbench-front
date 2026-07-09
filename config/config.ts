import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  base: 'haina-workbench',
  history: {
    type: 'browser',
  },
  jsMinifier: 'esbuild',
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes,
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  utoopack: {},
  exportStatic: {},
  fastRefresh: true,
  define: {
    'process.env.REACT_APP_ENV': process.env.REACT_APP_ENV || 'prod',
  },
  mfsu: {},
  ignoreMomentLocale: true,
});
