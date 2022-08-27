class User {
    constructor(name,surname){
       this.name = name;
       this.surname = surname;
       this.pets = []
       this.books = []
    }

    getFullName(){
        if(this.name != "" && this.surname != ""){
          return  `Hello, my name is ${this.name} ${this.surname} !!`;
        }
    }

    addPet(petName){
        if(petName != ""){
            this.pets.push(petName);
        }
    }

    countPet(){
        return this.pets.length
    }


    // Lu si ves esto, ¿hay alguina forma de prevenir el ingreso de " "? intente pero pero pushea undefinded igualmente :/
    addBook({title,author}){
            this.books.push({title,author})
    }

    getBookNames(){
        let titlesArr = this.books.map(function(book){
           return book.title
        }
        )
        return titlesArr
    }
}


//Instanciamos un nuevo objeto a partir de la clase
const admin = new User ('Luis', 'Diaz')

//Agregamos las mascotas al array mediante la función 
admin.addPet('Leia')
admin.addPet('Vaca')
admin.addPet('Chiwi')

//Agregamos libros en forma de objeto al array de libros
admin.addBook({title: 'Clean Code', author:'Robert C Martin'})
admin.addBook({title:'Eloquent Javascript', author:'Marijn Haverbeke'})
admin.addBook({title: 'The Pragmatic Programmer', author:'Andrew Hunt & David Thomas'})


//Ejecutamos y consologeamos cada función
console.log(admin)

let cantidadMascotas = admin.countPet()
console.log(cantidadMascotas)

let saludo = admin.getFullName();
console.log(saludo)

let bookNames = admin.getBookNames()
console.log(bookNames)
