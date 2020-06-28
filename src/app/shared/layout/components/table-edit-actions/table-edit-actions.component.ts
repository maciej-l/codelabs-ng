import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-edit-actions',
  templateUrl: './table-edit-actions.component.html',
  styleUrls: ['./table-edit-actions.component.scss']
})
export class TableEditActionsComponent implements OnInit {

  @Output() public editClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public removeClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public onEditClicked() {
    this.editClicked.emit(true);
  }

  onRemoveCliked() {
    this.removeClicked.emit(true);
  }

}
