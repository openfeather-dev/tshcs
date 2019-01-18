import {SelectItem} from 'primeng/api';
export class CreateAssignShiftReq {
    custid : string;
    shiftId:string
    email : string;
    shiftDate : Date;
    shiftTitleCode : SelectItem;
    shiftTime : SelectItem;
    nameList : SelectItem;
    status : SelectItem;
    timeIn : Date;
    timeOut : Date;
    breakTime : Date;
    fut1 : string;
    fut2 : string;
     messageCadidateList : SelectItem;
    comments : string;
    action : string;
   
}