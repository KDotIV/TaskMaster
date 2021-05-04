import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-taskmaster.component.html',
  styleUrls: ['./section-taskmaster.component.css']
})
export class TaskMasterComponent implements OnInit {

result: string;

  public FizzBuzz(value)
  {

    if(value % 3 == 0 && value % 5 == 0)
    {
      this.result = "FizzBuzz";
    }
    else if(value % 3 == 0)
    {
      this.result = "Fizz";
    }
    else if(value % 5 == 0)
    {
      this.result = "Buzz";
    }
    else { this.result = value.toString() }
  }

  constructor() {}

  ngOnInit(): void {
  }
}