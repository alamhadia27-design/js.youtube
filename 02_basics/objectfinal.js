// Object Destructuring


const course={
    coursename: "JS",
    c_id: "456e",
    c_price: "995RS"
}


// course.c_id


const {c_id : id} = course

//console.log(c_id);
console.log(id);


// React

// const navbar = ({company}) => {

// }

// navbar(company = "Hadia")


// JSon is same as object

// In JSON the keys and values are written in " " 

// {
//     "name": "Hadia",
//     "course": "JS",
//     "price": "990RS"
// }

//sometime APIs in array 
[
    {},{}
]