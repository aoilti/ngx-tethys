# ngx-tethys 
An UI components based on Worktile Design and Angular.

[![CircleCI](https://circleci.com/gh/atinc/ngx-tethys.svg?style=shield)](https://circleci.com/gh/atinc/ngx-tethys)
[![Coverage Status][coveralls-image]][coveralls-url]
![](https://img.shields.io/badge/Made%20with%20Angular-red?logo=angular)
[![npm (scoped)](https://img.shields.io/npm/v/ngx-tethys?style=flat)](https://www.npmjs.com/package/ngx-tethys)
[![npm](https://img.shields.io/npm/dm/ngx-tethys)](https://www.npmjs.com/package/ngx-tethys)
[![release](https://img.shields.io/github/release-date/atinc/ngx-tethys.svg?style=flat-square
)](https://github.com/atinc/ngx-tethys)
[![docgeni](https://img.shields.io/badge/docs%20by-docgeni-348fe4)](https://github.com/docgeni/docgeni)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


[coveralls-image]: https://coveralls.io/repos/github/atinc/ngx-tethys/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/atinc/ngx-tethys


## Note:
**This repo is only public now, it's far from the level of open source, we not recommended use it in production environment. we do not promise that there will be no breaking changes, only for [Worktile](https://worktile.com/) and [PingCode](https://pingcode.com/)**

# Getting Started

## Installation

Run 
```
ng add ngx-tethys
```
![ng-add-nex-tethys](https://cdn.pingcode.com/open-sources/ngx-tethys/images/ng-add.png)
Manual install via

```
npm install ngx-tethys --save
// or 
yarn add ngx-tethys
```

## Usage

Import some module into every module (e.g. `AppModule`) where you want to use the components, directives, and services.

```
import { ThyButtonModule } from 'ngx-tethys/button';
import { ThyLayoutModule } from 'ngx-tethys/layout';


@NgModule({
  imports: [ ThyButtonModule, ThyLayoutModule ]
})
export class AppModule {
}
```

## Development

```
$ git clone git@github.com:atinc/ngx-tethys.git
$ cd ngx-tethys
$ npm install
$ npm run start
```

## Release & Publish

1. Run `npm run release` to release new version, this command will does the following: 
    - Checkout to `master` and identifies current version and latest tag.
    - Prompts for a new version to select.
    - Create a release branch as `release-v1.0.0`
    - Modifies package metadata (package.json, version.ts) to reflect new release and generate changelog
    - Commits those changes to release branch.
    - Pushes to the git remote.

    You can run `npm run release -- [patch|minor|major|2.0.0]` to skip the version selection prompt and increment the version by that keyword or specify version.
1. Submit pull request from release branch to master
1. Code review & merge pull request for release
1. Run `npm run pub` to pub lib to npm, this command will does the following: 
    - Fetch latest code and checkout to `master`
    - Create tag for new version
    - Pushes tags to git remote
    - Auto run `npm run build` which build source output `built` folder
    - Auto switch `built` folder and run `npm publish` to publish lib to npm


`npm run release -- --dry-run` or `npm run pub -- --dry-run`

running with the flag `--dry-run` allows you to see what commands would be run, without committing to git or updating files. (意思就是打印一下日志让你看看做了哪些步骤，但是并不会真的执行脚本，你可以放心的执行)

## Notes

1. Don't use `barrel index` (should directly import specify component in module, don't import `index.ts`)
1. Should exports component module in `public-api.ts`

