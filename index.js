superbowlWin = (array) =>
{
const result = array.find(array => array.result === "W"); 
return !!result ? result.year : undefined ;
} 
