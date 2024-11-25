import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AtletaTreinoDTO } from 'src/app/models/atleta-treino-dtomodel';
import { AtletaService } from 'src/app/services/atleta.service';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { ToastService } from 'src/app/services/toast.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-new-treino',
  templateUrl: './new-treino.page.html',
  styleUrls: ['./new-treino.page.scss'],
})
export class NewTreinoPage implements OnInit {
  treinoForm: FormGroup;
  atletas: AtletaTreinoDTO[] = [];
  atletasSelecionados: AtletaTreinoDTO[] = []; // Lista de atletas selecionados
  criarTreinoTodos: boolean = false;

  toastMessage: string = '';
  activateToast: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private treinoService: TreinoService,
    private atletaService: AtletaService,
    private modalController: ModalController, 
    private toastService: ToastService,
    private errorHandlingService: ErrorHandlingService
  ) {
    this.treinoForm = this.fb.group({
      local: ['', Validators.required],
      data: ['', Validators.required],
      horario: ['', Validators.required],
      criarTreinoTodosAtletas: [false],
    });
  }

  ngOnInit(): void {
    this.carregarAtletas();
  }

  carregarAtletas() {
    this.atletaService.findAllForTreinos().subscribe({
      next: (data) => (this.atletas = data),
      error: (err) => console.error('Erro ao carregar atletas:', err),
    });
  }

  toggleTreinoTodos() {
    this.criarTreinoTodos = !this.criarTreinoTodos;
    this.atletasSelecionados = this.criarTreinoTodos ? [...this.atletas] : [];
  }

  onSubmit() {
    if (this.treinoForm.valid) {
      const formData = this.treinoForm.value;
  
      if (!formData.criarTreinoTodosAtletas && this.atletasSelecionados.length === 0) {
        this.toastService.ativarToast('Erro: Nenhum atleta selecionado.');
        return;
      }
  
      const treinoData = {
        ...formData,
        listarAtletas: formData.criarTreinoTodosAtletas ? [] : this.atletasSelecionados,
      };
  
      console.log('Treino cadastrado:', treinoData);
      this.salvarTreino()
    } else {
      this.toastService.ativarToast('Erro: Formulário inválido.');
    }
  }
  
  cancel() {
    this.toastService.ativarToast('Cadastro cancelado.');
    console.log('Cadastro cancelado.');
    this.fecharModal();
  }

  fecharModal() {
    this.modalController.dismiss();
  }

  isAtletaSelecionado(atleta: AtletaTreinoDTO): boolean {
    return this.atletasSelecionados.some((a) => a.id === atleta.id);
  }

  toggleAtleta(atleta: AtletaTreinoDTO) {
    if (this.isAtletaSelecionado(atleta)) {
      this.atletasSelecionados = this.atletasSelecionados.filter((a) => a.id !== atleta.id);
    } else {
      this.atletasSelecionados.push(atleta);
    }
  }

  salvarTreino() {
    const treinoDTO = {
      ...this.treinoForm.value,
      criarTreinoTodosAtletas: this.criarTreinoTodos,
      listarAtletas: this.atletasSelecionados,
    };
    this.treinoService.create(treinoDTO).subscribe({
      next: () => this.toastService.ativarToast('Treino criado com sucesso!'),
      error: (err) => {
        const errorMessage = this.errorHandlingService.handleError(err);
        this.toastService.ativarToast(errorMessage);
    }}
  );
  }
}
