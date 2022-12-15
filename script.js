program 1:


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
     var res = result.map((ele)=>`${ele.name.common} : ${ele.continent} : ${ele.region}`);

     console.log(res)
    }


program 2:


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){

    var data = request.response
    var result = JSON.parse(data)
     var res = result.filter((ele)=>ele.population<200000)
     
     console.log(res)
    
    }


program 3:


var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){

    var data = request.response
    var result = JSON.parse(data)
    var res = result.forEach((ele)=>{console.log(`${ele.name.common} ${ele.name} ${ele.capital} ${ele.flag}`)})
   
}



program 4:


var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){

    var data = request.response
    var result = JSON.parse(data)
    var res = result.reduce((acc,cv)=>acc+cv.population,0)

    console.log(res)
    
 }


 program 5: 
 
   var request = new XMLHttpRequest();
   request.open("GET","https://restcountries.com/v3.1/all",true)
   request.send()
   request.onload=function(){

     var data = request.response
     var result = JSON.parse(data)
     var res1= res.map((ele)=>`${ele.name.common}: ${ele.US Dollars} ${ele.currency}`)
     
     console.log(res1)
     
    }





