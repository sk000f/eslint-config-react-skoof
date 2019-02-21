// https://eslint.org/docs/rules/#stylistic-issues

/* eslint-disable no-undef */

module.exports = {
  'rules': {
    // enforce linebreaks after opening and before closing array brackets
    // 'array-bracket-newline':

    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // enforce line breaks after each array element
    // 'array-element-newline':

    // disallow or enforce spaces inside of blocks after opening block and before closing block
    // 'block-spacing':

    // enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs'],

    // enforce camelcase naming convention
    'camelcase': 'error',

    // enforce or disallow capitalization of the first letter of a comment
    // 'capitalized-comments':

    // require or disallow trailing commas
    'comma-dangle': ['error', 'never'],

    // enforce consistent spacing before and after commas
    // 'comma-spacing':

    // enforce consistent comma style
    'comma-style': ['error', 'last'],

    // enforce consistent spacing inside computed property brackets
    // 'computed-property-spacing':

    // enforce consistent naming when capturing the current execution context
    // 'consistent-this':

    // require or disallow newline at the end of files
    'eol-last': ['error', 'always'],

    // require or disallow spacing between function identifiers and their invocations
    // 'func-call-spacing':

    // require function names to match the name of the variable or prop to which they are assigned
    // 'func-name-matching':

    // require or disallow named function expressions
    // 'func-names':

    // enforce the consistent use of either function declarations or expressions
    'func-style': ['error', 'expression'],

    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error', 'multiline'],

    // disallow specified identifiers
    // 'id-blacklist':

    // enforce minimum and maximum identifier lengths
    'id-length': 'error',

    // require identifiers to match a specified regular expression
    // 'id-match':

    // enforce the location of arrow function bodies
    // 'implicit-arrow-linebreak':

    // enforce consistent indentation
    'indent': ['error', 2],

    // enforce consistent spacing between keys and values in object literal properties
    // 'key-spacing':

    // enforce consistent spacing before and after keywords
    'keyword-spacing': ['error', { 'before': true, 'after': true }],

    // enforce position of line comments
    // 'line-comment-position':

    // enforce consistent linebreak style
    // 'linebreak-style':

    // require empty lines around comments
    // 'lines-around-comment':

    // require or disallow an empty line between class members
    // 'lines-between-class-members':

    // enforce a maximum depth that blocks can be nested
    // 'max-depth':

    // enforce a maximum line length
    'max-len': ['error', 150],

    // enforce a maximum number of lines per file
    // 'max-lines':

    // enforce a maximum depth that callbacks can be nested
    // 'max-nested-callbacks':

    // enforce a maximum number of parameters in function definitions
    // 'max-params':

    // enforce a maximum number of statements allowed in function blocks
    // 'max-statements':

    // enforce a maximum number of statements allowed per line
    // 'max-statements-per-line':

    // enforce a particular style for multiline comments
    // 'multiline-comment-style':

    // enforce newlines between operands of ternary expressions
    // 'multiline-ternary':

    // require constructor names to begin with a capital letter
    'new-cap': 'error',

    // require parentheses when invoking a constructor with no arguments
    // 'new-parens':

    // require a newline after each call in a method chain
    'newline-per-chained-call': 'error',

    // disallow Array constructors
    'no-array-constructor': 'error',

    // disallow bitwise operators
    // 'no-bitwise':

    // disallow continue statements
    // 'no-continue':

    // disallow inline comments after code
    // 'no-inline-comments':

    // disallow if statements as the only statement in else blocks
    // 'no-lonely-if':

    // disallow mixed binary operators
    'no-mixed-operators': 'error',

    // disallow mixed spaces and tabs for indentation
    // 'no-mixed-spaces-and-tabs':

    // disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // disallow multiple empty lines
    // 'no-multiple-empty-lines':

    // disallow negated conditions
    // 'no-negated-condition':

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow Object constructors
    'no-new-object': 'error',

    // disallow the unary operators ++ and --
    'no-plusplus': 'error',

    // disallow specified syntax
    // 'no-restricted-syntax':

    // disallow all tabs
    // 'no-tabs':

    // disallow ternary operators
    // 'no-ternary':

    // disallow trailing whitespace at the end of lines
    // 'no-trailing-spaces':

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',

    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': 'error',

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    'nonblock-statement-body-position': 'error',

    // enforce consistent line breaks inside braces
    // 'object-curly-newline':

    // enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],

    // enforce placing object properties on separate lines
    // 'object-property-newline':

    // enforce variables to be declared either together or separately in functions
    'one-var': ['error', 'never'],

    // require or disallow newlines around variable declarations
    // 'one-var-declaration-per-line':

    // require or disallow assignment operator shorthand where possible
    // 'operator-assignment':

    // enforce consistent linebreak style for operators
    'operator-linebreak': 'error',

    // require or disallow padding within blocks
    'padded-blocks': ['error', 'never'],

    // require or disallow padding lines between statements
    // 'padding-line-between-statements':

    // require quotes around object literal property names
    'quote-props': ['error', 'always'],

    // enforce the consistent use of either backticks, double, or single quotes
    'quotes': ['error', 'single'],

    // require JSDoc comments
    // 'require-jsdoc':

    // require or disallow semicolons instead of ASI
    'semi': ['error', 'always'],

    // enforce consistent spacing before and after semicolons
    // 'semi-spacing':

    // enforce location of semicolons
    // 'semi-style':

    // require object keys to be sorted
    // 'sort-keys':

    // require variables within the same declaration block to be sorted
    // 'sort-vars':

    // enforce consistent spacing before blocks
    'space-before-blocks': ['error', 'always'],

    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': ['error', 'never'],

    // enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],

    // require spacing around infix operators
    'space-infix-ops': 'error',

    // enforce consistent spacing before or after unary operators
    // 'space-unary-ops':

    // enforce consistent spacing after the // or /* in a comment
    'spaced-comment': ['error', 'always']

    // enforce spacing around colons of switch statements
    // 'switch-colon-spacing':

    // require or disallow spacing between template tags and their literals
    // 'template-tag-spacing':

    // require or disallow Unicode byte order mark (BOM)
    // 'unicode-bom':

    // require parenthesis around regex literals
    // 'wrap-regex':
  }
};

/* eslint-enable no-undef */
