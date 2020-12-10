const calculate = (CalaculatorObject, name) => {
  let { total, next, operation } = CalaculatorObject;
  if (name == '+/-') {
  	total *= -1
  	next *= -1
  }
  
}