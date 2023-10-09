import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from 'src/shared/models/wishItem';

@Injectable({ providedIn: 'root' })
export class WishService {
  constructor(private http: HttpClient) {}

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  getWishes = () => {
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: { format: 'json' },
    });
    return this.http.get('assets/wishes.json', options);
  };

  postWishes = (data: WishItem) => {
    let options = this.getStandardOptions();
    options = { ...options, Autho: 'value-' };

    return this.http.post('assets/wishes.json', data);
  };
}
