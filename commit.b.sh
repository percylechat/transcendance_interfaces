#!/bin/bash
branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')
git pull origin $branch

hs=`hostname`
echo $hs
if [ ${hs} = 'kusanagi' ]; then
git config --global user.name "bussiere"
git config --global user.email "bussiere@gmail.com"
else
echo "no  publishing no kusanagi"
fi
python3 version.py
npm publish
git add .
current="`date +'%Y-%m-%d %H:%M:%S'`"
msg="Updated: $current"
git commit -m "wip $branch $msg"
git push origin $branch
