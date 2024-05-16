
function fact(a){
    if(a==1){
        return 1
    }
    else{
        return a*fact(a-1)
    }
}

fact=(a)=>(a==1)?1:(a*fact(a-1))

res=fact(5)
console.log(res)