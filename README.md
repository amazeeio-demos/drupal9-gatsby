# Drupal9 Gatsby

## About
Drupal9-Gatsby is for demonstration purposes only. This demo can be used as a foundation for a Headless Drupal / Gatsby project, you shouldn't use this exact setup in production.

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

### Start the docker containers in order to install the Drupal umami demo content
`docker-compose up -d`

### Install the Drupal umami demo content
`docker-compose exec cli drush si demo_umami`

NB: Note down the admin username and password to be able to log into Drupal

### Restart the docker containers in preparation for Gatsby to read the new schema from the umami demo
`docker-compose restart`

### Log into Drupal
Browse to `http://aio-drupal9-gatsby.docker.amazee.io/en/user/login`

### View the Gatsby frontent
Browse to `http://aio-drupal9-gatsby-node-gatsby.docker.amazee.io/`