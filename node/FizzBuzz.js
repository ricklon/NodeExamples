var value;
for ( var i=0; i <= 100; i++ ) {
    value = "" + i;
    if ((i%3)===0)
    {
        value = "Fizz";
    }
    if((i%5)===0)
    {
        if ( value == "Fizz")
    {
        value = value + "Buzz";
    }
    else
    {
    value = "Buzz";
    }
    }
console.log(value);
}
