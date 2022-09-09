import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nour';
  images:any;
  imgs:any;
  index=0;
  moveRight(){
    if(this.index==this.images.length-1){
      this.index=0;
    } else{
      this.index = this.index+1;
    }
      
  }
  moveLeft(){
    if(this.index==0){
      this.index=this.images.length-1;
    } else{
      this.index = this.index-1;
    }
      }
  ngOnInit(): void {

    setInterval((e:any)=>{
      this.moveRight()
    },3000)
    
    this.images =
    [    
      '../assets/p6.jpg',
      '../assets/p1.jpg',
      '../assets/p2.jpg',
      '../assets/p3.jpg',
      '../assets/p4.jpg',
      '../assets/p5.jpg',
]
    
  }
}
