import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from 'src/app/shorten/shorten.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShortenPipe],
  exports: [ShortenPipe]
})
export class SharedModule { }
