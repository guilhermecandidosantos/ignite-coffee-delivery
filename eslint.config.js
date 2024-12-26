import config from '@rocketseat/eslint-config/react.mjs'

export default [
  ...config,
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-empty-object-type': ['error',
        { allowInterfaces: 'always' }],
    },
  },
]
