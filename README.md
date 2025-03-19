# Surya Akhri Ramadhan Portpolio

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/suryasarafe)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1250ae4f-bce9-4930-b7c7-244ecb0bc3d2/deploy-status)](https://app.netlify.com/sites/suryasarafe/deploys)
[![pages-build-deployment](https://github.com/suryasarafe/suryasarafe.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/suryasarafe/suryasarafe.github.io/actions/workflows/pages/pages-build-deployment)



Just a Web Developer from Bandung



## Source
- [Image 1](https://pngtree.com/freepng/illustration-of-a-man-working-on-a-laptop_5361915.html)

## Live URL

- on [Vercel](https://suryasarafe.vercel.app)
- on [Netlify](https://suryasarafe.netlify.app)
- on [Github](https://suryasarafe.github.com)


## Others
[DigitalOcean Referral URL](https://www.digitalocean.com/?refcode=5bfff24ae113)


## Deploying on github
- open next.config.mjs set output to export
- For dynamic page makesure to use generateStaticParams before export
- then `npm run build`
- type `touch out/.nojekyll` because GitHub Pages ignores _next/ files by default.


## Vercel Deploy only from specipyc branch
- go to vercel -> project -> setting - git section
- in the "Ignored build step" select behaviour "custom" then use 

  `[ "$VERCEL_GIT_COMMIT_REF" != "main" ] && echo "Skipping deploy for branch $VERCEL_GIT_COMMIT_REF" && exit 0`

  this will only trigger deployment when commit to `main` branch, you can also change the branch as needed