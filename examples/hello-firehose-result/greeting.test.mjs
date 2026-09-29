import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from './greeting.mjs';

for (const [label, input, expected] of [
  ['plain name', 'Ada', 'Hello, Ada!'],
  ['padded name', ' Ada ', 'Hello, Ada!'],
  ['empty string', '', 'Hello, guest!'],
  ['spaces only', '   ', 'Hello, guest!'],
]) {
  test(label, () => assert.equal(greet(input), expected));
}
