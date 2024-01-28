import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
    @Output() sendToParent = new EventEmitter<string>();

    itemToCommit : string = '';

    sendItem(){
        this.sendToParent.emit(this.itemToCommit);
        this.itemToCommit = '';
    }
}
