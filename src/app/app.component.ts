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
  isRandom:boolean = false;
  ingredient = "coctails[0].strIngredient";

  onFetchCoctail(searchText:any) {
    this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        { params:new HttpParams().set('s', searchText) }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
          this.searchForm.reset();
          this.isRandom = false;
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
          console.log(responseData);
          this.isRandom = true;
          this.coctails = responseData.drinks;
        }
      );
  }

}
