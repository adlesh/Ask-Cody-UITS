# AskCody v0.4

![Ask-Cody-Vue demo see: docs/assets/ask-vue-typing.gif](docs/assets/ask-vue-typing.gif)

## Table Of Contents
1. [Foreword](#foreword)
2. [Prerequisites](#prereqs)
3. [Getting Started](#getstart)
    * [Quick Note](#getstart-note)
        * [Theming](#note-themes)
        * [Getting The Code](#note-code)
    * [Running The Code](#runcode)
        * [Ask-Cody-Vue](#runcode-vue)
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

### For the current project implementation you will need to install:
* [Node.js and npm]  
  As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.
* [yarn](https://yarnpkg.com/en/)  
package manager for your code
* [git for Windows](https://gitforwindows.org/)  
  While not a necessity, git for Windows provides a helpful BASH emulator for Windows-based users to execute git commands.

Additionally, make sure that you are using an operating system with access to a unix command line shell which will be capable of using git and yarn.

### For information on the project's libraries and troubleshooting you can check:
* [Vue.js]  
  Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.
* [vue-beautiful-chat]  
  A simple and beautiful Vue chat component backend agnostic, fully customisable and extendable.

<a id="getstart" type="hidden"></a>

## Getting Started
***
<a type="hidden" id="getstart-note"></a>

### Quick Note From Team 0
<a type="hidden" id="note-themes"></a>

* __*At the time*__ of writing this, the CreateYou branding had just launched.
    * The color theme is created from the following colors:
        * Primary Colors
            1. Columbus State Blue: #003767, rgb(25,57,102)
            2. Columbus State Red: #e31837, rgb(227, 24, 55)
        * Secondary Colors
            1. Columbus State Purple: #6f1d46, rgb(111,29,70)
            2. Columbus State Green: #b19800, rgb(177,152,0)
            3. Columbus State Orange: #e17d00, rgb(225,125,0)

<a type="hidden" id="note-code"></a>
### Getting and installing the source code
1. Get a copy of the source code
    * Currently available through: `https://github.com/csuchatbotteam/uits_frontend.git`
    * Using git: `git clone https://github.com/csuchatbotteam/uits_frontend.git`
2. [Ask-Cody-Vue] is the current implementation
    * Uses the [vue-beautiful-chat] package found here to create an intercom-like chat service
3. Getting Dependencies
    * The node_modules directory is ignored by git to reduce download and upload times and must be generated
    * Ask-Cody-Vue uses yarn to manage packages, so the terminal commands you want to run are:
        ```bash
        cd ask-cody-vue
        yarn
        cd ask-cody-vue/dev
        yarn
        ```


<a type="hidden" id="runcode"></a>


### Running The Project
***

 __Make sure you have [yarn](https://yarnpkg.com/lang/en/docs/install/) before continuing. Follow the directions in Step 3 from above to make sure the code is installed.__

<a type="hidden" id="runcode-vue"></a>

### Launching Ask-Cody-Vue

1. Build the code for development  
![cd and yarn {watch and dev} example: see docs/assets/ask-vue-cd.gif](docs/assets/ask-vue-cd.gif)
    * To actually launch the site, you want to navigate to the /dev/ folder and use `yarn dev`:
    ```bash
    cd ask-cody-vue/dev
    yarn dev
    ```
    * The site will launch on localhost:4200/ unless you've specified something different. Now you can interact with the chat window!
    * If you are making edits to the chat window and want live updates, you can use the `yarn watch` command. From the root directory in a new terminal window:
    ```bash
    cd ask-cody-vue/
    yarn watch
    ```
    * With both of them running correctly, you should be able to see any edits you make to the site as you go.



<a type="hidden" id="readnext"></a>

### What To Read Next
***
Catch up on everything VueJS-based: [Ask-Cody-Vue]  
Read About Our *Old* EmberJs implementation: [Ask-Cody-Ember]


[//]: # (These are a list of re-usable links throughout this README)
[Ask-Cody-Vue]: docs/ask-cody-vue.md
[Ask-Cody-Ember]: docs/ask-cody-ember.md
[Node.js and npm]: https://nodejs.org/
[Vue.js]: https://vuejs.org/
[vue-beautiful-chat]: https://vuejsexamples.com/a-simple-and-beautiful-vue-chat-component-backend-agnostic/
[yarn]: https://yarnpkg.com/en/
[Pusher.js]: https://github.com/pusher/pusher-js
[iframe-resizer]: https://github.com/davidjbradshaw/iframe-resizer
[uits-proto]: https://www/github.com/adlesh/uits-proto
