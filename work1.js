commonwealth=[
    {country:"India",gold:21,silver:13,bronze:12},
    {country:"USA",gold:10,silver:10,bronze:9},
    {country:"China",gold:2,silver:2,bronze:22},
    {country:"Russia",gold:16,silver:22,bronze:2},
    {country:"South Korea",gold:11,silver:10,bronze:7},
]

// // display names of every country who participated in commanwealth.
// commonwealth.forEach((item)=>console.log(item.country))

// // // display names of every country who have more than 15 gold medals.
// // res=commonwealth.filter((item)=>item.gold>15)
// // res.forEach((item)=>console.log(item.country))

// commonwealth.filter((item)=>item.gold>15).forEach(item=>console.log(item.country))


// Finad the total of silver medals won by every country
// res=commonwealth.map((item)=>item.silver).reduce((total,item)=>total+item)
// console.log(res);

// Display the names of countries in ascending order of their bronze count
// commonwealth.sort((a,b)=>a.bronze-b.bronze).forEach(item=>console.log(item.country))

// Display the medal details of country=India
// res=commonwealth.find(item=>item.country=="India")
// console.log(res)

// Find the country with least number of gold medal
res=commonwealth.reduce((total,item)=>item.gold>item.gold?item:total)
console.log(res.country)