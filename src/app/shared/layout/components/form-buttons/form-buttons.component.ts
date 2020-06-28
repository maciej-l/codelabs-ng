import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.scss']
})
export class FormButtonsComponent implements OnInit {

  @Input() public formisInvalid = true;

  @Output() public saveClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public cancelClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public onSaveDClicked() {
    this.saveClicked.emit(true);
  }

  public onCancelClicked() {
    this.cancelClicked.emit(true);
  }

}
