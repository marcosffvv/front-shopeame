import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LlamadaService } from 'src/app/services/llamada.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit{
  
  isLoaded = false;
  idProduct:any;
  id!: number;
  productsForm!: FormGroup;
  newProduct: any = {
    name: '',
    price: '',
    description: '',
    stars: '',
    image: ''
  }
  constructor(
    private formBuilder: FormBuilder, 
    private llamadaService: LlamadaService,
    private route: ActivatedRoute,
    ){}

  initProductData(product: any){
    this.isLoaded = true;
    this.newProduct = product
    this.productsForm = this.formBuilder.group({
      name:[product.name, Validators.required],
      price:[product.price, Validators.required],
      description:[product.description, Validators.required],
      stars:[product.stars, Validators.required], 
      image:[product.image, Validators.required]
    })
    this.productsForm.valueChanges.subscribe(changes => {
      this.newProduct = changes
    })
  }

  getProduct(id: any) {
    this.llamadaService
    .getProduct(id)
    .subscribe((product: any) => {
      console.log(product)
      this.initProductData(product)
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => { 
      this.idProduct = params.get('id')
      if(this.idProduct){
        this.getProduct(params.get('id'))
      } else {
        this.initProductData({
        img: '',
        name:'',
        description:'',
        price:'',
        stars:''
        })
      }
    })
  }

  onSubmit(){
    console.log(this.newProduct);
    if (this.idProduct) {
      this.llamadaService
      .putProduct(this.idProduct, this.productsForm.value)
      .subscribe(() =>{});
    } else {
      this.llamadaService
      .postProduct(this.newProduct)
      .subscribe(() =>{});
      alert('producto creado correctamente')
      
    }
    this.productsForm.reset();
 
  }


}
