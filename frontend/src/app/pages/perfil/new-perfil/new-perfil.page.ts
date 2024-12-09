import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";
import {ErrorHandlingService} from "../../../services/error-handling.service";
import {ToastService} from "../../../services/toast.service";
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-new-perfil',
  templateUrl: './new-perfil.page.html',
  styleUrls: ['./new-perfil.page.scss'],
})
export class NewPerfilPage implements OnInit {

  usuarioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private modalController: ModalController,
    private errorHandlingService: ErrorHandlingService,
    private toastService: ToastService,) { }

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/)
        ]
      ]
    });
  }

  fecharModal(): void {
    this.modalController.dismiss();
  }

  cadastrarUsuario(): void {
    console.log(this.usuarioForm.value);
    if (this.usuarioForm.valid) {
      this.usuarioService.create(this.usuarioForm.value).subscribe({
        next: () => {
          this.toastService.ativarToast('Usuario cadastrado com sucesso!');
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
}
