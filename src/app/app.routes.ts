import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list.component';
import { ProductsFormComponent } from './components/products-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' }, 

    { 
        path: 'products',
        component: ProductsListComponent 
    },
    
    { 
        path: 'products/create', 
        component: ProductsFormComponent 
    },
    
    { 
        path: 'products/edit/:id', 
        component: ProductsFormComponent 
    },
    
    { 
        path: '**', 
        redirectTo: 'products' 
    }
];