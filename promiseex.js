const lott=3

lotterypromise=new Promise((res,rej)=>{
    lot=Math.floor(Math.random()*5)
    if(lot==lott){
        res("You Won!!")
    }
    else{
        rej("You Lose!!")
    }
})

lotterypromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})