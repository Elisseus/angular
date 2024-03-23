import { Component } from "@angular/core";

@Component({
    selector: 'todo-list-item',
    templateUrl: './todo-list-item.component.html',
    standalone: true, 

})
export class TodoListItemComponent {
    taskTitle = 'Angular'
    
    updateTitle(newTitle:string) {
        this.taskTitle = newTitle
        
    }

}
