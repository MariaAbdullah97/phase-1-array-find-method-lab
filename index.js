// code your solution here
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]
function superbowlWin(array){
    const result = array.find( array => array.result === "W" );
    
    if(result)
        return result.year;
}