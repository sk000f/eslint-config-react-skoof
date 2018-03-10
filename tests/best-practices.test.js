import { describe, it } from 'mocha';
import { expect } from 'chai';

/* eslint-disable no-undef */

let bestPracticesRules;

describe('best practices rules', () => {

  before(() => {
    bestPracticesRules = require('../rules/best-practices');
  });

  it('does not contain any react rules', () => {
    const bestPracticeRuleIds =
      Object.keys(bestPracticesRules.rules)
        .filter(ruleId => ruleId.startsWith('react/'));

    expect(bestPracticeRuleIds).to.be.lengthOf(0);
  });

  it('does not contain any undefined rules', () => {
    const bestPracticeRuleIds =
      Object.keys(bestPracticesRules.rules)
        .filter(rule => rule === undefined);

    expect(bestPracticeRuleIds).to.be.lengthOf(0);
  });
});

/* eslint-enable no-undef */
