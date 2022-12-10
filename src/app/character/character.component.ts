import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class CharacterComponent implements OnInit {

  id: any = null;
  personaje: any = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(
      params => {

        this.id = params['id'];

        }      
      
      );

    if (this.id != null) {

      this.http.get("https://rickandmortyapi.com/api/character/" + this.id).subscribe(

        result => {

          this.personaje = result;

        }

      );

    } 

  }

}
