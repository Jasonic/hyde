# hyde

#### Basic Outline

- Split realtime editor using Vue.js
- Built on electron
- Designate a folder for your posts, load all markdown files in this directory into the app and keep it up to date.

#### Extras:

- [ ] Code highlighting and formatting (work on letting this be themed.)
- [ ] Image support.
- [ ] Various markdown flavours
- [ ] Settings for font style (serif/sans-serif)
- [ ] Settings for font size
- [ ] Formatting buttons -> B (adds two asterisks to the start and end of highlighted text)

#### First time user journey:

> Open app
> v
> Splash screen asking user to drag folder to get MD files from / option to make one.
> v
> Show file selection screen with prompt to add new file
> Show file preview screen with placeholder for no content state.
> v
> Create new file/select local file
> v
> Start editing

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