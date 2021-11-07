node createREADME.js
git add .
read -p "Enter commit name: " COMMIT
git commit --allow-empty-message -m "${COMMIT}"
git push
rm -rf *vsix
vsce package