import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {
  @Input() weatherdet;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToNext5Days() {
    this.router.navigate(['/test'], {
      queryParams: { props: this.weatherdet.name }
    });
  }
}
