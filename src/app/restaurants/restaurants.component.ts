import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from './restaurants.service'
import { Restaurant } from './restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Array<Restaurant> = [];

  constructor(private restaurantsSrv: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsSrv
      .restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
