import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private _http: HttpClient) { }

    getProductListFromService(pageNum = 1, limit = 20): Observable<any> {
        console.log("inside getProductListFromService")
        return this._http.get(`https://api.artic.edu/api/v1/artworks/search?q=cats&page=${pageNum}&limit=${limit}`)
    }
}