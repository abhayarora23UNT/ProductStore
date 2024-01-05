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
  data$: any
  isProductLoaded$:any
  constructor(private store: Store<fromRoot.State>) {
    console.log("dispatching action");
    this.store.dispatch(loadProducts())
  }

  ngOnInit() {
    this.isProductLoaded$=this.store.pipe(select(isProductsLoaded))

    this.isProductLoaded$.subscribe((data: any) => {
      console.log("data loaded is ", data)
    })

    this.data$ = this.store.pipe(select(selectProducts));
  
    this.data$.subscribe((data: any) => {
      console.log("list is ", data)
    })

  }
}
