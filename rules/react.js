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

    // require specific class methods to use this keyword
    // (extends configuration from best-practices.js)
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
      ],
    }],

    // require double quotes in JSX attributes
    // (extends configuration from stylistic-issues.js)
    'jsx-quotes': ['error', 'prefer-double'],

    // enforces consistent naming for boolean props
    'react/boolean-prop-naming': ['off', {
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
    }],

    // forbid "button" element without an explicit "type" attribute
    // 'react/button-has-type':

    // prevent extraneous defaultProps on components
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],

    // rule enforces consistent usage of destructuring assignment in component
    // 'react/destructuring-assignment':

    // prevent missing displayName in a React component definition
    'react/display-name': ['off', { ignoreTranspilerName: false }],

    // forbid certain props on Components
    'react/forbid-component-props': ['off', { forbid: [] }],

    // forbid certain props on DOM Nodes
    // 'react/forbid-dom-props':

    // forbid certain elements
    'react/forbid-elements': ['off', { forbid: [], }],

    // forbid certain propTypes
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array', 'object'] }],

    // forbid foreign propTypes
    'react/forbid-foreign-prop-types': 'off',

    // prevent using this.state inside this.setState
    // 'react/no-access-state-in-setstate':

    // prevent using Array index in key props
    'react/no-array-index-key': 'error',

    // prevent passing children as props
    'react/no-children-prop': 'error',

    // prevent usage of dangerous JSX properties
    'react/no-danger': 'warn',

    // prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error',

    // prevent usage of deprecated methods
    'react/no-deprecated': ['error'],

    // prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 'error',

    // prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 'error',

    // prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'off',

    // prevent usage of findDOMNode
    'react/no-find-dom-node': 'error',

    // prevent usage of isMounted
    'react/no-is-mounted': 'error',

    // prevent multiple component definition per file
    'react/no-multi-comp': ['error', { ignoreStateless: true }],

    // prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-redundant-should-component-update': 'error',

    // prevent usage of the return value of React.render
    'react/no-render-return-value': 'error',

    // prevent usage of setState
    'react/no-set-state': 'off',

    // prevent using string references in ref attribute
    'react/no-string-refs': 'error',

    // prevent using this in stateless functional components
    // 'react/no-this-in-sfc':

    // prevent common casing typos
    'react/no-typos': 'error',

    // prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'error',

    // prevent usage of unknown DOM property (fixable)
    'react/no-unknown-property': 'error',

    // prevent definitions of unused prop types
    'react/no-unused-prop-types': ['error', {
      customValidators: [
      ],
      skipShapeProps: true,
    }],

    // prevent definitions of unused state properties
    'react/no-unused-state': 'error',

    // prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': 'error',

    // enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': ['error', 'always'],

    // enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    // prevent missing props validation in a React component definition
    'react/prop-types': ['error', {
      ignore: [],
      customValidators: [],
      skipUndeclared: false
    }],

    // prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',

    // enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 'error',

    // enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': ['off', { allowDecorators: [] }],

    // enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',

    // prevent extra closing tags for components without children (fixable)
    'react/self-closing-comp': 'error',

    // enforce component methods order (fixable)
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ],
    }],

    // enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': ['off', {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false,
    }],

    // enforce style prop value being an object
    'react/style-prop-object': 'error',

    // prevent void DOM elements (e.g. <img />, <br />) from receiving children
    'react/void-dom-elements-no-children': 'error'

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
