

const employee = [ 
    {name : 'raju', dept : 'senior software engineer',salary : 100000, bonus : 0},
    {name : 'vijay', dept : 'fresher', salary : 20000, bonus : 0},
    {name : 'mike', dept : 'quality', salary : 50000, bonus : 0},
    {name : 'John', dept: 'UI developer', salary : 80000, bonus : 0},
    {name : 'Pooja', dept: 'Manager', salary : 110000, bonus : 0},
    {name : 'Anusha', dept: 'UI developer', salary : 20000, bonus : 0},

]

//Code for Adding Bonus Rs. 50000 to every property of array object**************************

const output = employee.map((x) => ({...x, bonus : 10000}));

const func = employee.map(
    function (item){
        return {...item, bonus : 20000};
    }
);
console.log(output);
console.log(func);


// code to filter the salary who has 50000**************************

const output2 = employee.filter((x) => x.salary === 50000)


const func1 = employee.filter(
    function (item){
        return item.salary === 50000;
    }
)

console.log(output2);
console.log(func1);

        
// code to display the first property who has the dept as UI developer**************************


const output3 = employee.find(x => x.dept === 'UI developer' );

console.log(output3);
//{name: 'John', dept: 'UI developer', salary: 80000, bonus: 0}


const func3 = employee.find(
    function (item){
        return item.dept === 'UI developer';
    }
);
console.log(func3);
//{name: 'John', dept: 'UI developer', salary: 80000, bonus: 0}

