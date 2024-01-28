import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component'
import { TodoListComponent } from '../todo-list/todo-list.component'

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [TodoFormComponent,TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})
export class TodoWrapperComponent {
    thingsToDo : any = [];

    recieveFromChild(itemToCommit:string){
      this.thingsToDo.push({ text: itemToCommit, done: false });
        console.log(this.thingsToDo);
    }

    deleteItem(index: number) {
      this.thingsToDo.splice(index, 1);
    }

    markAsDone(index: number) {
      this.thingsToDo[index].done = true;
    }

    UndoItem(index: number){
      this.thingsToDo[index].done = false;
    }
}
