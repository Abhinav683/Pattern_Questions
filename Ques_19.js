let n = 9;
let str = "";
let c=1;
let flag=1
for (let i = 0; i <n; i++) {
  for (let j = 0; j <2*n; j++) {
    if(j>=n-i && j<=i+1)
   { 
    if(flag==1)
    str+="*"
    flag=0;
    str=str+"-";
    }
    
    else
    str+=" ";
  }
  flag=1
  str += "\n";
}
console.log(str);