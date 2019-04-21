# AskCody v0.4

## Table Of Contents
***
1. [Foreword](#foreword)
2. [Prerequisites](#prereqs)
3. [Getting Started](#getstart)
    * [Quick Note](#getstart-note)
0. [What To Read Next](#readnext)

<a type="hidden" id="foreword"></a>

## Foreword
***
### Team 0

*AskCody* was an existing in-production chatbot for frequently asked questions that UITS encounters. However, AskCody did not in its starting state have an existing interactive interface (aside from the one provided by its DialogFlow base). We were charged with creating a means to interact with the DialogFlow base of the project including chatting with it, providing feedback, and fitting into a more uniform myCSU experience. To accomplish this we first developed [Ask-Cody-Ember] in our  architectural spike. We found out in the next cycle that Ember.js had deprecated, but yet to implement, several key features we would find necessary. As such, we switched to Vue.js and developed the [Ask-Cody-Vue] frontend.


<a type="hidden" id="prereqs"></a>

## Prerequisites
***
This project uses Vue.js web framework and Node along with the Axios library.

* [Node.js and npm]  
  As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. 
* [Vue.js]  
  Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. 
* [vue-beautiful-chat]  
  A simple and beautiful Vue chat component backend agnostic, fully customisable and extendable.
* [yarn](https://yarnpkg.com/en/)  
package manager for your code



<a id="getstart" type="hidden"></a>

## Getting Started
***
<a type="hidden" id="getstart-note"></a>

### Quick Note From Team 0
1. Get a copy of the Source
    * Currently available through: `https://github.com/adlesh/uits-proto`
    * Using git: `git clone https://github.com/adlesh/uits-proto.git`
2. Ask-Cody-Ember is a good place to start for those a bit less web-dev experienced
    * Utilizes [Pusher.js] to emulate the eventual hosting of The Ask-Cody suite on CSU servers
    * Uses [iframe-resizer] to ensure that Ask-Cody is loaded in correctly
3. Ask-Cody-Vue is the current implementation and is a tad more complicated

### Running The Code
1. Ask-Cody-Ember
    * __Make sure to set up a .env file _before_ running with your api keys__
    * Launch the message server:  
     `node app.js`
    * Launch the web app:  
     `ember serve`
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

<a type="hidden" id="readnext"></a>

### What To Read Next
***
Catch up on everything VueJS-based: [Ask-Cody-Vue]  
Read About Our *Old* EmberKs implementation: [Ask-Cody-Ember]


[//]: # (These are a list of re-usable links throughout this README)
[Ask-Cody-Vue]: docs/ask-cody-vue.md
[Ask-Cody-Ember]: docs/ask-cody-ember.md
[Node.js and npm]: https://nodejs.org/
[Vue.js]: https://vuejs.org/
[vue-beautiful-chat]: https://vuejsexamples.com/a-simple-and-beautiful-vue-chat-component-backend-agnostic/
[yarn]: https://yarnpkg.com/en/
[Pusher.js]: https://github.com/pusher/pusher-js
[iframe-resizer]: https://github.com/davidjbradshaw/iframe-resizer