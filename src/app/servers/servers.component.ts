import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template : `
  // <app-server></app-server>
  // `,
   templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 
allowNewServer = false;
serverNameStr : String;
serverCreationStatus: String;
  constructor() { 
    this.serverNameStr = "OnLoad Abc";
this.serverCreationStatus = 'No Server Created';
setTimeout(()=>{
  this.allowNewServer = true;
},2000);

  }
getColor(){return 'green';}
  serverCreated(){
    this.serverCreationStatus = 'Server Created ' + this.serverNameStr
  }

  onUpdateServerName(event: any){
console.log(event)

this.serverNameStr = (<HTMLInputElement>event.target).value;

  }

  ngOnInit() {
  }

}
