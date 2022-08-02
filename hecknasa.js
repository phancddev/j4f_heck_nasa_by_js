//Create a new func sleep
function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms))
}
//Check nasa website 
function checkNasa() {
    if(encodeURI(location.hostname) == encodeURI("www.nasa.gov"))  {
        return true;
    }
    
   
}
const isNasaURL = urlString=> {
    return (urlString == "www.nasa.gov")
}

// check = isValidUrl("https://www.nasa.gov/");
    // Check Nasa website
    if(checkNasa() ){ hecNasa();
    } else {
        console.error("This is not nasa website!");
        setTimeout(()=>{
          let check = confirm("Do you want to move nasa website?");
            if(check) {
                setTimeout(()=> {
                    //Move to nasa website
                    location.href = "https://www.nasa.gov/";
                },1000);
            } else console.error("This is not nasa website!");
        }, 1000);
    }
    

// Function Hacking
async function hecNasa() {
    await sleep(2000);
    console.log("=====>Uploading tool<=====")
    await sleep(2000);
    console.log("Loading.....%"); 
    await sleep(2000);
    console.log("Loading.....%");
    await sleep(2000);
    console.log("==========> Upload tool successfully <==========");
    console.log("Loading.....%");
    await sleep(2000);
    console.log("-----Starting tool-----");
    await sleep(2000);
    console.log("--- Tool started ---");
    await sleep(5000);
    console.log("----- Hacking Nasa -----");
    await sleep(2000);

 //Founder
 console.log("----- Tool By Phan Cong Dung -----");
 await sleep(2000);
 //Tool started
 console.log("2%");
await sleep(1000);
 console.log("10%");
 await sleep(2000);
 console.log("12%");
await sleep(1000);
 console.log("20%");
await sleep(1000);
 console.log("30%"); 
await sleep(1000);
 console.log("40%");
await sleep(2000);
 console.log("50%");
await sleep(1000);
 console.log("60%"); 
 await sleep(3000);
 console.log("70%"); 
await sleep(3000);
 console.log("80%"); 
 await sleep(3000);
 console.log("90%"); 
await sleep(1000);
console.log("99%")
await sleep(2000);
console.log("Loading.....%"); 
await sleep(2000);
 console.log("100%");
 await sleep(2000);
 console.log("Loading.....%"); 
 await sleep(5000);
 console.log("Loading.....%"); 
 await sleep(3000);
 console.log("----- Uploading data -----")
 await sleep(3000);
 console.log("----- Uploaded data -----")
 await sleep(2000);
 document.write("Hacked");
 await sleep(1000);
 console.log("=====>Da hack nasa successfully<=====");


}


     
    