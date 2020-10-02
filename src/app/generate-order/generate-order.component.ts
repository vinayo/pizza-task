import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as detailsData from '../../details.json';

@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
  styleUrls: ['./generate-order.component.css'],
})
export class GenerateOrderComponent implements OnInit {
  pizza: any;
  showModal: Boolean = false;

  selectedOrder: any;
  userDtails: JSON = (detailsData as any).default;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pizza = [
      {
        name: 'margareta1', subName: 'A classic delight with 100% Real mozzarella cheese',
        cost: '199'
      },
      {
        name: 'margareta2', subName: 'A classic delight with 100% Real mozzarella cheese large',
        cost: '299'
      },
      {
        name: 'margareta3', subName: 'A classic delight with 100% Real mozzarella cheese extra large',
        cost: '399'
      }

    ];
  }
  hide() {
    this.showModal = false;
  }

  changeStatus(object: any) {
    if (object.orderStatus === 'Order Received') {
      object.orderStatus = 'Preparing';
      object.info = 'Your tasty Pizza is being prepared';
    } else if (object.orderStatus === 'Preparing') {
      object.orderStatus = 'Ready to serve';
      object.info = 'We are ready to serve';
    }
  }

  showDetails(data: any) {
    this.showModal = true;
    this.selectedOrder = data;
  }
}
