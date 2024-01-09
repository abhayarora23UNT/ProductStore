import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product';

export enum ProductActionTypes {
    addNewProduct = '[Product] Add New Product',
    removeProduct = '[Product] Remove Product',
    clearProducts = '[Product] Clear All Producs',
    loadProducts = '[Product] Load All Products',
    setProducts = '[Product] Set Products',
    setProductsError = '[Product] Load Products Error',
}

export const loadProducts = createAction(ProductActionTypes.loadProducts);

export const setProduct = createAction(ProductActionTypes.setProducts,
    props<{ payload: Array<Product> }>());

export const setProductError = createAction(ProductActionTypes.setProductsError,
    props<{ payload: object }>()
);

export const addProduct = createAction(ProductActionTypes.addNewProduct, props<{ payload: Product }>());
export const removeProduct = createAction(ProductActionTypes.removeProduct, props<{ payload: Product }>());
export const clearProduct = createAction(ProductActionTypes.clearProducts);
