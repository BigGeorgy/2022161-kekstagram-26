function randomNumber(min, max){
  if(max>min&&min>=0){
  const r = Math.random()*(max-min) + min
  return Math.floor(r)
  }
  else{
    console.log('Ошибка в диапазоне')
  }
}

randomNumber(0, 100)
console.log(randomNumber)


function stringLength (stringTest, maxStringLength){
if (stringTest.length<=maxStringLength){
  console.log('True')
}
else {
  console.log('False')
}
}
stringLength('длина комментария не может составлять больше 140 символов', 140)
