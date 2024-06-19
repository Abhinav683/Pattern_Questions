let n = 9;
let str = "";
let c=1;
for (let i = 0; i <n; i++) {
  for (let j = 0; j <2*n; j++) {
    if(j>=n-i && j<=i+1)
   {
    str+="*"
  }
  else
  str+=" "
  str += "\n";
}
console.log(str);
}