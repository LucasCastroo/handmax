import { Component, OnInit } from '@angular/core';
import { Chart, ChartData, ChartType, registerables } from 'chart.js';
import { AtletaService } from 'src/app/services/atleta.service';
import jsPDF from 'jspdf';
import 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-relatorio-social',
  templateUrl: './relatorio-social.page.html',
  styleUrls: ['./relatorio-social.page.scss'],
})
export class RelatorioSocialPage implements OnInit {
  public condicoesMoradiaData: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#FF6384',
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
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#FF6384',
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
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#FF6384',
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
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };
  public cadastroNISType: ChartType = 'pie';

  constructor(private atletaService: AtletaService) {
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
      error: (err) => console.log('Erro ao obter gráfico de pessoas em casa: ', err),
    });
  }

  carregarDadosGraficosRenda(): void {
    this.atletaService.getRendaFamiliar().subscribe({
      next: (data) => {
        this.rendaFamiliarData.labels = data.map((item) => item.faixa);
        this.rendaFamiliarData.datasets[0].data = data.map((item) => item.total);
      },
      error: (err) => console.log('Erro ao obter gráfico de renda familiar: ', err),
    });
  }

  carregarDadosGraficosNIS(): void {
    this.atletaService.getCadastroNIS().subscribe({
      next: (data) => {
        this.cadastroNISData.labels = data.map((item) => item.cadastroNIS);
        this.cadastroNISData.datasets[0].data = data.map((item) => item.total);
      },
      error: (err) => console.log('Erro ao obter gráfico de CADASTROnis: ', err),
    });
  }

  generatePDF() {
    const pdf = new jsPDF('p', 'mm', 'a4');

    // Títulos
    pdf.setFontSize(18);
    pdf.text('Relatório Social', 10, 10);

    // Espaço para o primeiro gráfico
    pdf.setFontSize(14);
    pdf.text('Condições de Moradia:', 10, 20);
    const canvas1 = <HTMLCanvasElement>document.querySelector('#canvasMoradia');
    if (canvas1) {
      const imgData1 = canvas1.toDataURL('image/png');
      pdf.addImage(imgData1, 'PNG', 10, 25, 190, 100);
    }

    // Espaço para o segundo gráfico
    pdf.setFontSize(14);
    pdf.text('Pessoas em Casa:', 10, 130);
    const canvas2 = <HTMLCanvasElement>document.querySelector('#canvasPessoas');
    if (canvas2) {
      const imgData2 = canvas2.toDataURL('image/png');
      pdf.addImage(imgData2, 'PNG', 10, 135, 190, 100);
    }

    // Espaço para o terceiro gráfico
    pdf.addPage();
    pdf.setFontSize(14);
    pdf.text('Renda Familiar:', 10, 10);
    const canvas3 = <HTMLCanvasElement>document.querySelector('#canvasRenda');
    if (canvas3) {
      const imgData3 = canvas3.toDataURL('image/png');
      pdf.addImage(imgData3, 'PNG', 10, 15, 190, 100);
    }

    // Espaço para o quarto gráfico
    pdf.setFontSize(14);
    pdf.text('Cadastro NIS:', 10, 120);
    const canvas4 = <HTMLCanvasElement>document.querySelector('#canvasNIS');
    if (canvas4) {
      const imgData4 = canvas4.toDataURL('image/png');
      pdf.addImage(imgData4, 'PNG', 10, 125, 190, 100);
    }

    pdf.save('relatorio.pdf');
  }
}
