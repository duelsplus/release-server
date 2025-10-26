/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/datastores.js and config/models.js )            *
   ***************************************************************************/

  models: {
    datastore: 'postgresql',
    migrate: 'safe'
  },
  sockets: {
    onlyAllowOrigins: ['https://launcher-updates.duelsplus.com']
  },
  session: {
    cookie: { secure: false },
    proxy: true
  },
  http: {
    trustProxy: true
  },
  trustProxy: true,

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  port: 5014

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // }

  // auth: {
  //   secret: 'temppass'
  // }

};
