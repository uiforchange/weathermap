import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from '../weatherdetails/weatherservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-future-weather-details',
  templateUrl: './future-weather-details.component.html',
  styleUrls: ['./future-weather-details.component.css']
})
export class FutureWeatherDetailsComponent implements OnInit {
  response$;
  param1: any;
  constructor(
    private WeathSrv: WeatherserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.WeathSrv.predictWeather(params['props']).subscribe(res => {
        this.response$ = res;
      });
    });
  }
}
