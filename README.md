# JS-Pipe-function

Useful JS function. Pass arguments and get results. Written in planin JS. On any framework you can use this.

## Function Index
1. _Get time difference from current time_. 
2. _Get sum of total from an array_.

## Getting Started

* Copy the function in your code.
* Call the function while passing the argument.

## Example

A function which return time difference from current time for any time given in past. We can see such example in social media posts e.g. '2 Hours ago' like this.
 
 This is the function
 ```javascript
function calculateDiffTime(date) {
  let now = new Date().getTime();
  let time = new Date(date).getTime();
  let timeLocale = time - new Date().getTimezoneOffset() * 60 * 1000
  let diff = (now - timeLocale) / 1000;
  if (diff <= 59) {
    let show = diff.toFixed() + ' Seconds Ago';
    return show;
  } else if (diff > 59 && diff < 3600) {
    let show = (diff / 60).toFixed() + ' Minutes Ago';
    return show;
  } else if (diff > 3600 && diff < 3600 * 24 - 1) {
    let show = (diff / 60 / 60).toFixed() + ' Hours Ago';
    return show;
  } else if (diff >= 3600 * 24) {
    let show = (diff / 60 / 60 / 24).toFixed() + ' Days Ago';
    return show;
  }
}
 
 ```
 
 Now get the result
 
```javascript
let randomDate = 'Thu, 08 Aug 2019 03:04:05 GMT+0530 (India Standard Time)';
console.log(calculateDiffTime(randomDate));
```

## Customization

If you want you can customize it. I have given an example for each function to demonstrate the algorithm.

## Function Request

If want to contribute or want any function to be added please create an issue with details. I will get back to you.
