import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent {

	homeClick(){
		alert("Home has been clicked");
	}
}
