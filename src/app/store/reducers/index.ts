
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store'
import * as fromProducts from './product.reducer'
import { localStorageSync } from 'ngrx-store-localstorage'

export interface State {
    products: fromProducts.State
}

export const reducers: ActionReducerMap<State> = {
    products: fromProducts.productReducer
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer]
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: [
            'products'
        ],
        rehydrate: true,
        removeOnUndefined: false,
        storage: sessionStorage
    })(reducer)
}

