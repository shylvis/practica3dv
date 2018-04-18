import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  private chartData: Array<any>;


constructor(private _ApiService: ApiServiceService) { }


 ngOnInit() {

	//this.generateData();
	//setInterval(() => this.generateData(), 3000);
  this._ApiService.getData().subscribe(result => { this.chartData = result })
 }

generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }
 }