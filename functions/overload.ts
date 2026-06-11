function abcd(a:string):void;
function abcd(a:string, b:number):number;

function abcd(a:any, b?:any){
if(typeof a ==="string" && typeof b === "undefined"){
  console.log("arefinDev");
}
 if(typeof a === "string" && typeof b === "number"){
  return 321;
}
else throw new Error("Invalid arguments");
}
abcd("arefin");
abcd("arefin", 123);
