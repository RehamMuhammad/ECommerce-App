import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {ConfirmedValidator } from '../confirmed.validator'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm !: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("",[ Validators.required , Validators.email] ),
      userName: new FormControl("",[ Validators.required , Validators.pattern('^[-a-zA-Z0-9-()]+(\S+[-a-zA-Z0-9-()]+)*$')] ),
      password : new FormControl("",[ Validators.required , Validators.minLength(8),
                                      Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')] ),
      confirmPassword : new FormControl("",Validators.required  )
  })
}

get registerFormControls () {
  return this.registerForm.controls;
}


  submitReactiveForm(){
    console.log(this.registerForm)
  }
}
