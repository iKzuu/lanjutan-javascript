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
const methodMahasiswa = {
    makan: function (porsi){
        this.energy += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    },

    main: function (jam) {
        if (this.energy >= jam) {
            this.energy -= jam;
            console.log(`${this.nama}, Kamu telah bermain selama ${jam} jam! energy kamu tersisa ${this.energy}`);
        } else if (this.energy <= jam) {
            console.log(`${this.nama}, Kamu tidak memiliki energi yang cukup untuk bermain! perlu makan untuk menambah energy!`);
        }
    },

    tidur: function (jam) {
        this.energy += jam * 2;
        console.log(`Halo ${this.nama}, anda tidur selama ${jam} jam`);
    }
}

function iniMahasiswa(nama, energy){
    let mahasiswa = Object.create(methodMahasiswa);
    // dengan menggunakan Object.create kita bisa ngasih tau parent Objectnya
    // object mana yang terhubung dengan object iniMahasiswa
    // jadi tidak perlu mendaftarkan method method yang dibuat

    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

     // tidak perlu mendaftarkan method seperti ini lagi jika menggunakan Object.create()

    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;

    return mahasiswa; // memakai function declaration harus return objectnya
}
let rizki = iniMahasiswa('Rizki', 10);
let juldan = iniMahasiswa('Juldan', 10);

// Object Constructor Function

// function iniMahasiswa(nama, energy){
//     // let mahasiswa = {};
//     // memakai object menggunakan constructor function tidak memakai deklarasi variable lagi

//     this.nama = nama,

//     // dari yang sebelumnya memakai mahasiswa.properti = argument sekarang mahasiswanya
//     // di ganti dengan this.properti = argument karena menggunakan constructor tidak menggunakan deklarasi variable
    
//     this.energy = energy,

//     this.makan = function (porsi){
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }

//     this.main = function (jam) {
//         if (this.energy >= jam) {
//             this.energy -= jam;
//             console.log(`${this.nama}, Kamu telah bermain selama ${jam} jam! energy kamu tersisa ${this.energy}`);
//         } else if (this.energy <= jam) {
//             console.log(`${this.nama}, Kamu tidak memiliki energi yang cukup untuk bermain! perlu makan untuk menambah energy!`);
//         }
//     }

//     // return mahasiswa;
//     // memakai object menggunakan constructor function tidak memakai return
// }

// // untuk pemanggilan object constructor wajib pakai "new" setelah "="
// // jika tidak, javascript akan menganggap kita menggunakan function declaration
// let anang = new iniMahasiswa('Anang', 100);
// // let juldan = new iniMahasiswa('Juldan', 100);