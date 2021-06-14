# Drupal9 Gatsby

## About

This demo is focused on running Drupal & Gatsby locally in containers. This is not designed to easily run in the lagoon hosted environment.

Drupal9-Gatsby is for demonstration purposes only. This demo can be used as a foundation for a Headless Drupal / Gatsby project, but you shouldn't use this exact setup in production.

## Prerequisites

To get going, please make sure you have installed the lagoon requirements locally: https://docs.lagoon.sh/lagoon/using-lagoon-the-basics/index#requirements

At a minimum you will need docker, docker-compose, and pygmy (see: https://docs.lagoon.sh/pygmy/)

Please note, this demonstration is not currently setup to support Lando.

## Installation

You can get up and running locally by following these steps:

### Clone the repository
`git clone https://github.com/amazeeio/drupal9-gatsby.git drupal9-gatsby && cd $_`

### Build the required docker containers
`docker-compose build`

### Install gatsby dependencies to run gatsby locally
`docker-compose run cligatsby yarn install`

### Install composer dependencies to run drupal locally
`docker-compose run cli composer install`

### Start the docker containers in order to install the Drupal demo modules and content
`docker-compose up -d`

### Install the Drupal basic site with demo content ready for Gatsby to consume over the JSONAPI endpoint
`docker-compose exec cli lagoon/install.sh`

**NB:** Copy down the admin username and password to be able to log into Drupal

### Restart the docker containers in preparation for Gatsby to read the new schema from the umami demo
`docker-compose stop`

`docker-compose restart`

While Gatsby is building in the background, you can run
`docker-compose logs nodegatsby` to watch the progress. Please note, there will be some known errors in the logs from the previous build before the content was generated. The build takes a minute or two to work after the `restart`.

### Log into Drupal
Browse to `http://aio-drupal9-gatsby.docker.amazee.io/en/user/login`
Run `docker-compose exec cli drush uli` to get a onetime login if you didn't note down the admin user and password from the install step above.

### View the Gatsby frontent
Browse to `http://aio-drupal9-gatsby-node-gatsby.docker.amazee.io/`