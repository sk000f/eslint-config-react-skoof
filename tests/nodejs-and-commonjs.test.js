import { describe, it } from 'mocha';
import { expect } from 'chai';

/* eslint-disable no-undef */

let nodeAndCommonRules;

describe('nodejs and commonjs rules', () => {
  before(() => {
    nodeAndCommonRules = require('../rules/nodejs-and-commonjs');
  });

  it('does not contain any react rules', () => {
    const nodeAndCommonRuleIds =
      Object.keys(nodeAndCommonRules.rules)
        .filter(ruleId => ruleId.startsWith('react/'));

    expect(nodeAndCommonRuleIds).to.be.lengthOf(0);
  });

  it('does not contain any undefined rules', () => {
    const nodeAndCommonRuleIds =
      Object.keys(nodeAndCommonRules.rules)
        .filter(rule => rule === undefined);

    expect(nodeAndCommonRuleIds).to.be.lengthOf(0);
  });
});

/* eslint-enable no-undef */
