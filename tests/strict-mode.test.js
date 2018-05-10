import { describe, it } from 'mocha';
import { expect } from 'chai';

/* eslint-disable no-undef */

let strictModeRules;

describe('strict mode rules', () => {
  before(() => {
    strictModeRules = require('../rules/strict-mode');
  });

  it('contains only the strict rule', () => {
    const strictModeRuleIds = Object.keys(strictModeRules.rules);

    expect(strictModeRuleIds).to.be.lengthOf(1);
    expect(strictModeRuleIds[0]).to.be.equal('strict');
  });

  it('does not contain any react rules', () => {
    const strictModeRuleIds =
      Object.keys(strictModeRules.rules)
        .filter(ruleId => ruleId.startsWith('react/'));

    expect(strictModeRuleIds).to.be.lengthOf(0);
  });

  it('does not contain any undefined rules', () => {
    const strictModeRuleIds =
      Object.keys(strictModeRules.rules)
        .filter(rule => rule === undefined);

    expect(strictModeRuleIds).to.be.lengthOf(0);
  });
});

/* eslint-enable no-undef */
