import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public movies: Movie[] = [];
  public peliculaBuscada: string

  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.peliculaBuscada = params.texto;
      this.peliculasService.buscarPeliculas(params.texto).subscribe(movies => {
        this.movies = movies;
      })
    });

  }

}
