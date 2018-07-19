import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    {
      provide:'Storage',
      useValue: window.localStorage
    }
  ]
})
export class SecurityModule { }
