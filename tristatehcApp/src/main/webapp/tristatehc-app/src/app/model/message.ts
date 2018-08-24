export class Message{
    messageId: number;
    message: string;
    shiftId: string;
    messageColor: string;
    
    constructor(shiftId: string,message: string){
        this.shiftId = shiftId;
        this.message = message;        
    }
}