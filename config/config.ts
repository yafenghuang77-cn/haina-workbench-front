import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import routes from './routes';
import theme from './theme';

const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  base: 'haina-workbench',
  history: {
    type: 'browser',
  },
  jsMinifier: 'esbuild',
  antd: {
    // 确保开启了antd配置
    configProvider: {
      theme: {
        token: {
          colorPrimary: '#1890ff',
        },
      },
    },
  },
  theme: {
    ...theme,
    'root-entry-name': 'variable',
    '@primary-color': '#1890ff',
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  // layout: {
  //   title: '@umijs/max',
  // },
  layout: {
    layout: 'mix',
    splitMenus: true,
    colorPrimary: '#1890ff', // 全局主色
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
