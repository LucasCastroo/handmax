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

  isInvalid(controlName: string): boolean {
    const control = this.forgotPasswordForm.get(controlName)!;
    return control.invalid && control.touched;
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')!.value;
      console.log("Email enviado para: ", email);
    } else {
      this.forgotPasswordForm.markAllAsTouched();
    }
  }
}
