import { Injectable } from '@angular/core';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, EMPTY } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
  private baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private forecastWeatherURL =
    'https://api.openweathermap.org/data/2.5/forecast?q=';
  private urlSuffix = '&units=metric&APPID=abe1eb51289c21c167c66ce790c2fac3';

  constructor(private http: HttpClient) {}
  getWeather(city: string): Observable<any> {
    // this._filter(city);
    return this.http.get(this.baseWeatherURL + city + this.urlSuffix).pipe(
      catchError(err => {
        if (err.status === 404) {
          console.log(`City ${city} not found`);
          return EMPTY;
        }
      })
    );
  }
  predictWeather(city: string): Observable<any> {
    // this._filter(city);
    return this.http.get(this.forecastWeatherURL + city + this.urlSuffix).pipe(
      catchError(err => {
        if (err.status === 404) {
          console.log(`City ${city} not found`);
          return EMPTY;
        }
      })
    );
  }
}
