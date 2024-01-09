
import { mockProductList } from '../../../jestGlobalMocks';
import { setProduct, setProductError } from '../actions/product.actions';
import { getProductList, getProductsError, initialState, isProductsLoaded, productReducer } from './product.reducer'

describe('Product Reducer', () => {

    describe('Unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = productReducer(initialState, action)
            expect(result).toBe(initialState)
        })
    })

    describe('SetProductError', () => {
        it('should set product error', () => {
            const action = setProductError({ payload: { error: true } })
            const state = {
                loaded: false,
                error: {
                    message: 'Internal Server Error',
                    status: 500
                },
                products: []
            }

            const result = productReducer(state, action)
            const expectedState = { ...state, error: { error: true } }
            expect(result).toEqual(expectedState)
        })
    })

    describe('SetProducts', () => {
        it('should set product list', () => {
            const action = setProduct({ payload: mockProductList })
            const state = {
                loaded: false,
                error: null,
                products: []
            }

            const result = productReducer(state, action)
            const expectedState = {
                loaded: true,
                error: null,
                products: mockProductList
            }
            expect(result).toEqual(expectedState)
        })
    })

    describe('GetProductList', () => {
        it('should get product list', () => {
            const state = {
                loaded: false,
                error: null,
                products: mockProductList
            }
            const expectedState = mockProductList
            expect(getProductList(state)).toEqual(expectedState)
        })
    })

    describe('IsProductsLoaded', () => {
        it('should get isProductsLoaded', () => {
            const state = {
                loaded: true,
                error: null,
                products: mockProductList
            }
            const expectedState = true
            expect(isProductsLoaded(state)).toEqual(expectedState)
        })
    })

    describe('getProductsError', () => {
        it('should get product error', () => {
            const state = {
                loaded: false,
                error: {
                    message: 'Internal Server Error',
                    status: 500
                },
                products: []
            }
            const expectedState = {
                message: 'Internal Server Error',
                status: 500
            };

            expect(getProductsError(state)).toEqual(expectedState)
        })
    })
})