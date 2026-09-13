import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from './greeting.mjs';

test('greets a name and trims surrounding whitespace', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!');
  assert.equal(greet(' Ada '), 'Hello, Ada!');
});

test('records the initial blank-name behavior used by the walkthrough', () => {
  assert.equal(greet(''), 'Hello, !');
  assert.equal(greet('   '), 'Hello, !');
});
