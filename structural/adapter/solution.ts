import { IBaseData, Product, Material } from './index.ts';

class MaterialAdapter implements IBaseData {
    private adaptee: Material;

    constructor(adaptee: Material) {
        this.adaptee = adaptee;
    }

    getData() {
        return {
            name: this.adaptee.name,
            brand: ''
        }
    }

}

let listSolution: any[] = [];
const productSolution = new Product('Mobil', 'Mercedes-Benz')
const materialSolution = new MaterialAdapter(new Material('Besi', 400))
const materialSolution2 = new MaterialAdapter(new Material('Roda', 4))
listSolution.push(productSolution.getData());
listSolution.push(materialSolution.getData());
listSolution.push(materialSolution2.getData());

console.log(listSolution);