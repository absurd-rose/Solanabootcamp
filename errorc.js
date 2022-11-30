const a=10;
const b=12;
try{
if(a>b)
{
    console.log("a is greater");
}
else
{
    throw new Error("b is greater");
} 
}
catch (err)
{
    console.log(err);
}