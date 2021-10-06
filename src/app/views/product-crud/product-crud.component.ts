import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService ) {
    
    this.headerService.header = {
      title: 'Produtos',
      icon: 'storefront',
      routerUrl : 'products',
    }
    
   }

  ngOnInit(): void {
  }
  
  navigateToProductCreate() :void {
    this.router.navigate(['/products/create'])
  }

}
