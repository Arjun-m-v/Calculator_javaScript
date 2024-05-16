// a=[1,2,3,21,7,35,79,4]
// for(i of a){
//     console.log(i**2);
// }

// sq=(val)=>console.log(val**2)


// a.forEach(sq)
// a.forEach((val)=>console.log(val**2))


// ########################################################

// fact=(item)=>{
//     if(item==1){
//         return 1
//     }
//     else{
//         return item*fact(item-1)
//     }
// }

// fact=(item)=>(item==1)?1:(item*fact(item-1))
// console.log(fact(5))

// ########################################################


// a=[1,2,3,21,7,35,79,4]

// fact=(item)=>(item==1)?1:(item*fact(item-1))

// a.forEach((item)=>console.log((item==1)?1:(item*fact(item-1))))


// "map" ########################################################

// a=[1,2,3,21,7,35,79,4]

// res=a.map((item)=>item**2)

// // fact=(item)=>(item==1)?1:(item*fact(item-1))

// // res=a.map((item)=>(item==1)?1:(item*fact(item-1)))

// console.log(res)


// names=["ajith","amal","harikrishnan","joy","anu"]
// res=names.map((item)=>(item.length))
// console.log(res)


// "filter" ########################################################

// a=[1,2,3,12,45,33,97,96,85,61]
// res=a.filter((item)=>item%2==0)
// console.log(res)

// a=[1,2,3,12,45,33,97,96,85,61]

// res=a.find(item=>item==33)
// console.log(res)

// "reduce" ########################################################

// a=[1,2,3,12,45,33,97,96,85,61]

// res=a.reduce((total,item)=>total>item?total:item)
// console.log(res);

// res=a.reduce((total,item)=>total>item?total:item)
// console.log(res);

// "sort" ########################################################

// a=["ajith","amal","harikrishnan","joy","anu"]

// a.sort()
// a.reverse()
// console.log(a);

// a=[1,2,3,12,45,33,97,96,85,61]

// a.sort((a,b)=>a-b)
// a.sort((a,b)=>b-a)
// console.log(a);

// "every % sum" ########################################################
a=[1,2,3,12,45,33,97,96,85,61]
res=a.every((item)=>item%2==0)
res=a.every((item)=>item>0)
console.log(res);