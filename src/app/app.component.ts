import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './store/reducers/'
import { isProductsLoaded, selectProducts, selectProductsError } from './store/selectors/product.selector';
import { loadProducts } from './store/actions/product.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'product-list';
  productList$?: Observable<any>
  isProductLoaded$?: Observable<any>
  loadProductError$?: Observable<any>
  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(loadProducts())
  }

  ngOnInit() {
    this.isProductLoaded$ = this.store.pipe(select(isProductsLoaded))

    this.productList$ = this.store.pipe(select(selectProducts));
    this.loadProductError$ = this.store.pipe(select(selectProductsError));
  }
}
