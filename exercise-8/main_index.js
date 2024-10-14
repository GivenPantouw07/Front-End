// 1.
import yearUntilRetirement from "./yearUntilRetirement.js";
//2.
import addNumber from "./addNumber.js";
// 3.
import calculateArea from "./calculateArea.js";
// 4.
import makeAjaxRequest from "./makeAjaxRequest.js";

yearUntilRetirement({ year: 1987, firstName: "John" });
console.log(addNumber());

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });
console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

makeAjaxRequest("www.google.com");
