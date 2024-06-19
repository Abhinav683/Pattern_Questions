let n = 5;
let str = "";
let flag = 1;
for (let i = 0; i <= n; i++) {
  for (let j = 0; j < 2 * n ; j++) {
    if (j > i - 1 && j < 2 * n - i) {
      if (flag==1) {
        str += "*";
        flag = 0;
      } 
      if(j==2*n-i-1)
        {
          str+="*"
        }
      else str += "-";
      
    } else str += " ";
  }

  str += "\n";
  flag=1;
}
console.log(str);
