// membuat object pada javascript

// Object Literal
let mahasiswa = {
    nama: "Rizki",
    energy: 10,
    makan: function (porsi){
        this.energy = this.energy + porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`)
    }
}

// Object Function Declaration
function iniMahasiswa(nama, energy){
    let mahasiswa = {};
    mahasiswa.nama = nama,
    mahasiswa.energy = energy,

    mahasiswa.makan = function (porsi){
        this.energy += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    }

    mahasiswa.main = function (jam) {
        if (this.energy >= jam) {
            this.energy -= jam;
            console.log(`${this.nama}, Kamu telah bermain selama ${jam} jam! energy kamu tersisa ${this.energy}`);
        } else if (this.energy <= jam) {
            console.log(`${this.nama}, Kamu tidak memiliki energi yang cukup untuk bermain! perlu makan untuk menambah energy!`);
        }
    }

    return mahasiswa; // memakai function declaration harus return objectnya
}

// let rizki = iniMahasiswa('Rizki', 10);
// let juldan = iniMahasiswa('Juldan', 10);

// Object Constructor Function
function iniMahasiswa(nama, energy){
    // let mahasiswa = {};
    // memakai object menggunakan constructor function tidak memakai deklarasi variable lagi

    this.nama = nama,

    // dari yang sebelumnya memakai mahasiswa.properti = argument sekarang mahasiswanya
    // di ganti dengan this.properti = argument karena menggunakan constructor tidak menggunakan deklarasi variable
    
    this.energy = energy,

    this.makan = function (porsi){
        this.energy += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    }

    this.main = function (jam) {
        if (this.energy >= jam) {
            this.energy -= jam;
            console.log(`${this.nama}, Kamu telah bermain selama ${jam} jam! energy kamu tersisa ${this.energy}`);
        } else if (this.energy <= jam) {
            console.log(`${this.nama}, Kamu tidak memiliki energi yang cukup untuk bermain! perlu makan untuk menambah energy!`);
        }
    }

    // return mahasiswa;
    // memakai object menggunakan constructor function tidak memakai return
}

// untuk pemanggilan object constructor wajib pakai "new" setelah "="
// jika tidak, javascript akan menganggap kita menggunakan function declaration
let anang = new iniMahasiswa('Anang', 100);