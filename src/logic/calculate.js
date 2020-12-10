const calculate = (CalaculatorObject, name) => {
  const { total, next, operation } = CalaculatorObject;
  if (name == '+/-') {
  	total *= -1
  	next *= -1
  }
  
}