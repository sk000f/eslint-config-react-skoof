/* eslint-disable no-undef */

module.exports = {
  'plugins': ['jsx-a11y', 'react'],

  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },

  'rules': {
    // enforce emojis are wrapped in and provide screenreader access
    'jsx-a11y/accessible-emoji': 'error',

    // enforce all elements that require alternative text have meaningful information for user
    'jsx-a11y/alt-text': [
      'error',
      {
        'elements': ['img', 'object', 'area', 'input[type="image"]'],
        'img': [],
        'object': [],
        'area': [],
        'input[type="image"]': []
      }
    ],

    // enforce all anchors to contain accessible content
    'jsx-a11y/anchor-has-content': ['error', { 'components': [] }],

    // enforce all anchors are valid, navigable elements
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        'components': ['Link'],
        'specialLink': [],
        'aspects': ['noHref', 'invalidHref', 'preferButton']
      }
    ],

    // enforce elements with aria-activedescendant are tabbable
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

    // enforce all aria-* props are valid
    'jsx-a11y/aria-props': 'error',

    // enforce ARIA state and property values are valid
    'jsx-a11y/aria-proptypes': 'error',

    // enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
    'jsx-a11y/aria-role': ['error', { 'ignoreNonDom': false }],

    // enforce elements that don't support ARIA roles, states, and props don't have those attributes
    'jsx-a11y/aria-unsupported-elements': 'error',

    // enforce a clickable non-interactive element has at least one keyboard event listener
    'jsx-a11y/click-events-have-key-events': 'error',

    // enforce heading (h1, h2, etc) elements contain accessible content
    'jsx-a11y/heading-has-content': ['error', { 'components': [''] }],

    // enforce <html> element has lang prop
    'jsx-a11y/html-has-lang': 'error',

    // enforce iframe elements have a title attribute
    'jsx-a11y/iframe-has-title': 'error',

    // enforce <img> alt prop does not contain the word 'image', 'picture', or 'photo'
    'jsx-a11y/img-redundant-alt': 'error',

    // enforce that elements with interactive handlers like onClick must be focusable
    'jsx-a11y/interactive-supports-focus': 'error',

    // enforce that <label> elements have the htmlFor prop
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        'labelComponents': [],
        'labelAttributes': [],
        'controlComponents': [],
        'assert': 'both',
        'depth': 25
      }
    ],

    // enforce lang attribute has a valid value
    'jsx-a11y/lang': 'error',

    // enforces that <audio> and <video> elements must have a <track> for captions
    'jsx-a11y/media-has-caption': [
      'error',
      {
        'audio': [],
        'video': [],
        'track': []
      }
    ],

    // enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users
    'jsx-a11y/mouse-events-have-key-events': 'error',

    // enforce that the accessKey prop is not used on any element to avoid complications
    // with keyboard commands used by a screenreader
    'jsx-a11y/no-access-key': 'error',

    // enforce autoFocus prop is not used
    'jsx-a11y/no-autofocus': ['error', { 'ignoreNonDOM': true }],

    // enforce distracting elements are not used
    'jsx-a11y/no-distracting-elements': [
      'error',
      {
        'elements': ['marquee', 'blink']
      }
    ],

    // interactive elements should not be assigned non-interactive roles
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        'tr': ['none', 'presentation']
      }
    ],

    // non-interactive elements should not be assigned mouse or keyboard event listeners
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        'handlers': ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']
      }
    ],

    // non-interactive elements should not be assigned interactive roles
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        'ul': ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        'ol': ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        'li': ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        'table': ['grid'],
        'td': ['gridcell']
      }
    ],

    // tabIndex should only be declared on interactive elements
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        'tags': [],
        'roles': ['tabpanel']
      }
    ],

    // enforce usage of onBlur over onChange on select menus for accessibility
    'jsx-a11y/no-onchange': 'off',

    // enforce explicit role property is not the same as implicit/default role property on element
    'jsx-a11y/no-redundant-roles': 'error',

    // enforce that non-interactive, visible elements (such as <div>) that have
    // click handlers use the role attribute
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        'handlers': ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']
      }
    ],

    // enforce that elements with ARIA roles must have all required attributes for that role
    'jsx-a11y/role-has-required-aria-props': 'error',

    // enforce that elements with explicit or implicit roles defined
    // contain only aria-* properties supported by that role
    'jsx-a11y/role-supports-aria-props': 'error',

    // enforce scope prop is only used on <th> elements
    'jsx-a11y/scope': 'error',

    // enforce tabIndex value is not greater than zero
    'jsx-a11y/tabindex-no-positive': 'error'
  }
};

/* eslint-enable no-undef */
