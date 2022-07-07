import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderTitleService {
  constructor() {}

  getTitle(): string {
    return 'Welcome to Angular Seed';
  }
}
