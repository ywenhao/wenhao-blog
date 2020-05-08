const { override, fixBabelImports } = require('customize-cra');

if (process.env.NODE_ENV === 'production') process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
