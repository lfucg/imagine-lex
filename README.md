# Example Drops 8 Composer

[![CircleCI](https://circleci.com/gh/pantheon-systems/example-drops-8-composer.svg?style=shield)](https://circleci.com/gh/pantheon-systems/example-drops-8-composer)
[![Pantheon example-drops-8-composer](https://img.shields.io/badge/dashboard-drops_8-yellow.svg)](https://dashboard.pantheon.io/sites/c401fd14-f745-4e51-9af2-f30b45146a0c#dev/code)
[![Dev Site example-drops-8-composer](https://img.shields.io/badge/site-drops_8-blue.svg)](http://dev-example-drops-8-composer.pantheonsite.io/)

This repository is a start state for a Composer-based Drupal workflow with Pantheon. It is meant to be copied by the the [Terminus Build Tools Plugin](https://github.com/pantheon-systems/terminus-build-tools-plugin) which will set up for you a brand new

* GitHub repo
* Free Pantheon sandbox site
* A CircleCI configuration to run tests and push from the source repo (GitHub) to Pantheon.

For more background information on this style of workflow, see the [Pantheon documentation](https://pantheon.io/docs/guides/github-pull-requests/).

## Important files and directories

### `/web`

Pantheon will serve the site from the `/web` subdirectory due to the configuration in `pantheon.yml`, facilitating a Composer based workflow. Having your website in this subdirectory also allows for tests, scripts, and other files related to your project to be stored in your repo without polluting your web document root.

#### `/config`

One of the directories moved to the git root is `/config`. This directory holds Drupal's `.yml` configuration files. In more traditional repo structure these files would live at `/sites/default/config/`. Thanks to [this line in `settings.php`](https://github.com/pantheon-systems/example-drops-8-composer/blob/54c84275cafa66c86992e5232b5e1019954e98f3/web/sites/default/settings.php#L19), the config is moved entirely outside of the web root.

## Updating your site

When using this repository to manage your Drupal site, you will no longer use the Pantheon dashboard to update your Drupal version. Instead, you will manage your updates using Composer. Ensure your site is in Git mode, clone it locally, and then run composer commands from there.  Commit and push your files back up to Pantheon as usual.

## Local Development

### Copying Codebase and setting up remotes to Pantheon and Github

We will keep the Github repo for Imagine Lexington and the Pantheon codebase in sync and therefore will need two remote urls for this project locally. Refer to the documentation on [Pantheon](https://pantheon.io/docs/guides/collaborative-development/) to help with setting that up.

Development will go through Github for feature branches and pull requests, then code, can be sent up to Pantheon's dev environment after merged into Github.

### Lando

Local development requires the use of [Lando](https://docs.devwithlando.io/). Specifically, version v3.0.0-beta.47 was used for set up of this build. The specific version is the latest stable release of the software and can be found on [Github](https://github.com/lando/lando/releases/tag/v3.0.0-beta.47).

### local.settings.php

Create a local.settings.php in /sites/default/ (which is ignored by git).

It should include:

```
if (getenv('LANDO') === 'ON') {
  $lando_info = json_decode(getenv('LANDO_INFO'), TRUE);
  $settings['trusted_host_patterns'] = ['.*'];
  $settings['hash_salt'] = md5(getenv('LANDO_HOST_IP'));
  $databases['default']['default'] = [
    'driver' => 'mysql',
    'database' => $lando_info['database']['creds']['database'],
    'username' => $lando_info['database']['creds']['user'],
    'password' => $lando_info['database']['creds']['password'],
    'host' => $lando_info['database']['internal_connection']['host'],
    'port' => $lando_info['database']['internal_connection']['port'],
  ];
}
```

### drush and lando issues
(JOSH) Drush was not executing correctly for me so I followed the steps from this comment on a thread in Github for [Lando Issues](https://github.com/lando/lando/issues/1318#issuecomment-444274698).

Additionally I had to chmod to 755, the drush directory in that `usr/local/bin` location.


### development.services.yml

If you want to turn twig debugging on and cache off be sure to make your development.services.yml look like this:

```
parameters:
  http.response.debug_cacheability_headers: true
  twig.config:
    debug: true
    auto_reload: true
    cache: false
services:
  cache.backend.null:
    class: Drupal\Core\Cache\NullBackendFactory
```
(NOTE: This can slow local page maneuvering down quite a bit. So disble the debug and turn cache back on if you want to speed things up a little bit.)

#### Getting started

Lando will use the .lando.yml file to set up your local environment. A simple `lando start` and then a `lando pull` should connect you to the Pantheon build.

You may have to generate a machine token for Lando on Pantheon. To do so go to Pantheon Dashboard --> Account --> Machine Tokens to generate a token for the Lando Machine.
Run `terminus auth:login --machine-token=<token>` to authenticate the local development machine. Then run `lando pull`.









