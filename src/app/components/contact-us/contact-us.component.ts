import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  whatsappForm: FormGroup;
  waMessage = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      message: ['', Validators.required],
    });
    this.whatsappForm = this.fb.group({
      waMessage: this.waMessage
    });
  }
  sendMessage() {
    console.log(this.contactForm.value);
  }

  sendOverWhatsapp() {
    console.log(JSON.stringify(this.whatsappForm.value));
    this.waMessage = this.whatsappForm.value.waMessage;
    this.waMessage.replace(' ', '%20');
    window.location.href = 'https://wa.me/918920041231?text=' + this.waMessage;
  }

}
