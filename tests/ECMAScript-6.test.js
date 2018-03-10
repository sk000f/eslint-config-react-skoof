import { describe, it } from 'mocha';
import { expect } from 'chai';

/* eslint-disable no-undef */

let es6Rules;

describe('ECMAScript 6 rules', () => {

  before(() => {
    es6Rules = require('../rules/ECMAScript-6');
  });

  it('does not contain any react rules', () => {
    const es6RuleIds =
      Object.keys(es6Rules.rules)
        .filter(ruleId => ruleId.startsWith('react/'));

    expect(es6RuleIds).to.be.lengthOf(0);
  });

  it('does not contain any undefined rules', () => {
    const es6RuleIds =
      Object.keys(es6Rules.rules)
        .filter(rule => rule === undefined);

    expect(es6RuleIds).to.be.lengthOf(0);
  });
});

/* eslint-enable no-undef */
