/*
Follow the instructions - Create a function called "isString" that takes 3 arguments (x1, x2, x3)
- check if each argument is a string using typeof.
- If each argument is a string, return "strings"
- If each argument is NOT a string, return "not strings"

*/

//Write your code here
////////////////////////////////////////
function isString(a,b,c){
    var a="hansi";
    var b=26;
    var c=true;
    {
        if(((typeof a)==="string")&&((typeof b)==="string")&&((typeof c)==="string"))
        {
            return "string";
        }
        else
        {
            return "not a String";
        }
    }
}

////////////////////////////////////////

//open the browser console to check results
console.log('results: ', isString('a', 'b', 'c'));

//don't change this line
if (typeof module !== 'undefined') {
    module.exports = isString;
}
