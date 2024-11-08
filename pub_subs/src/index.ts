import { PubSubManager } from "./PubSubManager";

setInterval(() => {
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000);

//You gotta dun the redis server too
// docker run -d -p 6379:6379 redis

// docker exec -it <container_id> /bin/bash
// redis-cli