import { describe, it } from 'mocha';
import { expect } from 'chai';

/* eslint-disable no-undef */

let reactRules;

describe('react rules', () => {

  before(() => {
    reactRules = require('../rules/react');
  });

  it('contains only react rules and two overrides', () => {
    const reactRuleIds =
      Object.keys(reactRules.rules)
        .filter(ruleId => !ruleId.startsWith('react/'));

    expect(reactRuleIds).to.be.lengthOf(2);
    expect(reactRuleIds[0]).to.be.equal('class-methods-use-this');
    expect(reactRuleIds[1]).to.be.equal('jsx-quotes');
  });

  it('does not contain any jsx rules', () => {
    const reactRuleIds =
      Object.keys(reactRules.rules)
        .filter(ruleId => ruleId.startsWith('react/jsx'));

    expect(reactRuleIds).to.be.lengthOf(0);
  });

  it('does not contain any undefined rules', () => {
    const reactRuleIds =
      Object.keys(reactRules.rules)
        .filter(rule => rule === undefined);

    expect(reactRuleIds).to.be.lengthOf(0);
  });
});

/* eslint-enable no-undef */
