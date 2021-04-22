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
  if (numberString.length === 2) {
    return tenthDigit[ numberString[ 0 ] ] + '-' + digitToNineteen[ numberString[ 1 ] ];
  }
  if (numberString.length === 3) {
    return digitToNineteen[ numberString[ 0 ] ] + ' ' + 'hundred' + ' and ' + tenthDigit[ numberString[ 1 ] ] + '-' + digitToNineteen[ numberString[ 2 ] ];
  }
  if (numberString.length === 4) {
    return digitToNineteen[ numberString[ 0 ] ] + ' ' + 'thousand' + ' ' + digitToNineteen[ numberString[ 1 ] ] + ' ' + 'hundred' + ' and ' + tenthDigit[ numberString[ 2 ] ] + '-' + digitToNineteen[ numberString[ 3 ] ];
  }
  if (numberString.length === 5) { 
    if (numberString[ 0 ] === 1) {
      const twoFirst = 10 + Number(numberString[ 1 ]);
      return digitToNineteen[ twoFirst ] + ' ' + 'thousand' + ' ' + digitToNineteen[ numberString[ 2 ] ] + ' ' + 'hundred' + ' and ' + tenthDigit[ numberString[ 3 ] ] + '-' + digitToNineteen[ numberString[ 4 ] ]
    } else {
      return tenthDigit[ numberString[ 0 ] ] + '-' + digitToNineteen[ numberString[ 1 ] ] + ' ' + 'thousand' + ' ' + digitToNineteen[ numberString[ 2 ] ] + ' ' + 'hundred' + ' and ' + tenthDigit[ numberString[ 3 ] ] + '-' + digitToNineteen[ numberString[ 4 ] ];
    }

  }
 
}
console.log(numToWord(23678))