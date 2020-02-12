import { Component, ViewChild} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './imageOverlay.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  @ViewChild ('f', {static: false}) searchForm:NgForm;

  coctails:any = [];
  isOneCoctail:boolean = false;

  onFetchCoctails(searchText:any) {
    this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        { params:new HttpParams().set('s', searchText) }
      )
      .subscribe(
        responseData => {
          this.searchForm.reset();
          this.isOneCoctail = false;
          this.coctails = responseData.drinks;
        }
      );
  }

  onFetchRandomCoctail() {
    this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
      )
      .subscribe(
        responseData => {
          this.isOneCoctail = true;
          this.coctails = responseData.drinks;
        }
      );
  }

  onFetchOneCoctail(idDrink:any) {
    this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
        { params:new HttpParams().set('i', idDrink) }
      )
      .subscribe(
        responseData => {
          this.isOneCoctail = true;
          this.coctails = responseData.drinks;
        }
      );
  }

}
