namespace BuilderSolution {
    class User {
        public name: string = '';
        public username: string = '';
        public email: string = '';
        public password: string = '';
        //menambah 1 parameter baru
        public age: string = '';

        getDetail() {
            return `${this.name} username = ${this.username}`;
        }
    }

    class UserBuilder {
        private user: User;

        constructor() {
            this.user = new User();
        }

        setName(value: string) {
            this.user.name = value;
            return this;
        }

        setUsername(value: string) {
            this.user.username = value;
            return this;
        }

        setEmail(value: string) {
            this.user.email = value;
            return this;
        }

        setPassword(value: string) {
            this.user.password = value;
            return this;
        }

        //menambah 1 parameter baru
        setAge(value: string) {
            this.user.age = value;
            return this;
        }

        build() {
            return this.user;
        }
    }

    const user1 = new UserBuilder()
        .setName('Lukas')
        .setUsername('lukas')
        .setEmail('example@mail.com')
        .setPassword('666')
        //menambah 1 parameter baru
        .setAge('18')
        .build();
    console.log(user1);
}