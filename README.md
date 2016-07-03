# Hyde

![Hyde](http://i.imgur.com/2kB1ceW.png)

### What is it ?

Hyde is a realtime markdown editor built with [Vue.js](https://vuejs.org/) and [Electron](http://electron.atom.io/). Currently in beta but is stable enough to use, so feel free to take it for a spin.

#### Roadmap:

- [x] Code highlighting and formatting
- [ ] Settings to pick highlighting theme (Editor + Preview)
- [ ] Detect changes to files from other sources.
- [ ] Image button (option to host to imgur).
- [ ] Various markdown flavours
- [ ] Settings for font style (serif/sans-serif) / font size
- [ ] Formatting buttons
- [x] Look into adding support for github features like checkboxes.

#### Todo:

- [ ] Move dark-ocean theme out from the brace folder in node_modules into its own repo and publish on NPM
- [ ] Move util functions to to use main process instead of render process, should help performance
- [ ] Use sheet-style for window dialogs (saving/opening)

### Where can i get it ?
Installers for all platforms can be found [here](https://github.com/hparton/hyde/releases). This has not been tested on any platform other than OSX. If you run into any problems, please post an issue and i'll take a look at it.


### Development

The build tools are pretty much just [electron-boilerplate-vue](https://github.com/bradstewart/electron-boilerplate-vue) by [bradstewart](https://github.com/bradstewart/). This will be overhauled at some point to make it a bit leaner.


#### Installing

```
npm install
npm start
```

#### Releasing

```
npm run release
```