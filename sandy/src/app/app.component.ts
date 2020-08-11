import { ExampleComponentComponent } from './example-component/example-component.component';

import { MatDialog } from '@angular/material/dialog'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandy';
  constructor(private dialog:MatDialog )
  {

  }
  
menu = [
  {name:"Barbeque Nation",place:"vijayawada",imageurl:"/assets/img/04.jpg"},
  {name:"Ming Garden",place:"Vishakapatnam",imageurl:"/assets/img/04.jpg"},
  {name:"Kwality Biryani-Kabab",place:"Kurnool",imageurl:"/assets/img/04.jpg"},
  {name:"Southern Spice",place:"Tirupathi",imageurl:"/assets/img/04.jpg"},
  {name:"Restaurant ",place:"Tirupathi",imageurl:"/assets/img/04.jpg"},
  {name:"Restaurant ",place:"Tirupathi",imageurl:"/assets/img/04.jpg"},
  {name:"Restaurant ",place:"Tirupathi",imageurl:"/assets/img/04.jpg"},
  {name:"Restaurant ",place:"Tirupathi",imageurl:"/assets/img/04.jpg"},
  {name:"Restaurant ",place:"Tirupathi",imageurl:"/assets/img/04.jpg"},
  {name:"Restaurant ",place:"Tirupathi",imageurl:"/assets/img/04.jpg"},
  {name:"Restaurant ",place:"Tirupathi",imageurl:"/assets/img/04.jpg"},
  {name:"Restaurant ",place:"Tirupathi",imageurl:"/assets/img/04.jpg"}
]

showDialog(obj)
{
  this.dialog.open(ExampleComponentComponent,{data:{name:obj}});
}



}
export class InputOverviewExample {}
