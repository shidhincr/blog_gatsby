git checkout -B master
git add -f public
git commit -am "Deployed website"
git filter-branch -f --prune-empty --subdirectory-filter public
git push -f origin master
git checkout -
