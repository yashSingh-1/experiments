
const stack: string[] = []

export class PubSubManager {
    private static instance: PubSubManager;
    stack: string[] = [];
    private constructor() {
        this.stack = [];
    }

    static getInstance() {
        if(this.instance){
            return PubSubManager.instance;
        }

        PubSubManager.instance = new PubSubManager();
        return PubSubManager.instance;
    }

    AddUserToStack(userID: string, stockName: string ){

    }

    RemoveUserFromStack(userID: string, stockName: string) {

    }

    ForewardUpdatedMessageToUser(userID: string, stockName: string, price: string){
        
    }
}