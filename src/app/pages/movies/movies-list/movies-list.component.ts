import { Component, OnInit } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';
import { MoviesService } from 'src/app/shared/http-services/movies.service';
import { AlertService } from 'src/app/shared/services/alert-service.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent  implements OnInit{
  movieList: Array<any> = [];
  isActive: boolean =true;
  paginate = {
    pageIndex: 0,
    pageSize: 9,
    length: 10
   
  };
  currentPage:number = 1;
  constructor(
    private movieService: MoviesService,
    private alert : AlertService
  ){

  }

  ngOnInit(): void {
    this.getMovieList(this.paginate);
  }

  getMovieList(params: any){
    this.movieService.getMovieList(params.pageIndex + 1).subscribe(
      (data)=>{
        if(data){
          this.movieList = data.results;
          this.isActive = false; 
          this.paginate = {
            pageIndex: this.paginate.pageIndex ,
            pageSize: 10,
            length: data.count,
          };       
        }

      },
      (error)=>{
        this.paginate.pageIndex = params.previousPageIndex ;
        this.isActive = false;          
        this.alert.popToaster('error', 'Try Again', error?.error?.error?.message, {duration: 5000} )

      }
    )
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.getMovieList(event);
  }

}
