import { ReplaySubject, of } from "rxjs"
import { ProductEffects } from "./product.effects"
import { ProductService } from "../../services/product.service"
import { TestBed } from "@angular/core/testing"
import { provideMockActions } from '@ngrx/effects/testing'
import { loadProducts as loadProducts } from "../actions/product.actions"



describe("ProductService", () => {
    let effects: ProductEffects
    let actions: ReplaySubject<any>
    let service: ProductService

    beforeEach(() => {

        const productList = [
            {
                "_score": 56.467888,
                "thumbnail": {
                    "alt_text": "A work made of color woodblock print; edition 73/200.",
                    "width": 2077,
                    "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAD45Mlk+Ml1AM1xXUWlnYX1qYHBwZ4JpW3qDg5mMgKeUhaqUg62Whq2Yha2upQAAACH5BAAAAAAALAAAAAADAAUAAAQL8JQUhhKEAbSMaxEAOw==",
                    "height": 3000
                },
                "api_model": "artworks",
                "is_boosted": false,
                "api_link": "https://api.artic.edu/api/v1/artworks/16251",
                "id": 16251,
                "title": "Steady Gaze (Two Cats)",
                "timestamp": "2023-12-21T10:01:05-06:00"
            },
            {
                "_score": 56.222202,
                "thumbnail": {
                    "alt_text": "A work made of gelatin silver print.",
                    "width": 4872,
                    "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAFBJPlFKPnpwX391ZYl9bJCEc5aKeZWKepmMepyQf6KVgqKVhNDArdPEsdXFsQAAACH5BAAAAAAALAAAAAADAAUAAAQLEClDRhEBpHWYaxEAOw==",
                    "height": 7407
                },
                "api_model": "artworks",
                "is_boosted": false,
                "api_link": "https://api.artic.edu/api/v1/artworks/216548",
                "id": 216548,
                "title": "Studio Cat",
                "timestamp": "2023-12-21T10:40:39-06:00"
            },
        ]

        TestBed.configureTestingModule({

            providers: [ProductEffects,
                provideMockActions(() => actions), {
                    provide: ProductService,
                    useValue: {
                        getProductList: jest.fn().mockReturnValue(of(productList)),
                    },
                }
            ]
        })

        effects = TestBed.inject(ProductEffects)
        service = TestBed.inject(ProductService)
    })

    it('should be created', () => {
        expect(effects).toBeTruthy()
    })

    it('should handle load mapping action', (done) => {
        const productList = [
            {
                "_score": 56.467888,
                "thumbnail": {
                    "alt_text": "A work made of color woodblock print; edition 73/200.",
                    "width": 2077,
                    "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAD45Mlk+Ml1AM1xXUWlnYX1qYHBwZ4JpW3qDg5mMgKeUhaqUg62Whq2Yha2upQAAACH5BAAAAAAALAAAAAADAAUAAAQL8JQUhhKEAbSMaxEAOw==",
                    "height": 3000
                },
                "api_model": "artworks",
                "is_boosted": false,
                "api_link": "https://api.artic.edu/api/v1/artworks/16251",
                "id": 16251,
                "title": "Steady Gaze (Two Cats)",
                "timestamp": "2023-12-21T10:01:05-06:00"
            },
            {
                "_score": 56.222202,
                "thumbnail": {
                    "alt_text": "A work made of gelatin silver print.",
                    "width": 4872,
                    "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAFBJPlFKPnpwX391ZYl9bJCEc5aKeZWKepmMepyQf6KVgqKVhNDArdPEsdXFsQAAACH5BAAAAAAALAAAAAADAAUAAAQLEClDRhEBpHWYaxEAOw==",
                    "height": 7407
                },
                "api_model": "artworks",
                "is_boosted": false,
                "api_link": "https://api.artic.edu/api/v1/artworks/216548",
                "id": 216548,
                "title": "Studio Cat",
                "timestamp": "2023-12-21T10:40:39-06:00"
            },
        ]

        actions = new ReplaySubject(1)
        actions.next(loadProducts())
        let payload

        effects.loadProductsData$.subscribe((result) => {
            console.log("effect spec ",result)
            payload = (result as any).payload
            done()
        })

        expect(service.getProductListFromService).toHaveBeenCalled()
        expect(payload).toEqual(productList)
        
    })
})