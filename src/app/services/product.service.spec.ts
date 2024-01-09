import { of } from "rxjs"
import { ProductService } from "./product.service"
import { TestBed } from "@angular/core/testing"
import { HttpClient } from "@angular/common/http"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { mockProductList } from "../../jestGlobalMocks"


describe('Prdouct Service', () => {
    let service: ProductService
    
    const mockHttp = {
        get: jest.fn().mockImplementation(() => {
            return of(mockProductList)
        })
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProductService,
                { provide: HttpClient, useValue: mockHttp }
            ],
            imports: [HttpClientTestingModule],
        })

        service = TestBed.inject(ProductService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    it('should fetch Product List', async() => {
        const listObservable = service.getProductListFromService()
        let productList;
        listObservable.subscribe(result => {
            productList = result;
            expect(productList).toEqual(mockProductList)
        })
    })
})