// let person ={
//     name:'saxi',
//     surname:'saxili',
//     age:20
// }

// let person1= Object({
//     name:'name',
//     surname:'surname',
//     age:30
// })
// console.log(person1);
//  function Student(name,surname,age){
//     this.name=name;
//     this.surname=surname;
//     this.age=age;
//  }
//  let person2 =new Student('ali','aliyev',25)
//  console.log(person2);

//  class Person{
//     constructor(name,surname,age){
//         this.name=name;
//         this.surname=surname;
//         this.age=age;
//     }
//  } console.log(new Person('Manana','Caparaze',50));
//  let car={
//     name:'merceedes',
//     model:'c200',
//     get getInfo(){
//         return `${this.name} ${this.model}`
//     },
//     set setName( value){
//         this.name =value
//     }
//  }
// for(const key in car){
//     car.getInfo
//     car.setName ='bmw'
//     console.log(car[key]);
// }
// function Actor(name,surname,age){
//     this.name=name;
//     this.surname=surname;
//     this.age=age;
// }
// Actor.prototype.toString=function(){
//     return this.name + "  " + this.surname
// }
// let BradPitt=new Actor('Brad','Pitt',47)
// let RobertJr=new Actor('Robert','Downy Jr',50)

// console.log(BradPitt.getInfo());
// console.log(RobertJr.getInfo());
// document.write(BradPitt)

function Film(name,image,imdb,trailer,cast){
    this.name=name;
    this.image=image;
    this.imdb =imdb;
    this.trailer=trailer;
    this.cast=cast
}
let LordOfTheRings1 = new Film('The Lord of the Rings-Fellowship of the Rings(2001)','https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',8.8,'A shy young hobbit named Frodo Baggins inherits a simple gold ring. He knows the ring has power, but not that he alone holds the secret to the survival--or enslavement--of the entire world.', 'Elijah Wood-Frodo Baggins, Viggo Mortensen-Aragorn, Orlando Bloom-Legolas')
let Hobbit1 =new Film ('Hobbit-An Unexpected Journey(2012)','https://images.justwatch.com/poster/215748688/s592/the-hobbit-an-unexpected-journey-3d',7.8,'A curious Hobbit, Bilbo Baggins, journeys to the Lonely Mountain with a vigorous group of Dwarves to reclaim a treasure stolen from them by the dragon Smaug.','Martin Freeman-Bilbo Baggins, Richard Armitage-Thorin, lan McKellen-Gandalf')


let films=[LordOfTheRings1,Hobbit1]
let box =document.getElementById("box");

getFilms();
function getFilms (){
    box.innerHTML = "";
    for (const Film of films) {
        box.innerHTML +=
        ` <div class="card mb-3 ms-5 mt-4 border-0" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
          <figure class="imghvr-zoom-out-left  bg-white">
          <img id="images" src="${Film.image}" class="img-fluid rounded-start pt-3 border-left" alt="...">
          <figcaption class="bg-teal">
            <h3 class="ih-fade-down ih-delay-sm bg-teal">Cast</h3>
            <p class="ih-zoom-in ih-delay-md">
              <i>"${Film.cast}"</i>
            </p>
           
          </figcaption>
         
        </figure>
            
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title color-t">${Film.name}</h5>
              <p class="card-text">${Film.trailer}</p>
              <h5 class="card-text btn btn-outline-info"><strong">IMDB: ${Film.imdb}</strong></h5>
            </div>
          </div>
        </div>
      </div>`
    }
}
function creatFilms(){
    films.push(new Film(document.getElementById("inputName").value,document.getElementById("imageUrl").value))
    getFilms()
}