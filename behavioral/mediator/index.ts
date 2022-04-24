namespace Mediator{
    interface IProduct {
        name: string;
        sell(): void;
    }
    
    interface IMediator {
        registerProduct(product: IProduct): void;
        setAvailableStatus(status: Boolean): void;
        isAvailable(): Boolean;
    }
    
    class Product implements IProduct {
        name: string;
        mediator: IMediator;
    
        constructor(name: string, mediator: IMediator) {
            this.name = name;
            this.mediator = mediator;
        }

        sell():void{
            if (this.mediator.isAvailable()) {
                this.mediator.setAvailableStatus(false);
                console.log(`produk ${this.name} berhasil dijual`)
            }else {
                console.log('produk ini belum dijual, harus didaftarkan terlebih dahulu');
            }
        }
    
    }
    
    class ProductMediator implements IMediator {
        product?: Product;
        status: Boolean = false;

        registeredProduct(): void {
            if (this.status) {
                console.log(this.product);
            }else {
                console.log('tidak ada produk yang dijual');
            }
        }

        registerProduct(product: Product): void {
            if (this.status) {
                console.log('tidak bisa mendaftarkan produk, karena masih ada produk yang belum terjual');
            }else {
                this.product = product;
                this.status = true;
                console.log('produk berhasil didaftarkan');
            }
        }

        setAvailableStatus(status: Boolean): void{
            this.status = status;
        }

        isAvailable(): Boolean{
            return this.status;
        }
    }

    const mediator = new ProductMediator();

    const product1 = new Product('sabun', mediator);
    const product2 = new Product('odol', mediator); // gagal karena sudah ada produk

    mediator.registerProduct(product1);
    mediator.registerProduct(product2);

    product1.sell();
    product2.sell(); // gagal karena produk belum teregistrasi

    mediator.registeredProduct(); // gagal karena produk belum teregistrasi

    mediator.registerProduct(product2);
    mediator.registeredProduct();
    product2.sell();
    mediator.registeredProduct(); // gagal karena produk sudah terjual
}