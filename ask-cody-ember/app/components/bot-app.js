// ./app/components/bot-app.js
// This code is a modified version of the code provided by Pusher.com for bot-app
// connectivity.
// Authors: Kristen Wright, Pusher.com

import Component from '@ember/component';
import axios from 'npm:axios';
import Pusher from 'npm:pusher-js';

export default Component.extend({
    chats: null,
    init() {
        this._super(...arguments);
        this.set('chats', []);
        let pusher = new Pusher('dcf5aa164ff25e72134a', {
            cluster: 'us2',
            encrypted: true
        });
        const channel = pusher.subscribe('bot');
        channel.bind('bot-response', data => {
            const response = {
                speech: data.speech,
                query: data.query
            }
            this.get('chats').pushObject(response);
        });
    },

    actions: {
        send() {
            const text = this.get('message');
            axios.post('http://localhost:3000/dialogue', { text });
            this.set('message', '');
        }
    }
});
