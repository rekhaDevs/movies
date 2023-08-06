import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/http-services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent  implements OnInit{
  movieList: Array<any> = [];
  constructor(
    private movieService: MoviesService
  ){

  }

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList(){
    this.movieService.getMovieList({}).subscribe(
      (data)=>{
        if(data){
          this.movieList = data.results;
          console.log("jhjhjh", this.movieList);
          
        }

      }
    )
  }

}
