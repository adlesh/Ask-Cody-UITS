# ***NOTE: Ask-Cody-Ember was DEPRECATED in favor of Ask-Cody-Vue.***

This code is merely included to document our progress and to act as a potential springboard for less-web-dev-centric students that may take over the project. We choose to go to Vue.js as several features in Ember are outdated and are no longer deemed stable. At the same time, Ask-Cody-Vue uses [DialogFlow]'s 

* __Make sure to set up a .env file _before_ running with your api keys__
    ```bash
    PUSHER_APP_ID="Pusher Dashboard > Select your app > select App Keys > COPY APP_ID OVER ALL OF THE TEXT IN THESE QUOTES"  
    PUSHER_APP_KEY="dcf5aa164Pusher Dashboard > Select your app > select App Keys > COPY KEY OVER ALL OF THE TEXT IN THESE QUOTES"
    PUSHER_APP_SECRET="Pusher Dashboard > Select your app > select App Keys > COPY SECRET OVER ALL OF THE TEXT IN THESE QUOTES"
    PUSHER_APP_CLUSTER="Pusher Dashboard > Select your app > select App Keys > COPY CLUSTER OVER ALL OF THE TEXT IN THESE QUOTES"

    DEVELOPER_ACCESS_TOKEN="DialogFlow Dashboard > Select your bot > Click Gear > COPY API KEYS (V1) - DEVELOPER ACCESS TOKEN OVER ALL OF THE TEXT IN THESE QUOTES"
    ```
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


  [DialogFlow]: https://www.dialogflow.com