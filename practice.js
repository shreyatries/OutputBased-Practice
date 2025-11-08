var x= 10
function x(){
    console.log('hi')
}
x()

//-----------------------------------------------------------------------------------------------------------------------//

const userDetails= {
    name: 'Shreya',
    age: 26,
    address: {
        city: 'Kolkata',
        country: 'India'
    },
}


// let clonedUserDetails= {...userDetails}
let clonedUserDetails= JSON.parse(JSON.stringify(userDetails))
userDetails.age= 21
userDetails.address.city= 'Bangalore'

console.log(userDetails)
console.log(clonedUserDetails)
console.log(userDetails.address.city) //o/p: Bangalore
console.log(clonedUserDetails.address.city)//o/p: Kolkata

//-----------------------------------------------------------------------------------------------------------------------------//

const arr1 = [1,2,3];
const arr2 = [1,2,3];
const str = ["1,2,3"];
console.log(arr1 == str);
console.log(arr1 == arr2);

//--------------------------------------------------------------------------------------------------------------------------//

const user={
    firstName: 'Shreya',
    country: 'India'
}
var {firstName: fullName, country, lastName= 'Das', fullName= 'Bloom'}= user
console.log(fullName)
console.log(lastName)

//-------------------------------------------------------------------------------------------------------------------------//

function modify(obj){
    obj.name= 'Bloom'
}
let person= {name: 'Shreya'}
modify(person)
console.log(person.name)

function reassign(obj){
    obj= {name: 'Shreya Das'}
}
reassign(person)
console.log(person.name);