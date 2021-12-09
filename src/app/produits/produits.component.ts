import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';



@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits! : Produit[]; 

  constructor(private produitService: ProduitService ) 
  {
  //this.produits = produitService.listeProduits();
  }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
      
  }
  supprimerProduit(prod: Produit){
    //console.log(prod);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
        this.produitService.supprimerProduit(prod);

  }
}
