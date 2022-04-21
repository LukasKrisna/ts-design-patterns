class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getProduct(){
        return {
            name: this.name,
            price: this.price,
        }
    }
}

const productA = new Product('Lenovo', 10000)
console.log(productA.getProduct());

//barang dengan pajak import
const productAFromImport = Object.assign(productA.getProduct(), {tax: '10%'});
productAFromImport.price += 1000;
console.log(productAFromImport);