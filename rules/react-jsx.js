// https://www.npmjs.com/package/eslint-plugin-react

/* eslint-disable no-undef */

module.exports = {
  plugins: [
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {

    // enforce boolean attributes notation in JSX (fixable)
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    // enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    // 'react/jsx-child-element-spacing':

    // validate closing bracket location in JSX (fixable)
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // validate closing tag location in JSX (fixable)
    'react/jsx-closing-tag-location': 'error',

    // enforce curly braces or disallow unnecessary curly braces in JSX
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

    // enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

    // enforce or disallow spaces around equal signs in JSX attributes (fixable)
    'react/jsx-equals-spacing': ['error', 'never'],

    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],

    // enforce position of the first prop in JSX (fixable)
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    // enforce event handler naming conventions in JSX
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],

    // validate JSX indentation (fixable)
    'react/jsx-indent': ['error', 2],

    // validate props indentation in JSX (fixable)
    'react/jsx-indent-props': ['error', 2],

    // validate JSX has key prop when in array or iterator
    'react/jsx-key': 'off',

    // limit maximum of props on a single line in JSX (fixable)
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    // prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: false,
    }],

    // prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 'error',

    // prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': ['off', { noStrings: true }],

    // prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 'error',

    // disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',

    // limit to one expression per line in JSX
    // 'react/jsx-one-expression-per-line':

    // enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: [],
    }],

    // enforce default props alphabetical sorting
    // 'react/jsx-sort-default-props':

    // enforce props alphabetical sorting (fixable)
    'react/jsx-sort-props': ['off', {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    }],

    // validate spacing before closing bracket in JSX (fixable)
    // 'react/jsx-space-before-closing':

    // validate whitespace in and around the JSX opening and closing brackets (fixable)
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],

    // prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': ['error'],

    // prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error',

    // prevent missing parentheses around multilines JSX (fixable)
    'react/jsx-wrap-multilines': ['error', {
      declaration: true,
      assignment: true,
      return: true,
      arrow: true,
    }]
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    },
    react: {
      pragma: 'React',
      version: '16.0'
    }
  }
};

/* eslint-enable no-undef */
