namespace Strategy {
    interface INumericConverter {
        convertNumber(number: number): void;
    }

    class NumberConvertion {
        private strategy: INumericConverter;

        constructor(strategy: INumericConverter) {
            this.strategy = strategy
        }

        execute(num: number): void {
            this.strategy.convertNumber(num);
        }
    }
    
    class NumberToCurrency implements INumericConverter {
        convertNumber(num: number): void {
            console.log(num.toLocaleString('id-ID', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'IDR'
            }));
        }
    }

    class NumberToDecimalSeparator implements INumericConverter {
        convertNumber(num: number): void {
            console.log(num.toLocaleString('id-ID', {
                minimumFractionDigits: 2
            }));
        }
    }

    class NumberToDate implements INumericConverter {
        convertNumber(num: number): void {
            console.log(new Date(num * 1000).toUTCString());
        }
    }

    const mataUang = new NumberConvertion(new NumberToCurrency);
    mataUang.execute(1000000000);

    const desimal = new NumberConvertion(new NumberToDecimalSeparator);
    desimal.execute(1000000);

    const tanggal = new NumberConvertion(new NumberToDate);
    tanggal.execute(1066580000);
}