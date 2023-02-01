import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  form: FormGroup;

constructor(){
  let controles:any = {
    nombre  : new FormControl('',[Validators.minLength(5), Validators.required]),
    fecha : new FormControl('', []),
    genero : new FormControl('',[]),
    telefono : new FormControl ('',[Validators.minLength(8), Validators.required]),
    email : new FormControl ('', [Validators.required, Validators.pattern("[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?")]),
    password : new FormControl ('', [Validators.minLength(4), Validators.required]),
    checkSubscribe : new FormControl ( false, []),
  }

  this.form = new FormGroup(controles)
 
}

login(){
  console.log(this.form);
  // if (this.form.controls['email'].errors?.['pattern']){
  //   console.log('Hubo un errror')
  // }
}
 
}
