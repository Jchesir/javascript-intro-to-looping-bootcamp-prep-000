function forLoop(array){
  for(let i = 0; i < 25; i++) {
 if (i===1){
array.push("I am 1 strange loop."); 
 }
else{
  array.push(`I am ${i} strange loops.`);
}
  
  }
return array;   
} 

function whileLoop(digit){
  let countdown = digit;

  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done'; 
}

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
}
do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());
    while (maybeTrue())
    return array
}
