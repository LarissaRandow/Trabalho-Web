export class Message {
    content: string;
    username: string;
    userID?: string;
    messageID?: string;    


    constructor( content: string,username: string, userID?: string, messageID?: string){
        this.content = content;
        this.messageID = messageID;
        this.userID = userID;
        this.username = username;
    }

}