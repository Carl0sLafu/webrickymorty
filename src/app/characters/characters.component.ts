import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit{

  personajes: any = null;
  page: number = 0;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.queryParams.subscribe(
      params => {

          if (params['page'] == null || parseInt(params['page']) < 1 || parseInt(params['page']) > 42) {

            this.page = 1;

          } else {

            this.page = +params['page'];

          }

        }      
      
      );

    this.http.get("https://rickandmortyapi.com/api/character/?page=" + this.page).subscribe(

      result => {

        this.personajes = result;

      }

    );

  }

}
