namespace CompositeSolution{

    abstract class Category {

        children: Category[] = []
        parent: Category | null = null;
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        setParent(parent: Category | null){
            this.parent = parent;
        }

        getParent(): Category | null{
            return this.parent;
        }

        isComposite(): boolean{
            return false
        }

        abstract getName(): string;
    }

    class Product extends Category {

        getName(): string{
            return this.name
        }
    }

    class CategoryComposite extends Category{
        constructor(name: string) {
            super(name);
        }

        add(category: Category): void{
            this.children.push(category);
            category.setParent(category);
        }

        remove(category: Category): void{
            const categoryIndex = this.children.indexOf(category);
            this.children.splice(categoryIndex, 1);

            category.setParent(null);
        }

        isComposite(): boolean {
            return true;
        }

        getName(): string{
            return this.name;
        }
    }

    const category = new CategoryComposite('Category');

    const computer = new CategoryComposite('Computer');
    const music = new CategoryComposite('Music');

    const pc = new CategoryComposite('PC');
    const laptop = new CategoryComposite('Laptop');
    const processor = new CategoryComposite('Processor');
    const motherboard = new CategoryComposite('Motherboard');
    const peripheral = new CategoryComposite('Peripheral');
    const hdd = new CategoryComposite('Hdd');
    const thinkpad = new CategoryComposite('Lenovo Thinkpad');
    const vinyl = new CategoryComposite('Vinyl Slipknot');

    category.add(computer);
    
    computer.add(pc);
    computer.add(laptop);
    computer.add(peripheral);

    pc.add(processor);
    pc.add(motherboard);

    laptop.add(thinkpad);

    peripheral.add(hdd);

    category.add(music);
    music.add(vinyl)
    

    const printall = (composite: Category): void => {
        console.log('')
        console.log(composite.getName() + ' adalah kategori');

        composite.children.forEach(element => {
            if (element.isComposite() && element.children.length){
                printall(element);
            }else{
                console.log('')
                console.log(element.getName() + ' adalah produk');
            }

        })
    }

    printall(category);
}