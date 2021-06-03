import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://dio-bootcamp.herokuapp.com/bootcamp';

  /*Injestão de dependencia, o httpClient foi importado no modulo dashboard*/
  constructor(private http: HttpClient) { }
    /*Declaração de um método assincrono. Retorno é um promise com um array de stocks.Depois de pegar os estoques converta para promise*/
    async getStocks(): Promise<Stock[]> {
      const url = 'https://dio-bootcamp.herokuapp.com/bootcamp/stock';
      return this.http.get<Stock[]>(url).toPromise();
      //return this.http.get<Stock[]>(this.baseUrl + '/stock').toPromise();
      /*usar uma string de interpolação, ESTÁ DANDO ERRO*/
      //return this.http.get<Stock[]>("'${this.baseUrl}'/stock").toPromise();
    }
  
}
