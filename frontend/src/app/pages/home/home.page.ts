import { Component, OnInit } from '@angular/core';
import { AtletaService } from 'src/app/services/atleta.service';
import { TreinoService } from 'src/app/services/treino.service';
import { Chart, ChartData, ChartOptions, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  totalAtletas!: number;
  treinosCarregados: any[] = [];

  pieChartData: ChartData<'pie'> = {
    labels: [], // Rótulos para as condições de moradia
    datasets: [
      {
        data: [], // Dados numéricos para cada rótulo
        backgroundColor: [
          '#FF6384', // Defina cores para cada setor
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };
  pieChartType: ChartType = 'pie';

  pessoasEmCasaData: ChartData<'pie'> = {
    labels: [], // Rótulos para as condições de moradia
    datasets: [
      {
        data: [], // Dados numéricos para cada rótulo
        backgroundColor: [
          '#FF6384', // Defina cores para cada setor
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };
  pessoasEmCasaType: ChartType = 'pie';


  constructor(
    private atletaService: AtletaService,
    private treinoService: TreinoService
  ) {
    // Registra todos os elementos do Chart.js
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.carregarAtletas();
    this.carregarTreinos();
    this.carregarDadosGrafico();
  }

  carregarAtletas(): void {
    this.atletaService.countAll().subscribe({
      next: (date) => (this.totalAtletas = date),
      error: (err) => console.log('Erro: ', err),
    });
  }

  carregarTreinos(): void {
    this.treinoService.findNextThree().subscribe({
      next: (date) => (this.treinosCarregados = date),
      error: (err) => console.log('Erro: ', err),
    });
  }

  carregarDadosGrafico(): void {
    this.atletaService.getCondicoesMoradia().subscribe({
      next: (data) => {
        // Atualizando os dados do gráfico
        this.pieChartData.labels = data.map((item) => item.condicao);
        this.pieChartData.datasets[0].data = data.map((item) => item.total);
      },
      error: (err) => console.error('Erro ao carregar dados do gráfico', err),
    });

    this.atletaService.getPessoasEmCasa().subscribe({
      next: (data) => {
        this.pessoasEmCasaData.labels = data.map((item) => item.faixa);
        this.pessoasEmCasaData.datasets[0].data = data.map((item) => item.total);
      },
      error: (err) => console.log('Erro ao obter gráfico de pessoas em casa: ', err)
    });
  }
}
