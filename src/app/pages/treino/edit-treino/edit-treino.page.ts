import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AtletaTreinoDTO } from 'src/app/models/atleta-treino-dtomodel';
import { AtletaService } from 'src/app/services/atleta.service';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { ToastService } from 'src/app/services/toast.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-edit-treino',
  templateUrl: './edit-treino.page.html',
  styleUrls: ['./edit-treino.page.scss'],
})
export class EditTreinoPage implements OnInit {
  treinoForm: FormGroup;
  atletas: AtletaTreinoDTO[] = [];
  atletasSelecionados: AtletaTreinoDTO[] = [];
  treinoId!: number;

  toastMessage: string = '';
  activateToast: boolean = false;

  constructor(
    private fb: FormBuilder,
    private treinoService: TreinoService,
    private atletaService: AtletaService,
    private modalController: ModalController,
    private errorHandlingService: ErrorHandlingService,
    private toastService: ToastService
  ) {
    this.treinoForm = this.fb.group({
      local: ['', Validators.required],
      dataHorario: ['', Validators.required],
      criarTreinoTodosAtletas: [false],});
   }

  ngOnInit(): void {
    this.carregarTreino();
    this.carregarAtletas();
  }

  carregarTreino() {
    const treinoId = this.treinoId;
  
    this.treinoService.findById(treinoId).subscribe({
      next: (data) => {
        console.log(data);
        this.treinoForm.patchValue(data);
  
        // Atualizar atletas selecionados com base no treino carregado
        this.atletasSelecionados = data.listarAtletas || [];
        
        // Sincronizar os atletas disponíveis com os selecionados
        this.sincronizarAtletasSelecionados();
      },
      error: (err) => {
        const errorMessage = this.errorHandlingService.handleError(err);
        this.toastService.ativarToast(errorMessage);
    }});
  }
  
  carregarAtletas() {
    this.atletaService.findAllForTreinos().subscribe({
      next: (data) => {
        this.atletas = data;
  
        // Sincronizar atletas disponíveis com selecionados após o carregamento
        this.sincronizarAtletasSelecionados();
      },
      error: (err) => {
        const errorMessage = this.errorHandlingService.handleError(err);
        this.toastService.ativarToast(errorMessage);
    }});
  }
  
  sincronizarAtletasSelecionados() {
    if (this.atletas.length > 0 && this.atletasSelecionados.length > 0) {
      this.atletasSelecionados = this.atletas.filter((atleta) =>
        this.atletasSelecionados.some((selecionado) => selecionado.id === atleta.id)
      );
    }
  }
  

  toggleAtleta(atleta: AtletaTreinoDTO) {
    if (this.isAtletaSelecionado(atleta)) {
      this.atletasSelecionados = this.atletasSelecionados.filter((a) => a.id !== atleta.id);
    } else {
      this.atletasSelecionados.push(atleta);
    }
  }

  isAtletaSelecionado(atleta: AtletaTreinoDTO): boolean {
    return this.atletasSelecionados.some((a) => a.id === atleta.id);
  }

  onSubmit() {
    if (this.treinoForm.valid) {
      const formData = this.treinoForm.value;

      const treinoData = {
        ...formData,
        listarAtletas: formData.criarTreinoTodosAtletas ? [] : this.atletasSelecionados,
      };

      console.log(treinoData);
      
      this.treinoService.update(treinoData, this.treinoId).subscribe({
        next: () => alert('Treino atualizado com sucesso!'),
        error: (err) => {
          const errorMessage = this.errorHandlingService.handleError(err);
          this.toastService.ativarToast(errorMessage);
      }});
    } else {
      this.toastService.ativarToast('Errro: Formulário inváido.')
      console.error('Formulário inválido.');
    }
  }

  cancel() {
    this.toastService.ativarToast('Edição cancelada.');
    console.log('Edição cancelada.');
    this.fecharModal();
  }

  fecharModal() {
    this.modalController.dismiss();
  }
}
