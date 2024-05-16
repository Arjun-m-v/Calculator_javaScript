data=[]
htmlData=""
const res=fetch("https://jsonplaceholder.typicode.com/users")
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
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.address.street}</td>
            <td>${item.address.city}</td>
            <td>${item.address.zipcode}</td>
        <tr>
        `
    })

    console.log(htmlData)
    
    document.querySelector("#tbody").innerHTML=htmlData

}