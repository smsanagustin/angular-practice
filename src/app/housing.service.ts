import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  url = 'http://localhost:3000/locations';

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const locations = await fetch(this.url);
    return (await locations.json()) ?? [];
  }
  async getHousingLocationById(
    id: number,
  ): Promise<HousingLocation | undefined> {
    const location = await fetch(`${this.url}/${id}`);
    return (await location.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
