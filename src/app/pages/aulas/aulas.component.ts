import { Component } from '@angular/core';
import { AulasService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent {

  aulasList: any;

  constructor(private aulasService: AulasService ) { }


  ngOnInit(): void {
    this.readAulas();
  }

  readAulas(): void {
    this.aulasService.getAulas()
    .subscribe(
      aulas => {
        this.aulasList = aulas;
        console.log(this.aulasList);
      },
      error => {
        console.log(error);
      }
    )
  }

}
