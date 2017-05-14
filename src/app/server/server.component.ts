import {Component} from '@angular/core';

@Component({

    selector: 'app-server',
 templateUrl: './server.component.html'
})

export class ServerComponent{
serverName: string = 'Mac Laptop';
serverID: number = 10;
serverStatus: string = 'Offline'

getServerName() {return this.serverName;}

}