class Stock {
    /*Não tem difernaças entre tipos numericos
    no typescript, tudo é number*/
    id: number;
    name: string;
    price: number;
    minimum: number;
    exclusiveMinimum: boolean;
    date: string;
    variation: number;
    /*array de string*/
    list: string[];

    constructor() {
        this.id = 0;
        this.name = "";
        this.price = 0;
        this.minimum = 0;
        this.exclusiveMinimum = false;
        this.date = "02/06/2021";
        this.variation = 0;
        this.list = [];
    }

}

export default Stock;