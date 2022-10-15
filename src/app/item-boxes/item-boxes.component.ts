import { Component, Input } from '@angular/core';
import { fadeInRightOnEnterAnimation } from 'angular-animations'
import { Item } from '../item.interface';

@Component({
  selector: 'app-item-boxes',
  templateUrl: './item-boxes.component.html',
  styleUrls: ['./item-boxes.component.scss'],
  animations: [
    fadeInRightOnEnterAnimation({ duration: 1000 })
  ]
})
export class ItemBoxesComponent {
  @Input() public color!: string;

  @Input() public item!: Item;

}
