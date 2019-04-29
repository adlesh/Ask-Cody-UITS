
# Ask-Cody-Vue

## Table of Contents

1. [Working With Vue](#work-vue)

* [Documentation and Guides](#vue-guides)

* [Development Tools](#vue-devtools)

2. [Vue-Beautiful-Chat](#vue-bchat)

3. [Finding Your Way](#find-src)

4. [Standing Alone](#standalone)

<a type="hidden" id="work-vue"></a>

## Working With Vue

***

Vue.js is designed to be an easy-to-learn, but powerful web framework. The core library focuses on the View layer (of MVC) to permit easy integration with existing projects or other frameworks. It is capable of creating immense [SPA](https://en.wikipedia.org/wiki/Single-page_application)'s that mimic the experience of desktop applications.

  

<a type="hidden" id="vue-guides"></a>

* Documentation and Guides on Vue.js

* [Vue Official Guide 2.x](https://vuejs.org/v2/guide/)

* [Vue Official Examples 2.x](https://vuejs.org/v2/examples/)

  

<a type="hidden" id="vue-devtools"></a>

* Development Tools

* [Vue.js devtools](https://github.com/vuejs/vue-devtools)

* Browser extension that aids in debugging Vue.js projects

* Enables developers to:

* View live component tree

* Make quick edits to a running project

* View events that were transmitted

* Monitor Routing/Performance of the system

  
<a type="hidden" id="vue-bchat"></a>

  

## Vue-Beauitful-Chat Library

***

> A simple and beautiful Vue chat component designed to be backend agnostic, fully customisable and extendable.

  

[See their Github here](https://github.com/mattmezza/vue-beautiful-chat)

  

At the time of writing this, most of the Vue-Beautiful-Chat is hosted locally in the ask-cody-vue/src directory. See the [table](#find-src) below for descriptions.

  

## Setup

***

Ensure you've read through the [Prerequisites Section](../README.md#prereqs) of the project's README before proceeding.

  
### Installation

***

1. Getting the code...

1. Clone

```bash

git clone https://github.com/csuchatbotteam/uits_frontend.git

```

2. Then checkout

```bash

cd uits-proto

git checkout alesh-dev

```

* Checking out _any non-master_ branch is only necessary while the current work hasn't merged with _master_

  

2. Installing dependencies for the code...

```bash

cd ask-cody-vue

yarn

cd dev

yarn

```

  

* The above installs all project wide dependencies then installs all of them necessary for the implementation in the dev folder (a.k.a both are necessary as far as I can tell)

  

3. Running the code...

*NOTE: When running with Git BASH, calling 'yarn' produces an error. You must use 'yarn.cmd' instead.*

```

cd ask-cody-vue (or cd .. if in dev directory)

^^^ Just get to the root of the vue project ^^^

  

yarn watch

  

cd dev

yarn dev

```

  

* using yarn watch and yarn dev allows for live editing!

<a type="hidden" id="find-src"></a>

  

## Finding Your Way...

### ask-cody-vue/src/

>This is where the vue-beautiful-chat's code resides. It is the actual implementation of the chat window and launcher. Thus, this is where changes to the actual function of the chat window need to be made.

  

An example could be adding Feedback.vue to src/ to create a Vue template for a launcher panel to the test feedback form. In addition, changes would have to be made to ChatWindow.Vue for it to recognize and utilize this new panel's template.

  

Component | Description

----------|------------

ChatWindow.vue | The full window that users will see and interact with. Combines many of the other Vue files defined in this folder; such as: *Header.vue, MessageList.vue, UserInput.vue*

FeedbackPanel.vue | Creates a Panel that currently holds a link to the feedback form for users to submit a review of their experience

Header.vue | The header of the ChatWindow; currently displays Clock Tower icon and project's working title 'AskCody'. Also contains a button as an option to close the window.

Launcher.vue | The button that should be visible on main page. It is used to open and close the chat window.

Message.vue | Determines which user sent the message, what type of message was sent, and how it should be displayed. The library supports the following types of messages: TextMessage, SystemMessage, TypingMessage[?], EmojiMessage[!], FileMessage[!]

MessageList.vue | Manages the array of messages that represents the current converstion. <br /> __\*The background image of the chatwindow is defined here\*__.

UserInput.vue | Handles user input and prepares messages to be pushed out.

  

### src/assets/

> Different resources like images, icons, etc. for use within the chat window itself.

  

#### dev/src/

Component | Description

----------|------------

App.vue | Demonstrates hosting the chat window and components in a larger website.

Header.vue [!] | Template for the header of the test site.

Footer.vue [!] | Template for the footer of the test site.

colors.js | JSON file containing most of the colors for the test site

<p>

! indicates currently unused or disabled in AskCody <br> ? indicates may be disabled after further discussion

</p>

  

<a type="hidden" id="standalone" ></a>


## Standing On Your Own...

To build a standalone version:

* From a fresh install:

	1. run `yarn` in ask-cody-vue/ and ask-cody-vue/dev/

	2. run `yarn build` in the aforementioned directories

	3. a new directory ask-cody-vue/dev/dist should be created

	4. Open ask-cody-vue.html in a browser to view the standalone app

* From current work:

	1. run `yarn build` in ask-cody-vue/ and ask-cody-vue/dev/

	2. a new directory ask-cody-vue/dev/dist should be created

	3. Open ask-cody-vue.html in a browser to view the standalone app

  



