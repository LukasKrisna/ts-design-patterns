class Me {
    private firstName: string = '';
    private lastName: string = '';

    getFullName(): string {
        //akses database, SELECT FROM....
        this.firstName = "Lukas";
        this.lastName = "Krisna";

        return `${this.firstName} ${this.lastName}`;
    }

}

const fullName = new Me();
console.log(fullName.getFullName());
const fullName2 = new Me();
console.log(fullName2.getFullName());
console.log(fullName === fullName2); // false