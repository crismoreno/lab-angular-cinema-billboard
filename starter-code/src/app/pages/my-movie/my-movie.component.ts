import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MoviesServiceService} from '../../services/movies-service.service';
@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movie;
  constructor(private movieService: MoviesServiceService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
    console.log(params.id);
    this.movie = this.movieService.getMovieById(params.id);
    });
  }
}
