import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
    .map((response: Response) => response.json());
  }

}