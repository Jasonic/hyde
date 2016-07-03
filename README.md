# hyde

![Hyde](http://i.imgur.com/2kB1ceW.png)

#### Basic Outline

- Split realtime editor using Vue.js
- Built on electron
- Designate a folder for your posts, load all markdown files in this directory into the app and keep it up to date.

#### Roadmap:

- [x] Code highlighting and formatting (work on letting this be themed.)
- [ ] Detect changes to files from other sources.
- [ ] Image button (option to host to imgur).
- [ ] Various markdown flavours
- [ ] Settings for font style (serif/sans-serif) / font size
- [ ] Formatting buttons -> B (adds two asterisks to the start and end of highlighted text)
- [ ] Option to edit some default yaml fields like Title, Date, Categories ?
- [ ] Look into adding support for github features like checkboxes.
- [ ] Move util functions to to use main process instead of render process, should help performance
- [ ] Use sheet-style for window dialogs (saving/opening)

#### Todo:

- [ ] Move dark-ocean theme out from the brace folder in node_modules into its own repo and publish on NPM

#### Installing:

Based on [bradstewart/electron-boilerplate-vue](https://github.com/bradstewart/electron-boilerplate-vue).

```
npm install
npm start
```

#### Releasing

```
npm run release
```

#### First time user journey:

> Open app <br>
> v <br>
> Splash screen asking user to drag folder to get MD files from / option to make one. <br>
> v <br>
> Show file selection screen with prompt to add new file <br>
> Show file preview screen with placeholder for no content state. <br>
> v <br>
> Create new file/select local file <br>
> v <br>
> Start editing <br>

based on: https://dribbble.com/shots/2583110-Content-Editor

#### Amazing Ascii Wireframes.
```

_________________________________
|				|				|
|	List		|	Preview		|
|	of			|				|
|	documents	|				|
|				|				|
|				|				|
_________________________________
	
	|
	|
	v

_________________________________
|				|				|
|	Editor		|	Preview		|
|				|				|
|				|				|
|				|				|
|				|				|
_________________________________

Animation idea.
_________________________________
|				|				|
|	Editor		|	Preview		|
|				|				|
|		^		|				| 
|		|		|				|
|---------------|				|
| folder name	|				|
_________________________________

_________________________________
|---------------|				|
|				|	Preview		|
|	files		|				|
|	list		|				|
|				|				|
|				|				|
| 				|				|
_________________________________

?
```
