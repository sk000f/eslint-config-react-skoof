import { describe, it } from 'mocha';
import { expect } from 'chai';

/* eslint-disable no-undef */

let typeScriptRules;

describe('typescript rules', () => {
  before(() => {
    typeScriptRules = require('../rules/typescript-ts');
  });

  it('contains only TypeScript rules', () => {
    const typeScriptRuleIds = Object.keys(typeScriptRules.rules).filter(ruleId => !ruleId.startsWith('@typescript-eslint/'));

    expect(typeScriptRuleIds).to.be.lengthOf(0);
  });

  it('does not contain any undefined rules', () => {
    const typeScriptRuleIds = Object.keys(typeScriptRules.rules).filter(rule => rule === undefined);

    expect(typeScriptRuleIds).to.be.lengthOf(0);
  });
});

/* eslint-enable no-undef */
