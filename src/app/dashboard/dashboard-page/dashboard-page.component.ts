import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  /*OnChanges ele é chamado quando é alterado alguma coisa*/
  /*OnDestroy , quando sai da tela é executado esse método*/


  //stocks: Array<stock> = new ArrayList<stock>(); (Pesquisar)
  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService) { }
  
  /*É chamado na inicialização do projeto esse método*/
  ngOnInit(): void {
    this.fetchStocks();
  }

  async fetchStocks(): Promise<void> {
    this.stocks = await this.dashboardService.getStocks();
    /*Vai ser exibido no console*/
    console.log(this.stocks);
  }

}
