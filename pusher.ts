import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher ({
    appId: "1527043",
    key: "baea44dc0b52a6993516",
    secret: "158f1712395ff51a4da3",
    cluster: "us2",
    useTLS: true
});

export const clientPusher = new ClientPusher ('baea44dc0b52a6993516', {
    cluster: 'us2',

});