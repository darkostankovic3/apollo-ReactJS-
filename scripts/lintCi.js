const gitlabCILint = require('gitlab-ci-lint');

gitlabCILint.lintFile('.gitlab-ci.yml')
  // eslint-disable-next-line no-console
  .then((result) => console.log(result));
