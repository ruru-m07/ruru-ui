## Contribution Guidelines

Thank you for your interest in contributing to this project! We're excited to have you collaborate with us.
Before you dive in, please take a moment to review these guidelines.

### General Guidelines

This project is organized as a monorepo and utilizes Turborepo, pnpm, and
[Changesets](https://github.com/changesets/changesets).

#### Before You Submit

- Ensure there are no existing pull requests (PRs) that address the same issue or feature.
- Format your code using `pnpm run prettier`.
- Document your changes by running `pnpm changeset` to create a changeset.
- Execute unit tests with `pnpm test` and update any snapshots as needed.

#### Adding New Features

If you plan to add a new feature, please open an issue first (Feature Request) with detailed information and justification for the feature.
Once the feature request is approved, feel free to proceed with your pull request.

#### Fixing Bugs

When fixing a bug, include a thorough description of the issue, along with a live demo if possible.
Alternatively, you can submit a bug report and reference it in your PR.

#### Contributing to Documentation

Improving documentation is always welcome. Please check for any typos or grammatical errors before submitting changes.

### New to Open Source?

A great way to start contributing is by working on documentation.
The documentation files can be found in `/apps/docs/content/docs`.

To preview the documentation site in development mode,
first build the necessary dependencies using `pnpm run build --filter=./packages/*`, then start the development server with `pnpm run dev --filter=docs`.

No extra environment variables are required to run this project.

## Code of Conduct

Please note that this project is governed by our [Code of Conduct](https://github.com/ruru-m07/ruru-ui?tab=coc-ov-file#readme). By participating, you are expected to uphold this code. Please report any unacceptable behavior to ruru.dev07@gmail.com.

## How to Contribute

1. Fork the repository.
2. Create a new branch for your contribution.
3. Make your changes and ensure they follow our coding conventions and style guidelines.
4. Test your changes thoroughly.
5. Submit a pull request (PR) with a clear explanation of your changes and why they are beneficial.

## Issue Reporting

If you encounter a bug or have a feature request, please open an issue. with a clear title and description.

## Code Guidelines

- Follow the coding conventions and style guidelines used in the project.
- Write clear, concise, and well-documented code.
- Include tests for new features and bug fixes.

## Privacy Policy

We respect your privacy and are committed to protecting it. Any personal information you provide will be used solely for the purpose of contributing to this project. We will not share your information with any third parties without your consent.

## License

By contributing to this project, you agree to license your contributions under the [project's license](https://github.com/ruru-m07/ruru-ui/blob/main/LICENSE).

Thank you for your contribution!
