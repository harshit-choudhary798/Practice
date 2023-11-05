import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input('title') title: string = '';

  constructor() { }

  ngOnDestroy() {
    console.log("ngOnDestroy is being called");
  }


  ngOnChanges(){
    console.log(`this is the input ${this.title}`)
  }

  ngOnInit(): void {
    console.log("ngOnInit is being called");
  }

  ngDoCheck(){
    console.log("changing changing ")
  }

  ngAfterContentInit(){
    console.log("after content inning is working")
  }




}
