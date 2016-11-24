import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'wall',
  templateUrl: './wall.component.html'
})

export class WallComponent {
  public newFeed = {
    msg:''
  }
  public feeds=[
    {
      msg:'First Message irst Comment Hello Manon Comment tu vas tois ça va oy',
      comments:[
        {msg:'First Comment Hello Manon Comment tu vas tois ça va oyou'},
        {msg:'Second Comment irst Comment Hello Manon Comment tu vas tois ça va oy'}
      ]
    },
    {
      msg:'Second Message',
      comments:[
        {msg:'First Comment'},
        {msg:'Second Comment'}
      ]
    }
  ];
}
