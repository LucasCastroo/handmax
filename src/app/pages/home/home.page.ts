import { Component, OnInit } from '@angular/core';
import { AtletaService } from 'src/app/services/atleta.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  totalAtletas!: number;
  treinosCarregados: any[] = [];

  constructor(
    private atletaService: AtletaService,
    private treinoService: TreinoService
  ) {}

  ngOnInit(): void {
    this.carregarAtletas();
    this.carregarTreinos();
  }

  carregarAtletas(): void{
    this.atletaService.countAll().subscribe({
      next: (date) => this.totalAtletas = date,
      error: (err) => console.log("Erro: ", err)
    })
  }

  carregarTreinos(): void{
    this.treinoService.findNextThree().subscribe({
      next: (date) => this.treinosCarregados = date,
      error: (err) => console.log("Erro: ", err)
    })
  }
}
