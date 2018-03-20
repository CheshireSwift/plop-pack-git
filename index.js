const { execSync } = require('child_process');

module.exports = function(plop, config) {
  plop.setDefaultInclude({ actionTypes: true });

  plop.setActionType('gitAdd', (answers, config, _plop) => {
    const renderedFiles = config.files.map(file => _plop.renderString(file, answers));
    execSync('git add ' + renderedFiles.join(' '));
    return renderedFiles.join(', ');
  });
}
