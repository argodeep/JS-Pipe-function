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

getFileNameExt = (url) => {
  const urlSplit = url.split('?X-Amz-Content', 1).toString();
  const name = urlSplit.split('/')[urlSplit.split('/').length - 1].toLowerCase();
  const ext = name.split('.')[name.split('.').length - 1].toLowerCase();
  return {
    name: name,
    ext: ext
  }
}


console.log(getFileNameExt('https://example.s3.ap-south-1.amazonaws.com/docker.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Assdshjbsap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20191213T072236Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=sdsjbdjsbdmns564as5ad'));

{
name:"docker.pdf",
ext:"pdf"
}

// 4. get timer text in hours:min:sec format if duration is given in mins.

function getTimerValue(duration) {
    if (duration < 1) {
      return {
        hour: 0,
        min: 1,
        sec: Math.ceil(duration * 60)
      }
    } else if (duration => 1 && duration < 60) {
      return {
        hour: 0,
        min: Math.ceil(duration),
        sec: 0
      }
    }
    return {
      hour: Math.ceil(duration / 60) - 1,
      min: duration - (Math.ceil(duration / 60) - 1) * 60,
      sec: 0
    }
  }
