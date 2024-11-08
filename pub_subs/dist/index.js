"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubSubManager_1 = require("./PubSubManager");
setInterval(() => {
    const pubsub = PubSubManager_1.PubSubManager.getInstance();
    pubsub.userSubscribe(Math.random().toString(), "APPL");
}, 2000);
