let n = 5;
let str = "";
for (let i = 0; i <= 2 * n; i++) {
  {
    if(i<n){
        for (let j = 0; j < n; j++) {
            if(j<n-i-1)
            str+= " ";
            else
            {
                if(i%2==0)
                   str+="*"
                else
                str+="-"                 
            }        
        }
    }else{
        for (let j = 0; j < n; j++) {
                if(j<i-n+1 )
                str+= " ";
                else
                if(i%2==0)
                    str+="*"
                 else
                 str+="-"  
            
          }
    }

    str += "\n";
  }
}
console.log(str);


