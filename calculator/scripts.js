display=(e)=>{
    console.log(e.target.value);
    result.value+=e.target.value
}

getResult=()=>{
    try{
        const val=result.value
        res=eval(val)
        console.log(res);
        result.value=res
    }
    catch(err){
        alert(err)
    }
}

clearInp=()=>{
    result.value=""
}