import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {
  ngOnInit() {
   
  }
   private nome : string;
   private idade : string;
   private email : string;
   private telefone : string;

  private pessoa : object;

  constructor(){
    this.nome = 'Bruno';
    this.idade = '25';
    this.email = 'bruno@email.com'
    this.telefone = '6666-6666'
   
    this.pessoa =
    {
      nome: 'Jao',
      idade: '45',
      email: 'jao@email.com',
      telefone: '9999-9999'
    };
  }


}
