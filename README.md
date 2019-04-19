# AskCody v0.1

_AskCody_ is an existing in-production chatbot for frequently asked questions that UITS encounters. However, AskCody did not in its starting state have an existing interactive interface (aside from the one provided by its DialogFlow base). We are creating a means to interact with the DialogFlow base of the project including chatting with it, providing feedback, and fitting into a more uniform myCSU experience.

## Prerequisites

This project uses Ember.js web framework and Node along with the Pusher-js library and the Axios library.

* [Node.js and npm](https://nodejs.org/)
* [Ember.js](https://www.emberjs.com/)
* [Ember CLI](https://ember-cli.com/)
* [Ember-Browserify extension](https://github.com/ef4/ember-browserify)
* [Pusher-js Library](https://github.com/pusher/pusher-js)
* [Axios](https://www.npmjs.com/package/axios)

## Running the Code

* __Make sure to set up a .env file _before_ running with your api keys__
* Launch the message server:
* `node app.js`
* Launch the web app:
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

## Known Bugs/Issues

* Fixed size - cannot resize
* Long delay between sent/received messages
* Sometimes receives other user's messages - only works for one client at a time
* Text sometimes clips outside of message divs
* Listener listens for all return-key sequences detected by my browser, sends repeat queries

## Useful Links
* Browser Extensions for Ember development
  * [ember inspector for Chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for Firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### What To Read Next
***
Catch up on everything VueJS-based: [Ask-Cody-Vue](./docs/ask-cody-vue.md)<br/>
Read About Our *Old* EmberKs implementation: [Ask-Cody-Ember](./docs/ask-cody-ember.md)