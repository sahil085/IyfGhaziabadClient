import { Component, OnInit } from '@angular/core';
import {UdgaarService} from '../../services/udgaar.service';

@Component({
  selector: 'app-udgaar-home-page',
  templateUrl: './udgaar-home-page.component.html',
  styleUrls: ['./udgaar-home-page.component.css']
})
export class UdgaarHomePageComponent implements OnInit {
  public isInterested:boolean=true;

  constructor(public udgaarService: UdgaarService) { }

  ngOnInit() {
  }

  public interestButtonDisable(){
    this.isInterested = false;
  }

  public pay(status)
  {
    this.udgaarService.registerUser(status).subscribe(res => {
      console.log(res);
    });
  }

}
