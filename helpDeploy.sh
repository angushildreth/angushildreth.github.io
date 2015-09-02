sed '/REPLACEHEAD/{
  s/REPLACEHEAD//g
  r templates/head.html
}' templates/$1 > tmp1

sed '/REPLACEMENU/{
  s/REPLACEMENU//g
  r templates/menu.html
}' tmp1 > tmp2

sed '/REPLACEFOOT/{
  s/REPLACEFOOT//g
  r templates/foot.html
}' tmp2 > $1

rm -rf tmp1
rm -rf tmp2
rm -rf .DS_STORE
