const path = require('path')

module.exports = {
  "stories": [
    "/src/assets/svg/*.svg",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  },
  "staticDirs": ['../public', '../src/assets/svg'],
  async viteFinal(config, { configType }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src"),
    };

    console.log(config)

    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve('./src/assets/svg'),
      use: [
        {
          loader: 'vue-loader',
        },
      ],
    });

    // Return the altered config
    return config;
  }
}



// const path = require('path');

// // Export a function. Accept the base config as the only param.
// module.exports = {
//     "stories": [
//     "/src/assets/svg/*.svg",
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)",
//     "../src/**/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ],
//   "framework": "@storybook/vue3",
//   "core": {
//     "builder": "storybook-builder-vite"
//   },
//   "staticDirs": [
//     '../public', 
//     '../src/assets/svg'
//   ],
  // webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ['style-loader', 'css-loader', 'sass-loader'],
  //     include: path.resolve(__dirname, '../'),
  //   });

  //   const fileLoader = config.module.rules.find((rule, i) => {
  //     return rule.loader && rule.loader.match(/file-loader/);
  //   });
  //   fileLoader.exclude = path.resolve('./src/assets/icons');

  //   // Custom loader with an `include` to limit the loader to only icons
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     include: path.resolve('./src/assets/icons'),
  //     use: [
  //       {
  //         loader: 'svg-sprite-loader',
  //       },
  //     ],
  //   });

  //   // Return the altered config
  //   return config;
  // },
//   chainWebpack: config => {
//     config.plugins.delete('prefetch') // prefetch 삭제

//     const svgRule = config.module.rule('svg')

//     svgRule.uses.clear()

//     svgRule
//       // .use('vue-loader')
//       // .loader('vue-loader')
//       // .end()
//       .use('vite-svg-loader')
//       .loader('vite-svg-loader')
//   },
// };