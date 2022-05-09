/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: {
      url: '/',
      static: true,
      dot: true,
    },
    src: { url: '/dist' },
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
    // optimize the build for production
    ['@snowpack/plugin-webpack', {}],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    //set base url here
    baseUrl: 'https://andrecox.github.io/Rocket-Template',
  },
};
