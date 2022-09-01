import { Component, OnInit } from '@angular/core';
import { CalendarioSemana } from 'src/app/models/CalendarioSemana';
import { Psicologos } from 'src/app/models/Psicologos';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent implements OnInit {
  calendarioSemana : CalendarioSemana[];
  psicologos : Psicologos[];
  horaConsulta : number;
  nomePsicologo : string;
  diaConsulta: number;

  constructor(private agendaService : AgendaService) {
    this.obterTodosPiscologos();
  }

  ngOnInit(): void {}

  showAgenda(id : number): void {
    var element = document.getElementById("calendar");
    element?.removeAttribute("hidden"); 
    console.log(id); 
    this.agendaService
    .obterCalendarioSemana(id)
    .subscribe((calendarioSemana) => (this.calendarioSemana = calendarioSemana));
    console.log(this.calendarioSemana);      
  }
  obterTodosPiscologos(): void {
    this.agendaService
    .obterPsicologos()
    .subscribe((psicologos) => (this.psicologos = psicologos))
  }

  setaCampos(horarioLivre : number,dia : number) : void {
    debugger;
    this.horaConsulta = horarioLivre;
    this.diaConsulta = dia;
  }
}
