#!/bin/bash

# This script injects the HEAD and MENU into the templates
# Only edit the files in template/
# All HTML files in the working directory are generated via this script
sed '/REPLACEHEAD/{
s/REPLACEHEAD//g
r templates/head.html
}' templates/about.html > about2.html

sed '/REPLACEMENU/{
s/REPLACEMENU//g
r templates/menu.html
}' about2.html > about.html

sed '/REPLACEHEAD/{
s/REPLACEHEAD//g
r templates/head.html
}' templates/index.html > index2.html

sed '/REPLACEMENU/{
s/REPLACEMENU//g
r templates/menu.html
}' index2.html > index.html

sed '/REPLACEHEAD/{
s/REPLACEHEAD//g
r templates/head.html
}' templates/lab.html > lab2.html

sed '/REPLACEMENU/{
s/REPLACEMENU//g
r templates/menu.html
}' lab2.html > lab.html

sed '/REPLACEHEAD/{
s/REPLACEHEAD//g
r templates/head.html
}' templates/research.html > research2.html

sed '/REPLACEMENU/{
s/REPLACEMENU//g
r templates/menu.html
}' research2.html > research.html

sed '/REPLACEHEAD/{
s/REPLACEHEAD//g
r templates/head.html
}' templates/vita.html > vita2.html

sed '/REPLACEMENU/{
s/REPLACEMENU//g
r templates/menu.html
}' vita2.html > vita.html

# cleanup
rm -rf about2.html
rm -rf index2.html
rm -rf lab2.html
rm -rf research2.html
rm -rf vita2.html


