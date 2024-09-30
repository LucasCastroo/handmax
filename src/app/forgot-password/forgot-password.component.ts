import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Método para verificar se o campo é inválido e já foi tocado
  isInvalid(controlName: string): boolean {
    const control = this.forgotPasswordForm.get(controlName)!;
    return control.invalid && control.touched;
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')!.value;
      //lógica para enviar o e-mail
      console.log("Email enviado para: ", email);
    } else {
      // Marca todos os campos como 'touched' para exibir os erros
      this.forgotPasswordForm.markAllAsTouched();
    }
  }
}
