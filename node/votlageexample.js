/*
* Node voltage divider
*/

var vin = 3.3;
var vout = 1.2;
var rtwo = .001;
var rone = (vin*rtwo - vout*rtwo)/vout;
console.log("rone vmax: " + rone);
var rtwo = 10;
rone = (vin*rtwo - vout*rtwo)/vout;
console.log("rone vmin: " + rone);

rone = 16.4;
for (var rtwo = 10; rtwo >= 0 ; rtwo--) {
//vout = vin * (rtwo/(rone + rtwo));
//    rone = (vin*rtwo - vout*rtwo)/vout;
//    vin = vout * ((rone + rtwo)/(rtwo));
//    	console.log("vin: " + vin );
	vout = vin * (rtwo/(rtwo + rone));
	console.log("vin: " + vin + " rone: " + rone + " rtwo: " + rtwo + " vout: " + vout ) ;
}
rone = 10.0;
for (var rtwo = 10; rtwo >= 0 ; rtwo--) {
        vout = vin * (rtwo/(rtwo + rone));
        console.log("vin: " + vin + " rone: " + rone + " rtwo: " + rtwo + " vout: " + vout ) ;
}
