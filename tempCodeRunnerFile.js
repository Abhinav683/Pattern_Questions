let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n; j++) {
    if(j<i-1 )
    str+= " ";
    else
    str+="*";

  }
}
console.log(str);

console.log("this is added");