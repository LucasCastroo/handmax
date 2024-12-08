import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FrequenciaService } from 'src/app/services/frequencia.service';
import { PreCadastroFrequenciaPage } from '../pre-cadastro-frequencia/pre-cadastro-frequencia.page';

@Component({
  selector: 'app-frequencia-treino',
  templateUrl: './frequencia-treino.page.html',
  styleUrls: ['./frequencia-treino.page.scss'],
})
export class FrequenciaTreinoPage implements OnInit {
  @Input() treinoId!: number; // Recebido via Modal
  alunos: any[] = [];

  constructor(
    private frequenciaService: FrequenciaService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.frequenciaService.listarAlunosNoTreino(this.treinoId).subscribe({
      next: (data) => (this.alunos = data),
      error: (err) => console.error('Erro ao carregar alunos:', err),
    });
  }

  salvarFrequencia(): void {
    const frequencia = this.alunos.map((aluno) => ({
      atletaId: aluno.atletaId,
      treinoId: this.treinoId,
      presenca: aluno.frequencia,
    }));
    console.log(frequencia);

    this.frequenciaService.salvarFrequencia(frequencia).subscribe({
      next: () => {
        alert('Frequência salva com sucesso!');
        this.fecharModal();
      },
      error: (err) => console.error('Erro ao salvar frequência:', err),
    });
  }

  fecharModal(): void {
    this.modalController.dismiss();
  }

  async abrirPreCadastroModal(treinoId: number): Promise<void> {
    const modal = await this.modalController.create({
      component: PreCadastroFrequenciaPage,
      componentProps: { treinoId },
    });

    modal.onDidDismiss().then((result) => {
      if(result.data.refresh){
        this.carregarAlunos();
      }
    });

    await modal.present();
  }

}
