function returnRandomNumber(min, max){
  if(max>min&&min>=0){
    const r = Math.random()*(max-min) + min;
    return Math.floor(r);
  }
  else{
    return 'none';
  }
}

returnRandomNumber(0, 100);


function stringLength (stringTest, maxStringLength){
  if (stringTest.length<=maxStringLength){
    return true;
  }
  else {
    return false;
  }
}
stringLength('длина комментария не может составлять больше 140 символов', 140);
