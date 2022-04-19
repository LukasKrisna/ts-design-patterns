namespace PrototypePattern {
    class User {
        public name: string;
        public username: string;
        public email: string;
        public password: string;

        constructor(name: string, username: string, email: string, password: string) {
            this.name = name;
            this.username = username;
            this.email = email;
            this.password = password;
        }

        public clone(): this {
            const clone = Object.assign({}, this);
            return clone;
        }
    }

    const user1 = new User('Lukas', 'lukas', 'tes@mail.com', '123')
    const user2 = new User('Lukasb', 'lukas2', 'tes2@mail.com', '1234')

    const user3 = user1.clone();
    user3.name = 'wawan';
    user3.username = 'wawan';
    user3.email = 'tes3@mail.com';
    console.log(user3);
}