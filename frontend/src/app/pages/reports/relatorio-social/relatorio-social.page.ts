import { Component, OnInit } from '@angular/core';
import { Chart, ChartData, ChartType, registerables } from 'chart.js';
import { AtletaService } from 'src/app/services/atleta.service';

@Component({
  selector: 'app-relatorio-social',
  templateUrl: './relatorio-social.page.html',
  styleUrls: ['./relatorio-social.page.scss'],
})
export class RelatorioSocialPage implements OnInit {
  public condicoesMoradiaData: ChartData<'pie'> = {
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
  public condicoesMoradiaType: ChartType = 'pie';

  public pessoasEmCasaData: ChartData<'pie'> = {
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
  public pessoasEmCasaType: ChartType = 'pie';

  public rendaFamiliarData: ChartData<'pie'> = {
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
  public rendaFamiliarType: ChartType = 'pie';

  public cadastroNISData: ChartData<'pie'> = {
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
  public cadastroNISType: ChartType = 'pie';
  
  constructor(
    private atletaService: AtletaService
  ) {
        // Registra todos os elementos do Chart.js
        Chart.register(...registerables);
  }

  ngOnInit() {
    this.carregarDadosGraficoMoradia();
    this.carregarDadosGraficoPessoas();
    this.carregarDadosGraficosRenda();
    this.carregarDadosGraficosNIS();
  }

  carregarDadosGraficoMoradia(): void {
    this.atletaService.getCondicoesMoradia().subscribe({
      next: (data) => {
        // Atualizando os dados do gráfico
        this.condicoesMoradiaData.labels = data.map((item) => item.condicao);
        this.condicoesMoradiaData.datasets[0].data = data.map((item) => item.total);
      },
      error: (err) => console.error('Erro ao carregar dados do gráfico', err),
    });
  }

  carregarDadosGraficoPessoas(): void {
    this.atletaService.getPessoasEmCasa().subscribe({
      next: (data) => {
        this.pessoasEmCasaData.labels = data.map((item) => item.faixa);
        this.pessoasEmCasaData.datasets[0].data = data.map((item) => item.total);
      },
      error: (err) => console.log('Erro ao obter gráfico de pessoas em casa: ', err)
    });
  }

  carregarDadosGraficosRenda(): void{
    this.atletaService.getRendaFamiliar().subscribe({
      next: (data) => {
        this.rendaFamiliarData.labels = data.map((item) => item.faixa);
        this.rendaFamiliarData.datasets[0].data = data.map((item) => item.total);
      },
      error: (err) => console.log('Erro ao obter gráfico de renda familiar: ', err)
    });
  }

  carregarDadosGraficosNIS(): void{
    this.atletaService.getCadastroNIS().subscribe({
      next: (data) => {
        this.cadastroNISData.labels = data.map((item) => item.cadastroNIS);
        this.cadastroNISData.datasets[0].data = data.map((item) => item.total);
      },
      error: (err) => console.log('Erro ao obter gráfico de CADASTROnis: ', err)
    });
  }
}
