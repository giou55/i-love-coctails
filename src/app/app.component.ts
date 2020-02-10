import { Component} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  coctail:any = {
    name:"",
    imgPath:"",
    instructions:""
  }; 

  onFetchCoctail(searchText:any) {
    this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        { params:new HttpParams().set('s', searchText) }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
          this.coctail.name = responseData.drinks[0].strDrink; 
          this.coctail.imgPath = responseData.drinks[0].strDrinkThumb;
          this.coctail.instructions = responseData.drinks[0].strInstructions;
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
          this.coctail.name = responseData.drinks[0].strDrink; 
          this.coctail.imgPath = responseData.drinks[0].strDrinkThumb;
          this.coctail.instructions = responseData.drinks[0].strInstructions;
        }
      );
  }

}
