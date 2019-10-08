const {
  override,
  disableEsLint,
  addWebpackAlias,
  addDecoratorsLegacy,
  fixBabelImports,
  addLessLoader
} = require("customize-cra");
const path = require('path');

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  addLessLoader({        
    modifyVars: { 
      '@theme-color': '#32A660',
      '@theme-second-color': '#D07505',
      '@bg-color': '#464646',
      '@warning-color': '#A40A0A',
      '@text-title-color': '#464646',
      '@text-holder-color': '#999999',
      '@text-desc-color': '#666666',
      '@text-btn-color': '#1D9151',
      '@btn-color': 'linear-gradient(-180deg, #3ABF71 0%, #2CA663 100%)',
      '@btn-press-color': 'linear-gradient(-180deg, #36B36A 0%, #28995B 100%)',
      '@btn-disabled-color': ' linear-gradient(-180deg, #3ABF71 0%, #2CA663 100%)',
    }    
  }),
  fixBabelImports('import', {
    libraryName: 'antdmobile',
    style: 'css',
  }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
    ["@/pages"]: path.resolve(__dirname, "src/pages"),
    ["@/helpers"]: path.resolve(__dirname, "src/helpers"),
    ["@/actions"]: path.resolve(__dirname, "src/actions"),
    ["@/reducers"]: path.resolve(__dirname, "src/reducers"),
  }),
);