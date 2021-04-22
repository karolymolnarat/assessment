function numToWord(number) {

  const digitToNineteen = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
  const tenthDigit = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
 
  numberString = number.toString();
 
  if (number < 0) {
    throw new Error('Number must be a positiv integer!');
  }
  
  if (number === 0) {
    return 'zero'
  }
  
  if (number < 20) {
    return digitToNineteen[ number ];
  }
 
}
console.log(numToWord(23678))