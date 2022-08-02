//Create a new func sleep
function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms))
}
function checkNasa() {
    if(encodeURI(location.hostname) == encodeURI("www.nasa.gov"))  {
        return true;
    }
    
   
}
const isNasaURL = urlString=> {
    return (urlString == "www.nasa.gov")
}

async function hecNasa() {
    console.log("-----Hacking Nasa-----");
    await sleep(1000);

 
 console.log("-----Tool By Phan Cong Dung-----");
await sleep(1000);
 console.log("10%");
await sleep(1000);
 console.log("20%");
await sleep(1000);
 console.log("30%"); 
await sleep(1000);
 console.log("40%");
await sleep(1000);
 console.log("50%");
await sleep(1000);
 console.log("60%"); 
await sleep(1000);
 console.log("80%"); 
 console.log("90%"); 
await sleep(1000);
 console.log("100%");
 console.log("Loading.....%"); 
 console.log("=====>Da hack nasa successfully<=====");
document.write("Hacked");

}


     
    // check = isValidUrl("https://www.nasa.gov/");
    if(checkNasa() ){ hecNasa();
} else console.error("This is not nasa website!")