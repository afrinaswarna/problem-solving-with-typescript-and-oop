// problem 1

const filterEvenNumbers = (arr: number[]): number[] => {
  let evenArr: number[] = [];
  for (const num of arr) {
    if (num % 2 === 0) evenArr.push(num);
  }
  return evenArr;
};

filterEvenNumbers([1, 2, 3, 4, 5, 6]);



// problem 2
const reverseString = (str: string): string => str.split("").reverse().join("");

reverseString("typescript");



// problem 3

type String = string;
type Number = number;
type StringOrNumber = String | Number;

const checkType = (inp: StringOrNumber): "String" | "Number" => {
  if (typeof inp === "string") {
    return "String";
  } else {
    return "Number";
  }
};

checkType(42);




// problem 4

const user = { id: 1, name: "John Doe", age: 21 };
const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

 getProperty(user, "name");




// problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const toggleReadStatus = (book: Book & { isRead?: boolean }) => {
  return { ...book, isRead: book.isRead !== undefined ? !book.isRead : true };
};

 toggleReadStatus(myBook);



// problem 6

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
  }
}
const student = new Student("Alice", 20, "A");
 student.getDetails();


 // problem 7

 const getIntersection = (arr1:number[],arr2:number[]):number[]=>{
    let commonArr:number[] = []
    for(let num of arr1){
        if(arr2.includes(num)){
            commonArr.push(num)

        }
    }
    return commonArr

 }

 
getIntersection([1, 2, 3, 4,5], [3, 4, 5, 6, 7])

