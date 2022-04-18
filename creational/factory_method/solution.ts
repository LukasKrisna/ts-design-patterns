namespace FactorySolution {
    interface ILogictic {
        qty: number;
        deliver(): void;
    }

    class Truck implements ILogictic {
        public qty: number;

        constructor(qty: number) {
            this.qty = qty
        }

        deliver(): void {
            console.log(`kirim ${this.qty} menggunakan truk`)
        }
    }

    class Ship implements ILogictic {
        public qty: number;

        constructor(qty: number) {
            this.qty = qty
        }

        deliver(): void {
            console.log(`kirim ${this.qty} menggunakan kapal`)
        }
    }

    type LogicticType = {
        type: string;
        qty: number;
    }

    interface IFactory {
        create(options: LogicticType): ILogictic;
    }

    class LogisticFactory implements IFactory {
        public create(options: LogicticType): ILogictic {
            if (options.type === 'deliver_by_land') {
                return new Truck(options.qty)
            } else if (options.type === 'deliver_by_sea') {
                return new Ship(options.qty)
            }

            throw new Error("class tidak ditemukan");
        }

    }

    const logistic = new LogisticFactory();

    const byLand = logistic.create({ type: 'deliver_by_land', qty: 100 });

    console.log(byLand.deliver());
}