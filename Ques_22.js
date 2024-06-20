let n = 5;
let str = "";
for (let i = 0; i <n; i++) {
  for (let j = 0; j < 2*n; j++) {
    if(j>=n-i&&j<=n+i)
    {
      if(i%2==0)
        {
          str+= "*";
        }
        else
          str+="-"
    }
    
    else
    str+=" "
  }
  str += "\n";
}
for (let i = 0; i <=n; i++) {
  for (let j = 0; j <=2*n+1; j++) {
    if(j>=i&&j<=2*n-i)
      if(i%2==1)
        {
          str+= "*";
        }
        else
          str+="-"
    else
    str+=" "
  }
  str += "\n";
}
console.log(str);