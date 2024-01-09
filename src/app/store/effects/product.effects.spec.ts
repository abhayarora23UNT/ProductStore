import { ReplaySubject, of } from "rxjs"
import { ProductEffects } from "./product.effects"
import { ProductService } from "../../services/product.service"
import { TestBed, waitForAsync } from "@angular/core/testing"
import { provideMockActions } from '@ngrx/effects/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { loadProducts as loadProducts } from "../actions/product.actions"
import { NO_ERRORS_SCHEMA } from "@angular/core"
import { mockProductList, mockProductResponse } from "../../../jestGlobalMocks"

describe("ProductService", () => {
    let effect: ProductEffects;
    let actions$: ReplaySubject<any>;
    let service: ProductService;

    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({
            providers: [
                ProductEffects,
                provideMockStore({
                    initialState: {
                        productList: []
                    }
                }),
                provideMockActions(() => actions$),
                {
                    provide: ProductService,
                    useValue: {
                        getProductListFromService: jest.fn().mockReturnValue(of(mockProductResponse)),
                    },
                },

            ],
            schemas: [NO_ERRORS_SCHEMA]
        })

        effect = TestBed.inject(ProductEffects)
        service = TestBed.inject(ProductService)
        actions$ = new ReplaySubject(1)
    }))

    it('should be created', () => {
        expect(effect).toBeTruthy()
    })

    it('should handle load mapping action', (done) => {
        actions$ = new ReplaySubject(1)
        actions$.next(loadProducts())
        let payload;

        effect.loadProductsData$.subscribe((result) => {
            payload=(result as any).payload
            done()
        });
        expect(service.getProductListFromService).toHaveBeenCalled()
        expect(payload).toEqual(mockProductList)
    })
})