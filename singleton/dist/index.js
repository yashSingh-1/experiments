"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
(0, logger_1.StartLogger)();
setInterval(() => {
    store_1.game.push({
        id: Math.random().toString(),
        whitePlayerName: "BItch",
        blackPlayerName: "Dick",
        moves: ["e3, e4"]
    });
}, 5000);
