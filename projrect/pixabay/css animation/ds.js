console.log("Data Structure");
let arr= new Array ;
arr=[2,6,9,3,7,5,4]
arr.length=100;

// console.log(arr) traversal
// function display (arr){
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         console.log(element)
        
//     }
// }
// display(arr)
// let leng = arr.length;
// const shotedArr = arr.sort((a,b)=>{
//     return b-a;
// })

// console.log(shotedArr)

// function shorting() {
//     for(let i =0;i<arr.length;i++){
//         let a = arr[i];
//         let b = arr[i+1]
//         console.log(a,b)
    
//     }
    
// }
// shorting()


// class Node{
//     constructor(val ){
//         this.val=val;
//         this.left=null;
//         this.right=null;
//     }
// }

// const treeIncludes =(root)=>{
//     const stack =[root];
//     while(stack.length>0){
//         const current = stack.shift();
//         console.log(current.val);

//         if(current.left) stack.push(current.left);
//         if(current.right) stack.push(current.right);
//     }
// }

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left =b;
// a.right=c;
// b.left = d;
// b.right = e;
// c.right=f;
// let arrt = [a,b,c,d,e.f]
// treeIncludes(a,"e")

// const breathfirstValues = (root)=>{
//     if (root!==null)return [];
//     const value = [];
//     const ques = [root];

//     while(ques.length>0){
//         const current = ques.shift();
//         value.push(current.val);

//     }
// }

let xyz = function (age,name) {
    this.name=name;
    this.age=age;    
    return this;
}

let abc ={
    start:"",
    end:"",
    leng:"",
    xyz_psedoArry:[]

    
}

abc.xyz_psedoArry.push(new xyz(24,"aman"));
console.log(abc)