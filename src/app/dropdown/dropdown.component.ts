import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, EMPTY } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { WeatherserviceService } from '../weatherdetails/weatherservice.service';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['toronto', 'India', 'Australia', 'Canada', 'France'];
  filteredOptions: Observable<string[]>;

  private baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix = '&units=metric&APPID=abe1eb51289c21c167c66ce790c2fac3';

  @Output() customerChange = new EventEmitter();
  weather: string;
  constructor(private weatherSrv: WeatherserviceService) {}
  ngOnInit() {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );

    this.myControl.valueChanges
      .pipe(switchMap(city => this.weatherSrv.getWeather(city)))
      .subscribe(
        res => {
          // this.weather =
          //   `City Name is ${res['name']},` +
          //   `Current temperature is  ${res['main'].temp}C, ` +
          //   `humidity: ${res['main'].humidity}%` +
          //   `SunRise Time : ${res['sys'].sunrise} ` +
          //   `SunSet Time : ${res['sys'].sunset} `;
          this.customerChange.emit(res);
        },
        err =>
          console.log(
            `Can't get weather. Error code: %s, URL: %s`,
            err.message,
            err.url
          )
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(
      option => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  // getWeather(city: string): Observable<any> {
  //   // this._filter(city);
  //   return this.http.get(this.baseWeatherURL + city + this.urlSuffix).pipe(
  //     catchError(err => {
  //       if (err.status === 404) {
  //         console.log(`City ${city} not found`);
  //         return EMPTY;
  //       }
  //     })
  //   );
  // }
}
