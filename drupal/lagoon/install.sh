#!/bin/bash

drush si -y
drush pm-enable gatsby gatsby_instantpreview gatsby_fastbuilds jsonapi jsonapi_defaults jsonapi_extras gatsby_extras devel_generate serialization
drush devel-generate:content 5 0 --bundles "article"
drush cim --partial -y
drush cr
