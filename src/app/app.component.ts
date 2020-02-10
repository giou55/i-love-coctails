import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  coctail:any = {
    name:"",
    imgPath:""
  }; 

  onFetchCoctail1() {
    this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
      )
      .subscribe(
        responseData => {
          console.log(responseData);
          this.coctail.name = responseData.drinks[1].strDrink; 
          this.coctail.imgPath = responseData.drinks[1].strDrinkThumb;
        }
      );
  }

  onFetchCoctail2() {
    this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        }
      );
  }


}
