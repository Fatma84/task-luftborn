import { Component } from '@angular/core';
import { Item } from './item.interface';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public colors: string[] = [
    "#FF8B64",
    "#55C2E6",
    "#FF5E7D",
    "#FF8B64",
    "#55C2E6",
    "#4BCF82",
    "#7335D2",
    "#F1C75B",
    "#4BCF82",
    "#7335D2"
  ];

  public items?: Item[];

  public constructor(private readonly apiService: ApiService) {
    this.getItems();
  }

  private getItems(): void {
    this.apiService.getItems().subscribe(items => this.items = items)
  }
}
