# Try the greeting example

Use `greeting.mjs` as the starting point for the Firehose first-session guide.
The function intentionally has no fallback for blank names. The follow-up guide
asks an agent to add one.

With Node.js installed, run the baseline checks in this directory:

```sh
node --test
```

These checks assert the **initial** behavior. If you copy this test file into your
practice project, update the two blank-name expectations to `Hello, guest!` when
you complete the improvement. The quickstart only asks you to copy `greeting.mjs`.
