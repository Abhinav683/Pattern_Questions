let n = 5;
let str = "";
let c=1;
for (let i = 1; i <=n-1; i++) {
  for (let j = 0; j < i; j++) {
    str+= c;
    c+=1;
  }
  str += "\n";
 
}
console.log(str);