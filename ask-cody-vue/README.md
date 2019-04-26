# Using vue-beautiful-chat

## Quick Note
***
1. Most of the Chat Window Components are defined in
``` ask-cody-vue/src ```
2. The actual working model is in
``` ask-cody-vue/dev ```

## Setup
***
> [yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable) is the package manager used in [vue-beautiful-chat](https://vuejsexamples.com/a-simple-and-beautiful-vue-chat-component-backend-agnostic/). So please visit the link for yarn and ensure you have it installed for your system.

## Installation
***
1. Getting the code...
    1. Clone
        ``` 
        git clone https://github.com/adlesh/uits-proto.git 
        ```
        * Checking out the _alesh-dev_ branch is only necessary while the current work hasn't merged with _master_ 
    2. Then checkout 
        ```      
        cd uits-proto
        git checkout alesh-dev
        ```    

2. Installing dependencies for the code...
    ```
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