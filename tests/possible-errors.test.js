import { describe, it } from 'mocha';
import { expect } from 'chai';

/* eslint-disable no-undef */

let possibleErrorsRules;

describe('possible errors rules', () => {
  before(() => {
    possibleErrorsRules = require('../rules/possible-errors');
  });

  it('does not contain any react rules', () => {
    const possibleErrorsRuleIds =
      Object.keys(possibleErrorsRules.rules)
        .filter(ruleId => ruleId.startsWith('react/'));

    expect(possibleErrorsRuleIds).to.be.lengthOf(0);
  });

  it('does not contain any undefined rules', () => {
    const possibleErrorsRuleIds =
      Object.keys(possibleErrorsRules.rules)
        .filter(rule => rule === undefined);

    expect(possibleErrorsRuleIds).to.be.lengthOf(0);
  });
});

/* eslint-enable no-undef */
