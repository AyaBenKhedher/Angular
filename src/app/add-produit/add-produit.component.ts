import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();

  message :string | undefined;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
  }

  addProduit(){
    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message ="Produit  "+ this.newProduit.nomProduit + " ajoutés avec succés !";

    }
}
