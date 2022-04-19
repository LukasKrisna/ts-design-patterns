namespace BuilderSolution2 {
    class User {
        public name: string;
        public username: string;
        public email: string;
        public password: string;
        public age: string;

        getDetail() {
            return `${this.name} username = ${this.username}`;
        }

        constructor({ name = '', username = '', email = '', password = '', age = '' }) {
            this.name = name;
            this.username = username;
            this.email = email;
            this.password = password;
            this.age = age;
        }
    }

    const user1 = new User({
        name: 'Lukas',
        username: 'lukas',
        age: '18'
    });
    console.log(user1);
}