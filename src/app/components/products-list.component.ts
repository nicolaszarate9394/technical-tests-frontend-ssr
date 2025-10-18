import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  standalone: true,
  imports: [CommonModule, CardModule, TableModule, ButtonModule, InputTextModule]
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  cols: any[] = [];

  constructor(private productService: ProductsService, public router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
    this.cols = [
      { field: 'name', header: 'Nombre' },
      { field: 'description', header: 'Descripción' },
      { field: 'price', header: 'Precio' },
      { field: 'stock', header: 'Stock' }
    ];
  }

  loadProducts(): void {
    this.productService.getAll().subscribe(data => this.products = data);
  }

  deleteProduct(id: number): void {
    this.productService.delete(id).subscribe(() => this.loadProducts());
  }

  editProduct(id: number): void {
  this.router.navigate(['/products', id]);
  }

}