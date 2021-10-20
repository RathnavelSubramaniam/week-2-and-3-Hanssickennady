/*Instructions
 - Greet your friend by printing a message to the console.
*/
var myfriend ="John Cena";
 
///////////////
function greetings() {
    return(myfriend);
    ///////////////
    
  }
   
  //leave this line unchanged to console log the results
  console.log('results: ', greetings(myfriend));
   
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = greetings;
  }
  