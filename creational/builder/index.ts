class User {
    private name: string;
    private username: string;
    private email: string;
    private password: string;

    constructor(name: string, username: string, email: string, password: string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

// menambahkan dengan merubah ulang semua code, jika ada parameter yang berubah
// const user1 = new User('Lukas', 'lukas', '123')
// const user2 = new User('Lukas1', 'lukas1', '123')
// const user3 = new User('Lukas2', 'lukas2', '123')