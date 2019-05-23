import { preserveWhitespacesDefault } from "@angular/compiler";

////////////////////////// TYPESCRIPT NOTES /////////////


// implcid declaring 
// it gives the number type to the lucky property and if i tried to rename lucky with anything other then a number then it will
// return an error. 
let lucky = 23;  // this is implcid declaring
let lucky: number = 23; // this method is redudent, it's recommended to just implicidly declare it instead.

// allow our varriable to be assigned any value:
// if you : any then typescript wont check that varriable.
let lucky: any = 23;
let lucky; // declaring it by it's self and not intializing it; this is also a way to asign something the any type


//////////// maintaing an object's shape with typescript

interface Person {
    first: string,
    last: string,
    [key: string]: any    /// this is an optional aditonal property so type script won't throw an error if this property isn't in the 
                        /// object 
}

///////////////strong typing functions

functions Pow( x: number, y: number) : string {  // the ( ): string annotates the type of the functions return value
    return Math.pow(x,y)                     //// you can check that the type is going to be passed in the parameters by
                                            /// adding the annotation to your function! 
}


function pow ( x: number, y: number) : void {   // you would : void for funtions that don't return a value such as 
                                                /// event listener funtions
    Math.pow(x, y).toString() 
}

pow(5,10) 




//////////////// strong typing arrays
// you can instrict shapes on arrays! 
// if you don't want your array strong type you would
// set an array equal to an epty array and it will allow all dif types of values into the array. 
// you atleast declare that it's an array.
// remeber for varriables the only way we could make them flexable and unchecked value types was by
// declaring it with out setting the value
// let variable; // or setting it to any// let varriable: any = 23

const arr = []  // this makes the array fexable 

arr.push(1)
arr.push('23')
arr.push(false)


// but if you want to restrict your array to a acceptable value type
 const arr: number[] = []     // this will error anytime you try to push a value that's not a number

 type MyList = [number, string, boolean] // each item in the array will have it's own fixed type


 //// sooo far i've seen typescript in angular classes that look like this

 export class stockItem implements onInit {

    public name: string;      /// i'm not sure why we don't just name = 'test stock company'. b/c then it will always look for string, right?
    public code: string; 
    public price: number;

    ngOninit(){
        this.name = 'test stock company';
        this.code = 'TSC';
        this.price = 95; 
        
    }
 }

 /////////////////////////////////// Object orriented typescript ////////////////////////////////////////


 class Emoji {
   

     constructor(public icon){       // when you declare the parameter in the constructor as public then it's 
                                    // a property that will be acessable on the class and all the instances of the class. 
         this.icon = icon;
     }
 }

 let emoji = new Emoji('sun')
 emoji.icon // returns sun 



 class privateEmoji {

    private _preview;   

    constructor(private _icon) {   // this would make the property unacessable from the outside unless we defined a 
        get icon() {                // getter to read it and OR a setter to allow change of the value 
            return this._icon; 
        }
        
        get preview() {
            return this._preview
        }
    }

 }


 /////////// Static methods make the property stay on the class it'self and is not re-created on the instances.

 class Emoji {

     static addOneTo(Val){
        return 1 + Val
     }

 }

Emoji.addOneTo(2)  // the cool thing is that we get to use the emogi class its'self to run the function and 
// it can be used constructively for good naming semantics. // the static method can't be called from the class instances 
// it has to be called from the main class. 


////// creating inheritance with typescript 

class Human {
    constructor (public name) {}
   
    sayHi(){
        return 'hello, this is {name}'
    }
  
}

const patrick = new Human('patrick')
console.log( patrick.sayHi() ) // hello, this is patrick 

///// we can extend the human class onto our new class
// this creates inheritance
// using the extends keyword we can create inheritance
// in this case, all of human's properties are now acessable fronm the superhuman class. :) 
class superHuman extends Human  {        
   
    heroName; 

    constructor(name){
        super(name);  // this super(name) will execute the code from the parent class. 
        this.heroName = 'HERO ${name}';
    }

    superPower(){
        return '${this.heroName} props treys'
    }
}

const steph = new SuperHuman('steph jeffries');
console.log(steph.sayhi()) // returns hello, sydney jeffries
// this is b/c we extended the human class
console.log(steph.superpower()) // returns steph jeffries props treys 
// the instance class has acess to the prototype classes' methods. 

///////////////// typescript and composition: 
///////////// typescript gives a nice class based interface for mixin's

class SuperHero implements CanSayHi, HasSuperPower {   // the implements keyword allows us to add the mixin pievces into 
                                                        // our class 

    constructor(public name) {

    }

    sayHi: () => string;        // this is how we add typescript  check on the return values of these methods
    superpower: () => string;

}

applyMixins(SuperHero, [canSayHi, HasSuperPower])  //requirement to combine mixin pieces into the class
SuperHero.canSayHi('typescript'); //returns hello, typescript


