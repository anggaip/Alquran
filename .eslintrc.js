module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'flowtype'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'plugin:jest/recommended'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      flowVersion: '0.155.1' // Flow version
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ]
  },
  rules: {
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'flowtype/require-return-type': [
      2,
      'always',
      {
        excludeArrowFunctions: true
      }
    ],
    'flowtype/delimiter-dangle': [2, 'never']
  }
}
