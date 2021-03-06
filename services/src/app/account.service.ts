import { Injectable } from '@angular/core'
import { LoggingService } from './logging.service'
@Injectable()
export class AccountService {

    constructor(private logginService:LoggingService){}

    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];
    
    addCount(name:string,status:string){
      this.accounts.push({name:name,status:status})
    }

    updateAccount(id:number,status,string){
      this.accounts[id].status = status;
      this.logginService.logStatusChange(status)
      
    }
}