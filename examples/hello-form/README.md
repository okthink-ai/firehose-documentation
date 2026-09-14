# Practice a visible browser change

Save `index.html` in a disposable Git project on the Firehose server. Commit that
baseline, then open the file in a browser with JavaScript enabled. No dependencies,
credentials, backend, or development server are needed.

The original form trims nonblank names but displays `Hello, !` for empty and
spaces-only values. The task is to make those two cases display `Hello, guest!`
while preserving submission by button and Enter. Follow the website's
`/guides/project-workflow/` page for the complete task.

The completed reference is in [hello-form-result](../hello-form-result/README.md).
Keep it separate until you have attempted the change. Browser tests exercise both
fixtures, including all four inputs, keyboard submission, and text rendering.
