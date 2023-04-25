import { LightningElement } from 'lwc';

export default class LWCActivityI extends LightningElement {

    empresa = "AloGaleradeCowboy";
    cnpj = "00.123.456/0055-03";
    endereco = "Rua do fim do mundo, virando a esquerda";
    produto = "Cowboy";
    descricao = "É um cowboy, não tem muito como explicar";
    preco = 0.25;
    oferta1 = 0.15;
    oferta2 = 0.10;
    

    visibleOne = true;
    visibleTwo = true;
    visibleThree = true;

    ocultar() {
        this.visibleTwo = !this.visibleTwo;
        this.visibleThree = !this.visibleThree;
    }
}
