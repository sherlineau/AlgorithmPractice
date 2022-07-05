function rotateStr(str, amnt) {
  var temp = ''
  if(amnt > str.length){
      amnt = amnt - str.length
  }
  for(var i = str.length-amnt; i < str.length; i++){
     temp += str[i]
  }
  for(var i = 0; i < str.length-amnt; i++){
      temp += str[i]
  }
  return temp
}
/**
* Determines whether the second string is a rotated version of the first.
* - Time: O(?).
* - Space: O(?).
* @param {string} s1
* @param {string} s2
* @returns {boolean} Whether the second string is a rotated version of the 1st.
*/
function isRotation(s1, s2) {
  if(s1.length !== s2.length){
      return false
  }
  for(var i = 0; i <=s1.length; i ++){
      if(rotateStr(s1,i) === s2){
          return true
      }
      
  }
  return false

}

console.log(isRotation(strA1,strB1))
console.log('expected is',expected1)
console.log(isRotation(strA2,strB2))
console.log('expected is',expected2)
console.log(isRotation(strA3,strB3))
console.log('expected is',expected3)