var path = require('path');

// States and Actions, yeah...

module.exports.runBrowser = require(path.resolve(__dirname, 'run-browser'));
module.exports.closeBrowser = require(path.resolve(__dirname, 'close-browser'));
module.exports.doLoginAction = require(path.resolve(__dirname, 'actions/login'));
module.exports.doGatherAccountsAction = require(path.resolve(__dirname, 'actions/gather-accounts'));
module.exports.doGotoAccountAction = require(path.resolve(__dirname, 'actions/goto-account'));