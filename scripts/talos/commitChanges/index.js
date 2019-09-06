const runExec = require('../../utilities/runExec');

const commitChanges = message =>
  runExec({ command: `git status` })
    .then(() =>
      runExec({
        command: `git add package.json package-lock.json CHANGELOG.md packages`,
      }),
    )
    .then(() => runExec({ command: `git status` }))
    .then(() => runExec({ command: `ls` }))
    .then(() => runExec({ command: `pwd` }))
    .then(() => runExec({ command: `git commit -m "${message}"` }))
    .then(() => runExec({ command: `git push origin HEAD` }));

module.exports = commitChanges;
