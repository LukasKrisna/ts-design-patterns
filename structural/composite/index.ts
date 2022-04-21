/*

Computer
    PC
        Case
        Motherboard
        Processor
    Laptop
        ASUS ROG
        Lenovo Thinkpad
    Peripheral
        HDD
            Seagate 1TB
            WD 1TB
        SSD
        Memory RAM
            DDR 4
            DDR 5
        Keyboard
            Mechanical
                Keychron
            Standard
                Logitech

*/

class Category {
    name: string;
    children: any[] = [];

    constructor(name: string) {
        this.name = name;
    }
}

const computer = new Category('Computer');

computer.children = [
    new Category('PC').children = [
        new Category('Case'),
        new Category('Motherboard'),
        new Category('Processor')
    ],
    new Category('Laptop').children = [
        new Category('ASUS ROG'),
        new Category('Lenovo Thinkpad')
    ],
    new Category('Peripheral').children = [
        new Category('HDD').children = [
            new Category('Seagate 1TB'),
            new Category('WD 1TB'),
        ]
    ]
]
console.log(computer.children);