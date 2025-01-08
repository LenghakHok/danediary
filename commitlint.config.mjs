export default {
  extends: ["@commitlint/config-conventional"],
  /*
   * Array of functions that return true if commitlint should ignore the given message.
   * Given array is merged with predefined functions, which consist of matchers like:
   *
   * - 'Merge pull request', 'Merge X into Y' or 'Merge branch X'
   * - 'Revert X'
   * - 'v1.2.3' (ie semver matcher)
   * - 'Automatic merge X' or 'Auto-merged X into Y'
   *
   * To see full list, check https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/is-ignored/src/defaults.ts.
   * To disable those ignores and run rules always, set `defaultIgnores: false` as shown below.
   */
  ignores: [(commit) => commit.trim() === ""],
  /*
   * Whether commitlint uses the default ignore rules, see the description above.
   */
  defaultIgnores: true,
  formatter: "@commitlint/format",
  rules: {
    "type-enum": [
      2,
      "always",
      [
        // Changes that affect the build system or dependency-only changes
        "build",
        // Changes to CI workflows
        "ci",
        // Any configuration for developments
        "chore",
        // Documentation-only changes
        "docs",
        // A new feature
        "feat",
        //A bug fix
        "fix",
        // A code change that improves performance
        "perf",
        // A code change that neither fixes a bug nor adds a feature
        "refactor",
        // A commit that reverts a previous commit
        "revert",
        // Changes that do not affect the meaning of the code
        "style",
        // Adding missing tests or correcting existing tests
        "test",
        // Used for automated releases-only
        "release",
      ],
    ],
    "scope-empty": [1, "never"],
    "type-case": [1, "always", "lowercase"],
    "scope-case": [1, "always", "lowercase"],
  },
};
