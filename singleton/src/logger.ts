import { game } from "./store"

export const StartLogger = () => {
    setInterval(() => {
        console.log("Here is your moves: ", game)
    }, 5000)
}