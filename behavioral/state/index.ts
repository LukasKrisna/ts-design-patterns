namespace State {
    interface IProduct {
        name: string;
        saveAsFeaturedProduct(): void;
    }

    class FeaturedProduct {
        private state: IProduct;

        constructor(state: IProduct) {
            this.state = state;
        }

        setFeaturedProduct(state: IProduct): void{
            this.state = state;
        }

        getFeaturedProduct(): void{
            console.log(this.state);
        }

        publish(): void{
            this.state.saveAsFeaturedProduct();
        }
    }

    class MusicProduct implements IProduct{
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        saveAsFeaturedProduct(): void {
            console.log(`set produk ${this.name} sebagai produk unggulan`);
        }
    }

    const album = new MusicProduct('album The Dark Side of the Moon (1973)');
    const album2 = new MusicProduct('album Wish You Were Here (1975)');

    const featuredProduct = new FeaturedProduct(album);
    featuredProduct.publish();
    featuredProduct.getFeaturedProduct();

    featuredProduct.setFeaturedProduct(album2);
    featuredProduct.publish();
    featuredProduct.getFeaturedProduct();
}