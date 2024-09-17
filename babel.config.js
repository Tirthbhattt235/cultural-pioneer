module.exports = function(api) {
  api.cache(true);

  const presets = ['next/babel'];
  const plugins = [['styled-components','macros']];
 
  return {
    presets,
    plugins,
    
    "plugins": [
      [
        "babel-plugin-styled-components",
        {
          "ssr": true
        }
      ]
    ],
    
      "extends": [
        "next",
        "plugin:styled-components/recommended"
      ],
      'fontawesome-svg-core': {
        'license': 'free'
      }
  };
};
