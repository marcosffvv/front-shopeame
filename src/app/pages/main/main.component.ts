import { Component, OnInit } from '@angular/core';
import { LlamadaService } from 'src/app/services/llamada.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  productsList: any[] = [];
  paintedProducts: any;

  constructor(private llamadaService: LlamadaService){}
  ngOnInit(): void {
      this.llamadaService.getProducts().subscribe((data: any) => {
        //console.log(data);
        this.productsList = data
        this.paintedProducts = data
      })
  }

  filtrar(nombre: string){
    let filteredProduct = this.productsList.filter((product) => product.name.includes(nombre))
    this.paintedProducts = filteredProduct;
  }
}
