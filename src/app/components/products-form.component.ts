import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service'; 
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule],
  templateUrl: './products-form.component.html', 
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {
  productId: number | null = null;

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    price: new FormControl(0, Validators.required),
    stock: new FormControl(0, Validators.required)
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.productId) {
      this.productService.getById(this.productId).subscribe((product: Product) => {
        this.productForm.patchValue(product);
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    const product: Product = { ...this.productForm.value as Product, id: this.productId || 0 };
    if (this.productId) {
      this.productService.update(this.productId, product).subscribe(() => this.router.navigate(['/products']));
    } else {
      this.productService.create(product).subscribe(() => this.router.navigate(['/products']));
    }
  }
}