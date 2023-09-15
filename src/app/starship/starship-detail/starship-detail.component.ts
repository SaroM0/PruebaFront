import { Component, OnInit, Input } from '@angular/core';
import { Starship } from '../starship';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  @Input() starshipDetail!: Starship;


  constructor() { }

  ngOnInit() {
  }

}
