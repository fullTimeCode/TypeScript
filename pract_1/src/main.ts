let message = "Assalamu Alykum";
message = "Assalam-O-Alykum";
console.log(message);

// type definition (explicitly setting types is better)
const getFullName = (fname:string, lname:string[]): string => {
    return fname.toUpperCase() + " " + lname[0].toUpperCase();
}
console.log(getFullName("m", ["code"]));

// Interfaces 
interface UserInterface {
    name: string,
    age?: number,
    getMessage?(): string
}

const user1: UserInterface = {
    name: "Khan",
    age: 25,
    getMessage: function ()  {
        return "Hello! " + this.name;
    }
}

const user2: UserInterface = {
    age: 11,
    name: "Sara"
}

const result: string | undefined = user1.getMessage();
console.log(result)

// Types and Unions
type id = string;
let myID: id | number;

myID = 12;
myID = "student-845";
