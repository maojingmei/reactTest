// ref: https://umijs.org/config/
import { resolve } from "path";
import pageRoutes from './router.config'

export default {
  treeShaking: true,
  outputPath:'./publish',
  theme: {
    "primary-color": "#009b72"
  },
  routes: pageRoutes,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: {
          webpackChunkName: true,
        },
        title: 'myTest',
        dll: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  ignoreMomentLocale: true,
  targets:{
    ie: 11,
  },
  alias: {
    "@": resolve(__dirname, "../src"),
  },
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  }
};
