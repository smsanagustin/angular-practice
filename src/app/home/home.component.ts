import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterHousingList(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredHousingList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  imports: [CommonModule, HousingLocationComponent],
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList!: HousingLocation[];
  filteredHousingList: HousingLocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredHousingList = housingLocationList;
      });
  }

  filterHousingList(text: string) {
    if (!text) this.filteredHousingList = this.housingLocationList;

    this.filteredHousingList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
