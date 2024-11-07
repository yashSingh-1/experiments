import { StartLogger } from "./logger"
import { GameManagerInstance } from "./store"

StartLogger();

// setInterval(() => {
//     game.push({
//         id: Math.random().toString(),
//         whitePlayerName: "BItch",
//         blackPlayerName: "Dick",
//         moves: ["e3, e4"]
//     })
// }, 5000)

// gameManager.addMove("some", "ride tht D")
const game = GameManagerInstance.addMove("Ride", "tht D")