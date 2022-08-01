import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service'
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  list:any;
  constructor(private api:ServiceService) { 
    // this.api.SubscriptionList().subscribe(status =>{
    //   console.warn(status)
    //   this.list.status;
    // })
  }

  ngOnInit(): void {
  }

}
