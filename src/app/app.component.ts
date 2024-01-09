import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './store/reducers/'
import { isProductsLoaded, selectProducts } from './store/selectors/product.selector';
import { loadProducts } from './store/actions/product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit        {
  title = 'product-list';
  productList$: any
  isProductLoaded$:any
  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(loadProducts())
  }

  ngOnInit() {
    this.isProductLoaded$=this.store.pipe(select(isProductsLoaded))

    this.productList$ = this.store.pipe(select(selectProducts));
  
  }
}
