# TV Tracker #
TV Tracker is a menu bar application which runs on both Mac and Windows. It has the ability to add shows that you watch and automatically download the related torrent when it's available.

## Running Locally
Before running anything be sure to run 
```
npm install 
```
### As a web app
```
npm start
```

### Run as an application
```
npm run build
npm run run
```

## Building
This is still being ironed out. Stay tuned!

## Technical Features
I built this project (like all other projects) to learn some new stuff. This project utilizes serval new tools including:
- [Webpack](https://webpack.js.org/) [COMPLETE]
	- Code Splitting
	- ES6 Modules
	- ES6 Transpiler
- [Service Workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)
	- Offline support
	- PWA
	- Push Notifications
- [Electron](http://electron.atom.io/) [COMPLETE]
- [React](https://facebook.github.io/react/) [COMPLETE]
	- [MobX](https://github.com/mobxjs/mobx)
	-	[material-ui](http://www.material-ui.com/#/)
- [WebTorrent](https://github.com/webtorrent/webtorrent) [IN PROGRESS (v2)]
