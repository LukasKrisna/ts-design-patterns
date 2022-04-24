namespace Observer {
    interface ISubject {
        attach(observer: IObserver): void;
        detach(observer: IObserver): void;
        notify(): void;
    }

    interface IObserver {
        name: string;
        update(subject: ISubject): void;
    }

    class PromoSubject implements ISubject {
        public isPromo: Boolean = false;
        private observers: IObserver[] = [];

        attach(observer: IObserver): void{
            const isExist: Boolean = this.observers.includes(observer);
            if (isExist) {
                return console.log(`produk ${observer.name} sudah ada`);
            }

            this.observers.push(observer);
            console.log(`produk ${observer.name} berhasil didaftarkan`);
        }

        detach(observer: IObserver): void {
            const observerIndex = this.observers.indexOf(observer);
            if (observerIndex === -1) {
                return console.log(`produk ${observer.name} tidak ditemukan`);
            }

            this.observers.splice(observerIndex, 1);
            console.log(`produk ${observer.name} berhasil dihapus`);
        }

        notify(): void{
            for (const observer of this.observers){
                observer.update(this);
            }
        }

        setPromo(status: Boolean): void{
            this.isPromo = status;
            this.notify();
        }
    }

    class Product implements IObserver {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        update(subject: ISubject): void {
            if (subject instanceof PromoSubject && subject.isPromo) {
                console.log(`produk ${this.name} telah ditayangkan ke toko online sebagai produk promo`)
            }
        }
    }

    const promo = new PromoSubject();

    const album1 = new Product('Album Frances The Mute (2005)');
    const album2 = new Product('Album Carrie & Lowell (2015)');
    const album3 = new Product('Album Teriakan Bocah (2015)');

    promo.attach(album1);
    promo.attach(album2);
    promo.attach(album3);

    promo.setPromo(true);

    console.log(promo);

    promo.detach(album3);
    console.log(promo);
}