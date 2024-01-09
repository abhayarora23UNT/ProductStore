import { createReducer, on } from '@ngrx/store';
import { addProduct, removeProduct, clearProduct, setProduct, setProductError } from '../actions/product.actions';
import { Product } from '../../models/product';

export interface State {
    loaded: boolean,
    error: object | boolean,
    products: Array<Product>,
}

export const initialState: State = {
    loaded: false,
    error: false,
    products: []
}

export const productReducer = createReducer(
    initialState,
    on(setProduct, (state, { payload }) => ({
        ...state,
        products: payload,
        loaded: true,
        error: false
    }
    )
    ),

    // on(addProduct, (state, { payload }) => (
    //     {
    //         ...state,
    //         products: [...state.products, payload]
    //     }
    // )
    // ),

    // on(removeProduct, (state, { payload }) => ({
    //     ...state,
    //     products: state.products.filter((p: Product) => payload.id != p.id)
    // })),

    //on(clearProduct, state => initialState),

    on(setProductError, (state, { payload }) => (
        {
            ...state,
            loaded: false,
            error: payload
        }
    )),
);

export const getProductList = (state: State): Array<Product> => state.products

export const isProductsLoaded = (state: State): boolean => state.loaded