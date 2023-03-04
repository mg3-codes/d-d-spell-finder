# Contributing :wave:

Thank you for considering contributing to this project! Please read below to learn about our rules and processes.

## Overview

1. Fork this repo to your own account
1. Write code
1. Run automated tools (prettier, eslint...)
1. Open PR!

## Best Practices

In no particular order, here are some things to keep in mind.

- Reuse code whenever possible
- Extend interfaces and reuse types wherever possible
- Use descriptive variable names that make sense for the context
- Consider suggestions from automated tools we use

## Linting

This project uses [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) to enforce code style and best practices. Before submitting a PR please run `yarn lint` to ensure that you have not created any new errors or warnings. The PR build will fail if there are outstanding errors from any of these tools

There are instances where disabling a rule could be needed. In these instances, please disable the rule for the smallest area possible and leave a comment for why it should be disabled.

```tsx
const myCoolFunc = () => {
	// We really need to do this here because {really good reason}
	/* eslint-disable @typescript-eslint/no-empty-function */
	const func = () => {};
	/* eslint-disable @typescript-eslint/no-empty-function */
}
```

## Opening a PR

Once you feel that your code is ready to merge, open a PR against `main`. Someone should automatically be tagged for review.

Pay attention to any automated steps that run on your PR. If they fail, we will probably ask you to fix the errors before reviewing your code further. We may also request changes before approving your code for merging.
