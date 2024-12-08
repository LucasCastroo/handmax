import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { refresh } from 'ionicons/icons';
import { AtletaService } from 'src/app/services/atleta.service';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-pre-cadastro-frequencia',
  templateUrl: './pre-cadastro-frequencia.page.html',
  styleUrls: ['./pre-cadastro-frequencia.page.scss'],
})
export class PreCadastroFrequenciaPage implements OnInit {
  @Input() treinoId!: number; // Recebido via Modal
  atletaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private athleteService: AtletaService,
    private modalController: ModalController,
    private errorHandlingService: ErrorHandlingService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    // Inicializando o formulário com a estrutura necessária
    this.atletaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      dataNascimento: ['', [Validators.required]],
      telefone: [''],
      enviarCadastroTelefone: [false]
    });
  }

  cadastrarAtleta(): void {
    console.log(this.atletaForm.value);
    if (this.atletaForm.valid) {
      this.athleteService.createInitialWithTreino(this.atletaForm.value, this.treinoId).subscribe({
        next: () => {
          this.toastService.ativarToast('Atleta cadastrado com sucesso!');
          this.fecharModal();
        },
        error: (err) => {
          const errorMessage = this.errorHandlingService.handleError(err);
          this.toastService.ativarToast(errorMessage);
        }
      });
    } else {
      this.toastService.ativarToast('Preencha todos os campos obrigatórios corretamente!');
    }
  }

  fecharModal(): void {
    this.modalController.dismiss({refresh: true});
  }
}
