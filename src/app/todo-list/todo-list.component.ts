import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output}from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
    @Input() mission : any;
    @Input() markedDone : any;
    @Output() deleteThing = new EventEmitter<void>();
    @Output() markAsDoneMission = new EventEmitter<void>();
    @Output() Undo = new EventEmitter<void>();

    deleteItem(){
      this.deleteThing.emit();
    }

    markAsDone() {
      this.markAsDoneMission.emit();
    }

    UndoItem(){
      this.Undo.emit();
    }
}
