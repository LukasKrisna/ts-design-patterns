import { IBaseData, Product, Material } from './index.ts';

enum AdapterType{
    PRODUCT,
    MATERIAL
}

class DataAdapter implements IBaseData{
    public name: string;
    public brand: string;
    public qty: number;
    public type: AdapterType;

    constructor({name= '', brand= '', qty= 0} = {}, type: AdapterType) {
        this.name = name;
        this.brand = brand;
        this.qty = qty;
        this.type = type;
    }

    getData(){
        if (this.type === AdapterType.PRODUCT) {
            const product = new Product(this.name, this.brand);
            return {
                name: product.name,
                brand: product.brand
            }
        }else if (this.type === AdapterType.MATERIAL) {
            const material = new Material(this.name, this.qty);
            return {
                name: material.name,
                brand: ''
            }
        }
        return{
            name: '',
            brand: ''
        }
    }
}

let listSolution2: any[] = [];
const productSolution2 = new DataAdapter({name: 'Mobil', brand: 'Mercedes-Benz'}, AdapterType.PRODUCT);
const materialSolution = new DataAdapter({name: 'Besi', qty: 400}, AdapterType.MATERIAL);
const materialSolution2 = new DataAdapter({name: 'Roda', qty: 4}, AdapterType.MATERIAL);
listSolution2.push(productSolution2.getData());
listSolution2.push(materialSolution.getData());
listSolution2.push(materialSolution2.getData());

console.log(listSolution2);