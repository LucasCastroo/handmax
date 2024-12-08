import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AtletaService } from 'src/app/services/atleta.service';
import { CepService } from 'src/app/services/cep.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-atleta',
  templateUrl: './edit-atleta.page.html',
  styleUrls: ['./edit-atleta.page.scss'],
})
export class EditAtletaPage implements OnInit {
  atletaForm!: FormGroup;
  atletaId!: number;

  constructor(
    private fb: FormBuilder,
    private atletaService: AtletaService,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private cepService: CepService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadAtleta();
  }

  private initializeForm(): void {
    this.atletaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      telefone: [''],
      endereco: this.fb.group({
        CEP: [''],
        logradouro: [''],
        numeroLote: [''],
        complemento: [''],
        localidade: [''],
        UF: [''],
      }),
      dadosSociais: this.fb.group({
        rendaFamiliar: [''],
        pessoasEmCasa: [0, [Validators.min(0)]],
        condicoesMoradia: [''],
        cadastroNIS: [false],
      }),
    });
  }

  private loadAtleta(): void {
    if(this.route.snapshot.paramMap.get('id') !== null){  
      const id = this.route.snapshot.paramMap.get('id'); 
      this.atletaId = id !== null ? parseInt(id, 10) : 0;
    }
    
    if (this.atletaId) {
      this.atletaService.findById(this.atletaId).subscribe({
        next: (atleta) => this.atletaForm.patchValue(atleta),
        error: (err) => console.error('Erro ao carregar atleta:', err),
      });
    }
  }

  buscarCep(): void {
    const cep = this.atletaForm.get('endereco')?.get('CEP')?.value;
    console.log("CEP digitado: ", cep);

    if (cep) {
      this.cepService.findByStringCep(cep).subscribe({
        next: (data) => {
          if (!data.erro) {
            this.atletaForm.get('endereco')?.patchValue({
              logradouro: data.logradouro || '',
              localidade: data.localidade || '',
              UF: data.uf || '',
            });

            // Desativar os campos preenchidos automaticamente
            this.atletaForm.get('endereco')?.get('logradouro')?.disable();
            this.atletaForm.get('endereco')?.get('localidade')?.disable();
            this.atletaForm.get('endereco')?.get('UF')?.disable();
          } else {
            this.toastService.ativarToast('CEP não encontrado.');
          }
        },
        error: () => {
          this.toastService.ativarToast('Erro ao buscar o CEP. Verifique o valor e tente novamente.');
        },
      });
    }
  }

  salvarAtleta(): void {
    if (this.atletaForm.valid) {
      this.atletaService.update(this.atletaForm.value, this.atletaId,).subscribe({
        next: () => {
          alert('Atleta atualizado com sucesso!');
          this.fecharModal();
        },
        error: (err) => console.error('Erro ao atualizar atleta:', err),
      });
    } else {
      alert('Preencha todos os campos obrigatórios corretamente!');
    }
  }

  fecharModal(): void {
    this.modalController.dismiss();
  }
}
