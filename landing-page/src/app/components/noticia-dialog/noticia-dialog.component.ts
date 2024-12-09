import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-noticia-dialog',
  imports: [],
  templateUrl: './noticia-dialog.component.html',
  styleUrl: './noticia-dialog.component.css'
})
export class NoticiaDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
