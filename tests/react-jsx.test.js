import { describe, it } from 'mocha';
import { expect } from 'chai';

/* eslint-disable no-undef */

let jsxRules;

describe('react jsx rules', () => {

  before(() => {
    jsxRules = require('../rules/react-jsx');
  });

  it('contains only jsx rules', () => {
    const jsxRuleIds =
      Object.keys(jsxRules.rules)
        .filter(ruleId => !ruleId.startsWith('react/jsx'));

    expect(jsxRuleIds).to.be.lengthOf(0);
  });

  it('does not contain any undefined rules', () => {
    const jsxRuleIds =
      Object.keys(jsxRules.rules)
        .filter(rule => rule === undefined);

    expect(jsxRuleIds).to.be.lengthOf(0);
  });
});

/* eslint-enable no-undef */
