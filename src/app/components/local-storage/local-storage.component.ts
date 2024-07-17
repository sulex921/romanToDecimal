import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent {
  @Input()  localStorage: any [] = [];
  @Output() delete: EventEmitter<any> = new EventEmitter();

  deleteItem(index:any){
    this.delete.emit(index)
  }

}
