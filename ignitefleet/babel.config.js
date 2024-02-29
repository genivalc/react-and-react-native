module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          'moduleName': '@env',  // Facilitar a importacao 
          'allowUndefined': false // definicao de variaveis undeflined ou nao
        }
      ]
    ]
  };
};
