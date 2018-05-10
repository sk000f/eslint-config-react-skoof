import { describe, it } from 'mocha';
import { expect } from 'chai';

/* eslint-disable no-undef */

let reactA11yRules;

describe('react a11y rules', () => {
  before(() => {
    reactA11yRules = require('../rules/react-a11y');
  });

  it('contains only jsx-ally rules', () => {
    const reactA11yRuleIds =
      Object.keys(reactA11yRules.rules)
        .filter(ruleId => !ruleId.startsWith('jsx-a11y/'));

    expect(reactA11yRuleIds).to.be.lengthOf(0);
  });

  it('does not contain any undefined rules', () => {
    const reactA11yRuleIds =
      Object.keys(reactA11yRules.rules)
        .filter(rule => rule === undefined);

    expect(reactA11yRuleIds).to.be.lengthOf(0);
  });
});

/* eslint-enable no-undef */
