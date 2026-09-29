# Check the completed greeting example

This is one reference result for the Firehose change guide. It is separate from
`hello-firehose`, whose function intentionally retains the original blank-name behavior.
Inputs are strings only; undefined, null, and other types are outside this example.

Save `greeting.mjs` and `greeting.test.mjs` together in a separate folder. In that folder, run:

```sh
node --test greeting.test.mjs
```

Expected result: four passing tests for a plain name, a padded name, an empty string,
and spaces only. The last two return `Hello, guest!`. This is checked sample code,
not a claim about an agent's output or the state of your project.
