let n = 5;
let str = "";
let c=0;
for (let i = 1; i <n; i++) {
  for (let j = 1; j <2*n; j++) {
    if(j>=n-i && j<=n-2+i)
     { if(j<n)
        {
          c++;
          str+=c;
        }
        else
       { c--
      str+=c}}
  else
  str+=" "}
  str += "\n";
  c=1
       }
console.log(str);
