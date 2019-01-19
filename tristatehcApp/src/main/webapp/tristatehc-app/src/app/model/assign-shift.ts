import {SelectItem} from 'primeng/api';
export class AssignShift{
    shiftDate: Date ;
    shiftId:string;
    custid:string;
    shiftTitleCode:string[];
    selectedTitle:SelectItem;
    shiftTime:string[];
     selectedShiftTime:SelectItem;
    nameList:string[];
    selectedName:SelectItem;
    status:string[];
    selectedStatus:SelectItem;
    timeIn:Date;
    timeOut:Date;
    changeReason:string;
     fut1:string;
     fut2:string;
    
    breakTime:Date;
    
    messageCadidateList:string[];
    selectedMessageCadidates:SelectItem;
    comments:string;
    action:string;
    


    
}