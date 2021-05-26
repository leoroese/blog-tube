[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

#DISCLAIMER!!
For the mono repo setup of husky, I show here how to install the husky directory for v6 in a sub folder. In this example I use git-husky-setup but you can use something like a .config folder to store these custom script commits

Also, this will make it so that the husky scripts defined within the .husky directory to be executed no matter what sub repo you are working in. Meaning changes in next-ts-frontend will execute the .husky pre-commit script from git-husky-setup

The way to fix this so that only the packages with changes are run, is to use a library called Lerna
https://www.npmjs.com/package/lerna

I haven't had the time to set this up yet but plan on it to learn here in a bit.
