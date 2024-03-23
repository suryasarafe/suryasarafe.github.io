
npm run buildprod
purgecss -c css.purge.js
mv ./dist/styles.css ./dist/portpolio/browser/styles.css
npx angular-cli-ghpages --dir=dist/portpolio/browser