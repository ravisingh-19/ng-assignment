import { Component, Input} from '@angular/core';
import { Todo, AssignmentComponent } from 'src/app/05_assignment/assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {

  @Input()
  todos : Todo[]

  
}