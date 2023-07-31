import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private url = "https://nandinhatn.github.io/portifolio_js/data/profile.json"

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url)
  }
}
