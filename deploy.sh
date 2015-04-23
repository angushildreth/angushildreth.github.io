#!/bin/bash

# This script injects the HEAD and MENU into the templates
# Only edit the files in template/
# All HTML files in the working directory are generated via this script
./helpDeploy.sh index.html
./helpDeploy.sh about.html
./helpDeploy.sh research.html
./helpDeploy.sh publications.html
./helpDeploy.sh lab.html
./helpDeploy.sh vita.html
