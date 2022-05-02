module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:import/typescript'
  ],
  rules: {
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false }
    ],
    'import/no-useless-path-segments': 'error',
    'import/no-cycle': 'error',
    'import/newline-after-import': [
      'error',
      { count: 1 }
    ],
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        warnOnUnassignedImports: false
      }
    ],
    'spaced-comment': ['warn', 'always', { markers: ['/'] }],
    'react/self-closing-comp': 'warn',
  }
}
