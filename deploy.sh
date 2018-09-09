git checkout -B gh-pages
git add -f public
git commit -am "Deployed website"
git filter-branch -f --prune-empty --subdirectory-filter public
git push -f origin gh-pages
git checkout -
