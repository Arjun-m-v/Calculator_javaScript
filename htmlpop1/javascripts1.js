data=[]
htmlData=""
const res=fetch("https://jsonplaceholder.typicode.com/posts")
res.then((val)=>val.json()).then((val)=>{
    console.log(val);
    setData(val)
}).catch((err)=>{
    console.log(err);
})


function setData(data){
    console.log(data)
    data.forEach(item=>{
        htmlData+=
        `
        <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
        <tr>
        `
    })

    console.log(htmlData)
    
    document.querySelector("#tbody").innerHTML=htmlData

}