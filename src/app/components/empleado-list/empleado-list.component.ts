import { Component, OnInit, Output } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[]
  radioButtonSelected = 'Todos'
  constructor() {
    this.listEmpleados = []
  }

  ngOnInit(): void {
    this.setEmployees()
  }

  setEmployees() {
    this.listEmpleados = [
      { legajo: 1, nombre: 'Pedro', apellido: 'Gomez', sexo: 'Masculino', salario: 25000 },
      { legajo: 2, nombre: 'Maria', apellido: 'Perez', sexo: 'Femenino', salario: 45500 },
      { legajo: 3, nombre: 'Ernesto', apellido: 'Gonzalez', sexo: 'Masculino', salario: 18000 },
      { legajo: 4, nombre: 'Felipe', apellido: 'Rodriguez', sexo: 'Masculino', salario: 42455 },
      { legajo: 5, nombre: 'Ana', apellido: 'Lopez', sexo: 'Femenino', salario: 50000 },
      { legajo: 6, nombre: 'Camila', apellido: 'Gomez', sexo: 'Femenino', salario: 45800 },
      { legajo: 7, nombre: 'Mathias', apellido: 'Suarez', sexo: 'Masculino', salario: 47000 },
      { legajo: 8, nombre: 'Valentina', apellido: 'Gimenez', sexo: 'Femenino', salario: 35548 },
      { legajo: 9, nombre: 'Diego', apellido: 'Perez', sexo: 'Masculino', salario: 38000 },
      { legajo: 10, nombre: 'Lucas', apellido: 'Torres', sexo: 'Masculino', salario: 81200 },
      { legajo: 11, nombre: 'Martha', apellido: 'Gomez', sexo: 'Femenino', salario: 74000 },
      { legajo: 12, nombre: 'Esteban', apellido: 'Paredes', sexo: 'Masculino', salario: 25000 },]
  }

  getAll() {
    return this.listEmpleados.length
  }

  getFemale() {
    return this.listEmpleados.filter(list => list.sexo == 'Femenino').length
  }

  getMale() {
    return this.listEmpleados.filter(list => list.sexo == 'Masculino').length
  }

  employeeCountRadioChange(radioButton: string): void {
    this.radioButtonSelected = radioButton;
  }
}