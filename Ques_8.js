let n = 5;
let str = "";
for (let i = 0; i <= 2 * n; i++) {
  {
    if(i<n){
        for (let j = 0; j < n; j++) {
            if (j > i) str += " ";
            else str += "*";
          }
    }else{
        for (let j = 0; j < n; j++) {
            if(j<2*n-i)
             str += "*";
            else
            str+=" "
            
          }
    }

    str += "\n";
  }
}
console.log(str);
