const mkdirp = require('mkdirp');

const config = { captureHTML: false };

const loginTestDir = `login-test`;
mkdirp.sync(loginTestDir);

/*
Login Action intends to summon a provider, pass the provider handler some auth
criteria (username, password) and return an authenticated browser session.
That's the one thing we're doing here...
*/

const doLoginAction = async (options) => {

  options.logger.info(`Running doLoginAction`);

  // FARM OUT: ensure that sub-task types of actions for vendors can apply... first test: usecu
  const provider = require(`${process.cwd()}/utils/tasks/providers/usecu`);

  const loggedInProvider = await new provider(options).execute(options);;

  // Authenticate... for now as of 02/06/2020 simply returningt the browser handle.
  return loggedInProvider;
}

module.exports = doLoginAction;

