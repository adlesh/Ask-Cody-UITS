import Vue from 'vue'
import App from './App.vue'
import Chat from 'plugin'
import vmodal from 'vue-js-modal'

/* import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Pusher from 'pusher'
import axios from 'axios'
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
});

const dfURL = "https://api.dialogflow.com/v1/query?v=20150910";
const token = process.env.DEVELOPER_ACCESS_TOKEN;

app.set('port', process.env.PORT || 3000);
app.post('/dialogue', (req, res) => {
    const data = {
        query: req.body.text,
        lang: 'en',
        sessionId: '1234567890!@#$%^&*()'
    }

    axios.post(`${dfURL}`, data, {headers: { Authorization: `Bearer ${token}` }})
    .then( response => {
        const responseData = {
            query: data.query,
             speech: response.data.result.fulfillment.speech
        };
        pusher.trigger('bot', 'bot-response', responseData);
        console.log("Received a response from Dialogflow:");
        console.log(responseData);
    })
})

app.listen(app.get('port'), () => {
    console.log("Listening on " + app.get('port'));
}) */

Vue.use(vmodal , { dialog: true })
Vue.use(Chat, {})

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App)
})
