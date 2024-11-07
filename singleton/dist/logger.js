"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartLogger = void 0;
const store_1 = require("./store");
const StartLogger = () => {
    setInterval(() => {
        console.log("Here is your moves: ", store_1.game);
    }, 5000);
};
exports.StartLogger = StartLogger;
