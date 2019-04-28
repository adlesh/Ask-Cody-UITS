# Working in Ask-Cody-ember
If for any reason you need to add, change, or update code in the old EmberJS version, this guide provides a breakdown of the files in the directory and how to modify them. For more information on EmberJS itself, you can check out their website [here](https://emberjs.com/).

## Modifying the server code
The goal of the EmberJS implementation was to create a local, native working front-end in order to get an idea of what we want the final version to look like and explore the path we want to take to connect to our message channel and from there, to Dialogflow. To achieve our initial goals we used [Pusher](https://pusher.com/), and used a simple Node listener to receive and send data to the message channel.

The server code exists in `ask-cody-ember/app.js`. A general breakdown of its job is as follows:
* Get Pusher ID and create a Pusher session with your .env file variables
* Create a listener on the defined port (we are using 3000)
* Use [axios](https://www.npmjs.com/package/axios) to post what the listener receives from the user
* Wait for dialogflow response *for each* user query
* Put the response data in a `responseData` variable for the front-end to post
You can also find responseData in the console where you are running app.js for debugging.

If you are making any changes to this file, make sure to recompile. This is the only part of the Ember web app that requires recompiling, as Ember will incrementally update the rest.
## Modifying the chat window
EmberJS provides a convenient live-updating environment to work with while modifying front-end code on their web apps. Once you're ready to launch the ember server, the command to launch is `ember serve`. Navigate to `Localhost:4200` to view the bot window itself, or navigate to `[YOUR_EMBERJS_DIRECTORY]/cody-iframe.html` for the code inside its iframe container. The cody-iframe container is not a part of the live-updating ember site and will need to be refreshed.

***Note that the Dialogflow back-end will not communicate with the app unless you run `node app.js` in your console.***

The files which the chat window uses are as follows:
* `app/component/bot-app.js`: This is the js method used to post messages on screen and send messages to the node listener. **You will need to make sure that your Pusher instance id is updated in this file.** Responses are pushed to the 'chats' keyword on the front-end, and messages are sent from the 'message' input field.
* `app/styles/app.css`: The general css for the bot window. This does not include the collapsible which holds it.
* `app/index.html`: The 'front page' of localhost:4200. This is where we linked up the bot-app component's scripts.
* `app/templates/application.hbs`: This is where we assemble the templates. I kept it simple with only one template--the message window.
* `app/templates/components/bot-app.hbs`: This is the actual bot window's template.

## Modifying the container code
The container code uses [iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer) to create a nice, scalable iframe wrapper that doesn't require a fixed size to display the code. You'll have to hit 'refresh' to see your updates if you're working on this code. You can access it via `[YOUR_EMBERJS_DIRECTORY]/cody-iframe.html`
The files which the container uses are as follows:
* `cody-iframe.html`: iframe wrapper itself, including all scripting to make it work.
* `base.css`: The css for cody-iframe.html.
