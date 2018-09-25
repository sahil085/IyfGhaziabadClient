import { Component, OnInit } from '@angular/core';
import {CompilerService} from '../../services/compiler.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css']
})
export class CompilerComponent implements OnInit {
  public codeForm: FormGroup;
  public output: String;
  public classes: String[] = ['HashMap' , 'HastSet', 'ArrayList'];
  constructor(public compiler: CompilerService,
              public  fb: FormBuilder) {
    this.codeForm = this.fb.group({
      code: ['', Validators.required]
    });
  }


  ngOnInit() {

  }

   public execute() {

      console.log(this.codeForm.value.code);

      this.compiler.executeCode(this.codeForm.value.code).subscribe(resp => {
        this.output = resp.statusText;

      });
    }




}
