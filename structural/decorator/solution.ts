namespace DecoratorSolution{
    interface IProduct {
        getProduct(): any;
    }

    class Product implements IProduct{
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

    abstract class ProductDecorator implements IProduct{
        protected product: Product;

        constructor(product: Product){
            this.product = product
        }

        abstract getProduct(): any;
    }

    class ProductImportDecorator extends ProductDecorator{
        getProduct(){
            return {
                name: this.product.name,
                price: this.product.price + 500,
                tax: '5%'
            }
        }
    }

    class ProductExportDecorator extends ProductDecorator{
        getProduct(){
            return {
                name: this.product.name,
                price: this.product.price + 1000,
                tax: '10%'
            }
        }
    }

    const productA = new Product('Lenovo', 10000)
    console.log(productA.getProduct());
    const productAFromImport = new ProductImportDecorator(productA);
    console.log(productAFromImport.getProduct());

    const productB = new Product('Samsung', 15000)
    console.log(productB.getProduct());
    const productBFromExport = new ProductExportDecorator(productB);
    console.log(productBFromExport.getProduct());
}