// Soal-01
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
  //-fun1 akan menampilkan object seperti :
      // fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
  //-fun2 tidak menampilkan object hanya kosong seperti :
      // fun2 {}

// 2. Apakah hasil dari fun1 dan fun2 itu sama?
      // hasil dari fun1 dan fun2 tidak sama pada fun1 menampilkan object ,sedangkan pada fun2 tidak menampilkan apa-apa hanya kurung kurawal.
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
      // karena this pada arrow melakukan function untuk mengambil dari konteks yang dibuat, dalam poin kedua tidak sehingga fun2 menampilkan kosong
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();

//   Soal - 02
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
/*Encapsulation adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek.
  digunakan untuk melindungi data sensitif, seperti informasi pribadi, dengan mencegah data diubah,
  kecuali dalam lingkup kelas itu sendiri.*/

// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
/*Abstraction adaalah suatu teknik untuk menyembunyikan detail tertentu dari sebuah objek atau metode
  dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
  melindungi data sensitif, seperti informasi pribadi, dengan mencegah metode dipanggil,
  kecuali dalam lingkup kelas itu sendiri.*/
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
/*Inheritance adalah alat sederhana namun kuat dari bahasa berorientasi objek yang memungkinkan kelas untuk
  mewarisi metode dan bidang dari kelas lain. Digunakan untuk menerima atau memperoleh sesuatu dari pendahulu
  atau Induk .semakin banyak kode yang dapat Anda gunakan kembali, semakin sedikit bug yang Anda temui dan semakin sedikit waktu Anda
  menghabiskan menulis ulang kode yang sudah keluar.*/
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
/*Polimorfisme adalah ketika variabel atau referensi dapat merujuk ke berbagai jenis objek
  Polimorfisme  diistilah sebagai "bentuk banyak".
  polimorfisme digunakan untuk merujuk ke berbagai jenis objek,
  artinya mereka dapat memiliki banyak bentuk.
  kode yang lebih sederhana.*/


//soal 03
class Phone {
  constructor(brand, storage, ram){
      this.brand = brand;
      this.storage = storage;
      this.ram = ram;
  }
  getBrandName(){
      return this.brand;
  }
  setBrandName(newName){
      this.brand = newName;
  }
  printSpecification(){
      console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
  }
  setSpecification(storage,ram){
      this.storage = storage;
      this.ram = ram;
  }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

//soal 04
class Student {
  constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courseOfferings = [];
  }

  getCourseIndex(course) {
      let index = -1;
      for(let i = 0; i < this.courseOfferings.length;i++){
          if (this.courseOfferings[i].course.getSubject() === course.getSubject()){
              index = i;
              break;
          }
      }
      return index;
  }

  takeNewCourse(course) {
      this.courseOfferings.push(new CourseOffering(course));
      course.decreaseQuota();
  }

  takeATest(course){
      const index = this.getCourseIndex(course);
      if (this.courseOfferings[index].attendance >= course.getAttendance()) {
          this.courseOfferings[index].grade = Math.floor(Math.random() * 100);
      } else {
          console.log("please fill your absent");
      }
  }

  courseAttendance(course) {
      // course.attendance++;
      const index = this.getCourseIndex(course);
      this.courseOfferings[index].attendance++;
  }
}

class CourseOffering {
  constructor(course) {
      this.course = course;
      this.attendance = 0;
      this.grade = 0;
  }
}

class Course {
  constructor(subject, quota, attendance) {
      this.subject = subject;
      this.quota = quota;
      this.attendance = attendance;
  }
  getSubject() {
      return this.subject;
  }
  getAttendance() {
      return this.attendance;
  }
  decreaseQuota() {
      this.quota--;
  }
}


const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);