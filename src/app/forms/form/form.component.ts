import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  myForm!:FormGroup

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    
    this.myForm = this.fb.group({
      fname: ['',Validators.required],
      lname: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phn: ['',Validators.required],
      phnA: this.fb.array([]),
      password: ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')]],
      cpassword: ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')]],
      address: ['',Validators.required],
      addressA: this.fb.array([])
    })
  }

  showPassword: boolean = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  showPasswordC: boolean = false;
  togglePasswordC() {
    this.showPasswordC= !this.showPasswordC;
  }

  get addressA(){
     return this.myForm.get('addressA') as FormArray;
  }

  get phnA(){
  return this.myForm.get('phnA') as FormArray;
  }

  addaddress(){
    this.addressA.push(this.fb.control(''));
  }

  addPhone(){
    this.phnA.push(this.fb.control(''));
  }

  deleteAddress(i:any){
  this.addressA.removeAt(i);
  }

  deletePhone(i:any){
  this.phnA.removeAt(i);
  }

  formSub(){
console.log(this.myForm.value);

  }
}
