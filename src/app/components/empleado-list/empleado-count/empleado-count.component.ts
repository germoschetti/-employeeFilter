import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empleado-count',
  templateUrl: './empleado-count.component.html',
  styleUrls: ['./empleado-count.component.css']
})
export class EmpleadoCountComponent implements OnInit {
  
  @Input() todos:number;
  @Input() female:number;
  @Input() male:number;
  @Output() countRadioButtonChange = new EventEmitter()
  radioButtonSelected = 'Todos';
  constructor() { }

  ngOnInit(): void {
  }

  radioChange():void{
    this.countRadioButtonChange.emit(this.radioButtonSelected)
  }

}
