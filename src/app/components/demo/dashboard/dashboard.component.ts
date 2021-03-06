import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	
	title = 'widget';
	
	constructor() {
	}
	
	ngOnInit() {
	}
	
	// lineChart
	public lineChartData: Array<any> = [
		[65, 59, 80, 81, 56, 55, 40],
		[28, 48, 40, 19, 86, 27, 90]
	];
	
	public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	
	public lineChartType: string = 'bar';
	
	public pieChartType: string = 'pie';
	
	// Pie
	public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
	
	public pieChartData: number[] = [300, 500, 100];
	
	public randomizeType(): void {
		this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
		this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
	}
	
	public chartClicked(e: any): void {
		console.log(e);
	}
	
	public chartHovered(e: any): void {
		console.log(e);
	}
}
