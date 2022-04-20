/*
name    |   brand
-----------------
mobil   |   Mercedes-Benz
besi    |   -
roda    |   -
*/

export interface IBaseData {
    getData(): {
        name: string,
        brand: string
    }
}

interface IProduct extends IBaseData {
    name: string;
    brand: string;
}

interface IMaterial {
    name: string;
    qty: number;
}

export class Product implements IProduct {
    name: string;
    brand: string;

    constructor(name: string, brand: string) {
        this.name = name;
        this.brand = brand;
    }

    getData() {
        return {
            name: this.name,
            brand: this.brand
        }
    }
}

export class Material implements IMaterial {
    name: string;
    qty: number;

    constructor(name: string, qty: number) {
        this.name = name;
        this.qty = qty;
    }

    getData() {
        return {
            name: this.name,
            qty: this.qty
        }
    }
}

let list: any[] = [];
const product = new Product('Mobil', 'Mercedes-Benz')
const material = new Material('Besi', 400)
const material2 = new Material('Roda', 4)
list.push(product.getData());
list.push(material.getData());
list.push(material2.getData());

console.log(list);