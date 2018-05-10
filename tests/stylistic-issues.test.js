import { describe, it } from 'mocha';
import { expect } from 'chai';

/* eslint-disable no-undef */

let stylisticIssueRules;

describe('stylistic issues rules', () => {
  before(() => {
    stylisticIssueRules = require('../rules/stylistic-issues');
  });

  it('does not contain any react rules', () => {
    const stylisticIssueRuleIds =
      Object.keys(stylisticIssueRules.rules)
        .filter(ruleId => ruleId.startsWith('react/'));

    expect(stylisticIssueRuleIds).to.be.lengthOf(0);
  });

  it('does not contain any undefined rules', () => {
    const stylisticIssueRuleIds =
      Object.keys(stylisticIssueRules.rules)
        .filter(rule => rule === undefined);

    expect(stylisticIssueRuleIds).to.be.lengthOf(0);
  });
});

/* eslint-enable no-undef */
