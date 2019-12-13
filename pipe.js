// 1. Get time difference from current time.

function calculateTime(date) {
 let now = new Date().getTime();
  let time = new Date(date).getTime();
  let timeLocale = time - new Date().getTimezoneOffset() * 60 * 1000
  let diff = (now - timeLocale) / 1000;
  if (diff <= 59) {
    let show = diff.toFixed() + ' Seconds Ago';
    return show;
  } else if (diff > 59 && diff < 120) {
    let show = (diff / 60).toFixed() + ' Minute Ago';
    return show;
  } else if (diff > 119 && diff < 3600) {
    let show = (diff / 60).toFixed() + ' Minutes Ago';
    return show;
  } else if (diff > 3600 && diff < 3600 * 2) {
    let show = (diff / 60 / 60).toFixed() + ' Hour Ago';
    return show;
  } else if (diff > 3600 * 2 - 1 && diff < 3600 * 24 - 1) {
    let show = (diff / 60 / 60).toFixed() + ' Hours Ago';
    return show;
  } else if (diff > 3600 * 24 && diff < 3600 * 24 * 2) {
    let show = (diff / 60 / 60 / 24).toFixed() + ' Day Ago';
    return show;
  } else if (diff > 3600 * 24 * 2 - 1 && diff < 3600 * 24 * 30 - 1) {
    let show = (diff / 60 / 60 / 24).toFixed() + ' Days Ago';
     return show;
  } else if (diff > 3600 * 24 * 30 && diff < 3600 * 24 * 30 * 2) {
    let show = (diff / 60 / 60 / 24 / 30).toFixed() + ' Month Ago';
    return show;
  } else if (diff > 3600 * 24 * 30 * 2 - 1 && diff < 3600 * 24 * 30 * 12 - 1) {
    let show = (diff / 60 / 60 / 24 / 30).toFixed() + ' Months Ago';
    return show;
  } else if (diff > 3600 * 24 * 30 * 12 && diff < 3600 * 24 * 30 * 12 * 2) {
    let show = (diff / 60 / 60 / 24 / 30 / 12).toFixed() + ' Year Ago';
    return show;
  } else if (diff > 3600 * 24 * 30 * 12 * 2 - 1) {
    let show = (diff / 60 / 60 / 24 / 30 / 12).toFixed() + ' Years Ago';
    return show;
  } 
 return null
}


let randomDate = 'Thu, 08 Aug 2019 03:04:05 GMT+0530 (India Standard Time)';
console.log(calculateTime(randomDate));

// 2. Get sum of total from an array.

let getSum = (givenArray) => {
  let total = 0;
  for(var k = 0; k < givenArray.length; k++) {                  
    if(!isNaN(givenArray[k])){
      total += Number(someValues[k]);
    }
   
  }
  return total;
}

let someValues = ['a', 4, 5, 'h', 5];
console.log(getSum(someValues));

// 3. Get file name & extension from s3 bucket url

{
name:"docker.pdf",
ext:"pdf"
}
