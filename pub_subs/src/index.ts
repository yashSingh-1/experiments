import { PubSubManager } from "./PubSubManager"

setInterval(() => {
    const pubsub = PubSubManager.getInstance();

    pubsub.userSubscribe(Math.random().toString(), "APPL")
}, 2000)