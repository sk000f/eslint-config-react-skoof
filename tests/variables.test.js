import { describe, it } from 'mocha';
import { expect } from 'chai';

/* eslint-disable no-undef */

let variablesRules;

describe('variables rules', () => {

  before(() => {
    variablesRules = require('../rules/variables');
  });

  it('does not contain any react rules', () => {
    const variablesRulesIds =
      Object.keys(variablesRules.rules)
        .filter(ruleId => ruleId.startsWith('react/'));

    expect(variablesRulesIds).to.be.lengthOf(0);
  });

  it('does not contain any undefined rules', () => {
    const variablesRulesIds =
      Object.keys(variablesRules.rules)
        .filter(rule => rule === undefined);

    expect(variablesRulesIds).to.be.lengthOf(0);
  });
});

/* eslint-enable no-undef */
