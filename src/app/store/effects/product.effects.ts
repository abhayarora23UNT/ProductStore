import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ProductActionTypes, setProduct, setProductError } from '../actions/product.actions';
import { ProductService } from '../../services/product.service';
import { ProductListResponse } from '../../models/product';

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions, private productService: ProductService) {

    }
    loadProductsData$ = createEffect(
        (): Observable<any> =>
            this.actions$.pipe(
                ofType(ProductActionTypes.loadProducts),
                mergeMap(() => {
                    return this.productService.getProductListFromService().pipe(
                        map((data: ProductListResponse) => setProduct({ payload: data.data })),
                        catchError(error => of(setProductError({ payload: error })))
                    )
                }
                )
            )
    );


}