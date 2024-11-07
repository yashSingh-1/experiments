interface GameProps  {
    id: string,
    whitePlayerName: string,
    blackPlayerName: string,
    moves: string[]
}

export const game: GameProps[] = []

// singleton pattern...only a single instance of the class should be allowed, no more
class GameManager {

    private static instance: GameManager;

    games: GameProps[] = [];
    private constructor() {
        this.games = [];
    }

    
    static getInstance() {
        if(GameManager.instance){
            return GameManager.instance
        }
        GameManager.instance = new GameManager();
        return GameManager.instance;
        
    }

    addMove(gameId: string, move: string){

        console.log("Move added", gameId)
    }
}

export const GameManagerInstance = GameManager.getInstance();


