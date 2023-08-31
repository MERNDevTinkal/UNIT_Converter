// Conversion Of Length 
function convertLength() {
    var inputValue = parseFloat(document.getElementById("length-input").value);
    var fromUnit = document.getElementById("length-from-unit").value;
    var toUnit = document.getElementById("length-to-unit").value;

    var result;

    if (fromUnit === toUnit) {
        result = inputValue;
    } else if (fromUnit === "cm" && toUnit === "m") {
        result = inputValue / 100;
    } else if (fromUnit === "cm" && toUnit === "km") {
        result = inputValue / 100000;
    } else if (fromUnit === "cm" && toUnit === "mm") {
        result = inputValue * 10;
    } else if (fromUnit === "cm" && toUnit === "inch") {
        result = inputValue / 2.54;
    } else if (fromUnit === "cm" && toUnit === "foot") {
        result = inputValue / 30.48;
    } else if (fromUnit === "cm" && toUnit === "mile") {
        result = inputValue / 160934.4;
    } else if (fromUnit === "m" && toUnit === "cm") {
        result = inputValue * 100;
    } else if (fromUnit === "m" && toUnit === "km") {
        result = inputValue / 1000;
    } else if (fromUnit === "m" && toUnit === "mm") {
        result = inputValue * 1000;
    } else if (fromUnit === "m" && toUnit === "inch") {
        result = inputValue * 39.37;
    } else if (fromUnit === "m" && toUnit === "foot") {
        result = inputValue * 3.281;
    } else if (fromUnit === "m" && toUnit === "mile") {
        result = inputValue / 1609.344;
    } else if (fromUnit === "km" && toUnit === "cm") {
        result = inputValue * 100000;
    } else if (fromUnit === "km" && toUnit === "m") {
        result = inputValue * 1000;
    } else if (fromUnit === "km" && toUnit === "mm") {
        result = inputValue * 1000000;
    } else if (fromUnit === "km" && toUnit === "inch") {
        result = inputValue * 39370.079;
    } else if (fromUnit === "km" && toUnit === "foot") {
        result = inputValue * 3280.84;
    } else if (fromUnit === "km" && toUnit === "mile") {
        result = inputValue / 1.609;
    } else if (fromUnit === "mm" && toUnit === "cm") {
        result = inputValue / 10;
    } else if (fromUnit === "mm" && toUnit === "m") {
        result = inputValue / 1000;
    } else if (fromUnit === "mm" && toUnit === "km") {
        result = inputValue / 1000000;
    } else if (fromUnit === "mm" && toUnit === "inch") {
        result = inputValue / 25.4;
    } else if (fromUnit === "mm" && toUnit === "foot") {
        result = inputValue / 304.8;
    } else if (fromUnit === "mm" && toUnit === "mile") {
        result = inputValue / 1609344;
    } else if (fromUnit === "inch" && toUnit === "cm") {
        result = inputValue * 2.54;
    } else if (fromUnit === "inch" && toUnit === "m") {
        result = inputValue / 39.37;
    } else if (fromUnit === "inch" && toUnit === "km") {
        result = inputValue / 39370.079;
    } else if (fromUnit === "inch" && toUnit === "mm") {
        result = inputValue * 25.4;
    } else if (fromUnit === "inch" && toUnit === "foot") {
        result = inputValue / 12;
    } else if (fromUnit === "inch" && toUnit === "mile") {
        result = inputValue / 63360;
    } else if (fromUnit === "foot" && toUnit === "cm") {
        result = inputValue * 30.48;
    } else if (fromUnit === "foot" && toUnit === "m") {
        result = inputValue / 3.281;
    } else if (fromUnit === "foot" && toUnit === "km") {
        result = inputValue / 3280.84;
    } else if (fromUnit === "foot" && toUnit === "mm") {
        result = inputValue * 304.8;
    } else if (fromUnit === "foot" && toUnit === "inch") {
        result = inputValue * 12;
    } else if (fromUnit === "foot" && toUnit === "mile") {
        result = inputValue / 5280;
    } else if (fromUnit === "mile" && toUnit === "cm") {
        result = inputValue * 160934.4;
    } else if (fromUnit === "mile" && toUnit === "m") {
        result = inputValue * 1609.344;
    } else if (fromUnit === "mile" && toUnit === "km") {
        result = inputValue * 1.609;
    } else if (fromUnit === "mile" && toUnit === "mm") {
        result = inputValue * 1609344;
    } else if (fromUnit === "mile" && toUnit === "inch") {
        result = inputValue * 63360;
    } else if (fromUnit === "mile" && toUnit === "foot") {
        result = inputValue * 5280;
    }

    document.getElementById("length-result").innerHTML = result;
}

// Conversion Of Weights
function convertWeight() {
    var inputValue = parseFloat(document.getElementById("weight-input").value);
    var fromUnit = document.getElementById("weight-from-unit").value;
    var toUnit = document.getElementById("weight-to-unit").value;

    var result;

    // Conversion cases for weight units
    if (fromUnit === toUnit) {
        result = inputValue;
    } else if (fromUnit === "grain" && toUnit === "gram") {
        result = inputValue * 0.06479891;
    } else if (fromUnit === "grain" && toUnit === "ounce") {
        result = inputValue * 0.002285714;
    } else if (fromUnit === "grain" && toUnit === "pound") {
        result = inputValue * 0.000142857;
    } else if (fromUnit === "grain" && toUnit === "kilogram") {
        result = inputValue * 0.00006479891;
    } else if (fromUnit === "grain" && toUnit === "stone") {
        result = inputValue * 0.000009142857;
    } else if (fromUnit === "gram" && toUnit === "grain") {
        result = inputValue * 15.4323584;
    } else if (fromUnit === "gram" && toUnit === "ounce") {
        result = inputValue * 0.03527396;
    } else if (fromUnit === "gram" && toUnit === "pound") {
        result = inputValue * 0.002204623;
    } else if (fromUnit === "gram" && toUnit === "kilogram") {
        result = inputValue * 0.001;
    } else if (fromUnit === "gram" && toUnit === "stone") {
        result = inputValue * 0.000157473;
    } else if (fromUnit === "ounce" && toUnit === "grain") {
        result = inputValue * 437.5;
    } else if (fromUnit === "ounce" && toUnit === "gram") {
        result = inputValue * 28.3495231;
    } else if (fromUnit === "ounce" && toUnit === "pound") {
        result = inputValue * 0.0625;
    } else if (fromUnit === "ounce" && toUnit === "kilogram") {
        result = inputValue * 0.0283495231;
    } else if (fromUnit === "ounce" && toUnit === "stone") {
        result = inputValue * 0.004464286;
    } else if (fromUnit === "pound" && toUnit === "grain") {
        result = inputValue * 7000;
    } else if (fromUnit === "pound" && toUnit === "gram") {
        result = inputValue * 453.59237;
    } else if (fromUnit === "pound" && toUnit === "ounce") {
        result = inputValue * 16;
    } else if (fromUnit === "pound" && toUnit === "kilogram") {
        result = inputValue * 0.45359237;
    } else if (fromUnit === "pound" && toUnit === "stone") {
        result = inputValue * 0.0714285714;
    } else if (fromUnit === "kilogram" && toUnit === "grain") {
        result = inputValue * 15432.3584;
    } else if (fromUnit === "kilogram" && toUnit === "gram") {
        result = inputValue * 1000;
    } else if (fromUnit === "kilogram" && toUnit === "ounce") {
        result = inputValue * 35.27396;
    } else if (fromUnit === "kilogram" && toUnit === "pound") {
        result = inputValue * 2.204623;
    } else if (fromUnit === "kilogram" && toUnit === "stone") {
        result = inputValue * 0.157473;
    } else if (fromUnit === "stone" && toUnit === "grain") {
        result = inputValue * 98000;
    } else if (fromUnit === "stone" && toUnit === "gram") {
        result = inputValue * 6350.29318;
    } else if (fromUnit === "stone" && toUnit === "ounce") {
        result = inputValue * 224;
    } else if (fromUnit === "stone" && toUnit === "pound") {
        result = inputValue * 14;
    } else if (fromUnit === "stone" && toUnit === "kilogram") {
        result = inputValue * 6.35029318;
    }

    document.getElementById("weight-result").innerHTML = result;
}

//Conversion Of Speed
function convertSpeed() {
    var inputValue = parseFloat(document.getElementById("speed-input").value);
    var fromUnit = document.getElementById("speed-from-unit").value;
    var toUnit = document.getElementById("speed-to-unit").value;

    var result;

    // Conversion cases for speed units
    if (fromUnit === toUnit) {
        result = inputValue;
    } else if (fromUnit === "ft/s" && toUnit === "m/s") {
        result = inputValue * 0.3048;
    } else if (fromUnit === "ft/s" && toUnit === "km/h") {
        result = inputValue * 1.09728;
    } else if (fromUnit === "ft/s" && toUnit === "mile/h") {
        result = inputValue * 0.681818;
    } else if (fromUnit === "ft/s" && toUnit === "knots") {
        result = inputValue * 0.592484;
    } else if (fromUnit === "ft/s" && toUnit === "light") {
        result = inputValue * 0.00000000333564;
    } else if (fromUnit === "m/s" && toUnit === "ft/s") {
        result = inputValue * 3.28084;
    } else if (fromUnit === "m/s" && toUnit === "km/h") {
        result = inputValue * 3.6;
    } else if (fromUnit === "m/s" && toUnit === "mile/h") {
        result = inputValue * 2.23694;
    } else if (fromUnit === "m/s" && toUnit === "knots") {
        result = inputValue * 1.94384;
    } else if (fromUnit === "m/s" && toUnit === "light") {
        result = inputValue * 0.00000000670617;
    } else if (fromUnit === "km/h" && toUnit === "ft/s") {
        result = inputValue * 0.911344;
    } else if (fromUnit === "km/h" && toUnit === "m/s") {
        result = inputValue * 0.277778;
    } else if (fromUnit === "km/h" && toUnit === "mile/h") {
        result = inputValue * 0.621371;
    } else if (fromUnit === "km/h" && toUnit === "knots") {
        result = inputValue * 0.539957;
    } else if (fromUnit === "km/h" && toUnit === "light") {
        result = inputValue * 0.00000000185877;
    } else if (fromUnit === "mile/h" && toUnit === "ft/s") {
        result = inputValue * 1.46667;
    } else if (fromUnit === "mile/h" && toUnit === "m/s") {
        result = inputValue * 0.44704;
    } else if (fromUnit === "mile/h" && toUnit === "km/h") {
        result = inputValue * 1.60934;
    } else if (fromUnit === "mile/h" && toUnit === "knots") {
        result = inputValue * 0.868976;
    } else if (fromUnit === "mile/h" && toUnit === "light") {
        result = inputValue * 0.00000000299792;
    } else if (fromUnit === "knots" && toUnit === "ft/s") {
        result = inputValue * 1.68781;
    } else if (fromUnit === "knots" && toUnit === "m/s") {
        result = inputValue * 0.514444;
    } else if (fromUnit === "knots" && toUnit === "km/h") {
        result = inputValue * 1.852;
    } else if (fromUnit === "knots" && toUnit === "mile/h") {
        result = inputValue * 1.15078;
    } else if (fromUnit === "knots" && toUnit === "light") {
        result = inputValue * 0.00000000333614;
    } else if (fromUnit === "light" && toUnit === "ft/s") {
        result = inputValue * 299792458;
    } else if (fromUnit === "light" && toUnit === "m/s") {
        result = inputValue * 299792458;
    } else if (fromUnit === "light" && toUnit === "km/h") {
        result = inputValue * 1079252848.8;
    } else if (fromUnit === "light" && toUnit === "mile/h") {
        result = inputValue * 670616629;
    } else if (fromUnit === "light" && toUnit === "knots") {
        result = inputValue * 582749912;
    }

    document.getElementById("speed-result").innerHTML = result;
}

//Conversion Of Temperature 
function convertTemperature() {
    var inputValue = parseFloat(document.getElementById("temp-input").value);
    var fromUnit = document.getElementById("temp-from-unit").value;
    var toUnit = document.getElementById("temp-to-unit").value;

    var result;

    // Conversion cases for temperature units
    if (fromUnit === toUnit) {
        result = inputValue;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (inputValue * 9 / 5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = inputValue + 273.15;
    } else if (fromUnit === "celsius" && toUnit === "rankine") {
        result = (inputValue + 273.15) * 9 / 5;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (inputValue - 32) * 5 / 9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (inputValue + 459.67) * 5 / 9;
    } else if (fromUnit === "fahrenheit" && toUnit === "rankine") {
        result = inputValue + 459.67;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = inputValue - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (inputValue * 9 / 5) - 459.67;
    } else if (fromUnit === "kelvin" && toUnit === "rankine") {
        result = inputValue * 9 / 5;
    } else if (fromUnit === "rankine" && toUnit === "celsius") {
        result = (inputValue - 491.67) * 5 / 9;
    } else if (fromUnit === "rankine" && toUnit === "fahrenheit") {
        result = inputValue - 459.67;
    } else if (fromUnit === "rankine" && toUnit === "kelvin") {
        result = inputValue * 5 / 9;
    }

    document.getElementById("temp-result").innerHTML = result;
}
//Conversion Of Digital Storage
function convertStorage() {
    var inputValue = parseFloat(document.getElementById("storage-input").value);
    var fromUnit = document.getElementById("storage-from-unit").value;
    var toUnit = document.getElementById("storage-to-unit").value;

    var result;

    // Conversion cases for digital storage units
    if (fromUnit === toUnit) {
        result = inputValue;
    } else if (fromUnit === "bit" && toUnit === "byte") {
        result = inputValue / 8;
    } else if (fromUnit === "bit" && toUnit === "kib") {
        result = inputValue / 8192;
    } else if (fromUnit === "bit" && toUnit === "mib") {
        result = inputValue / 8388608;
    } else if (fromUnit === "bit" && toUnit === "gib") {
        result = inputValue / 8589934592;
    } else if (fromUnit === "bit" && toUnit === "tib") {
        result = inputValue / 8796093022208;
    } else if (fromUnit === "bit" && toUnit === "pib") {
        result = inputValue / 9007199254740992;
    } else if (fromUnit === "byte" && toUnit === "bit") {
        result = inputValue * 8;
    } else if (fromUnit === "byte" && toUnit === "kib") {
        result = inputValue / 1024;
    } else if (fromUnit === "byte" && toUnit === "mib") {
        result = inputValue / 1048576;
    } else if (fromUnit === "byte" && toUnit === "gib") {
        result = inputValue / 1073741824;
    } else if (fromUnit === "byte" && toUnit === "tib") {
        result = inputValue / 1099511627776;
    } else if (fromUnit === "byte" && toUnit === "pib") {
        result = inputValue / 1125899906842624;
    } else if (fromUnit === "kib" && toUnit === "bit") {
        result = inputValue * 8192;
    } else if (fromUnit === "kib" && toUnit === "byte") {
        result = inputValue * 1024;
    } else if (fromUnit === "kib" && toUnit === "mib") {
        result = inputValue / 1024;
    } else if (fromUnit === "kib" && toUnit === "gib") {
        result = inputValue / 1048576;
    } else if (fromUnit === "kib" && toUnit === "tib") {
        result = inputValue / 1073741824;
    } else if (fromUnit === "kib" && toUnit === "pib") {
        result = inputValue / 1099511627776;
    } else if (fromUnit === "mib" && toUnit === "bit") {
        result = inputValue * 8388608;
    } else if (fromUnit === "mib" && toUnit === "byte") {
        result = inputValue * 1048576;
    } else if (fromUnit === "mib" && toUnit === "kib") {
        result = inputValue * 1024;
    } else if (fromUnit === "mib" && toUnit === "gib") {
        result = inputValue / 1024;
    } else if (fromUnit === "mib" && toUnit === "tib") {
        result = inputValue / 1048576;
    } else if (fromUnit === "mib" && toUnit === "pib") {
        result = inputValue / 1073741824;
    } else if (fromUnit === "gib" && toUnit === "bit") {
        result = inputValue * 8589934592;
    } else if (fromUnit === "gib" && toUnit === "byte") {
        result = inputValue * 1073741824;
    } else if (fromUnit === "gib" && toUnit === "kib") {
        result = inputValue * 1048576;
    } else if (fromUnit === "gib" && toUnit === "mib") {
        result = inputValue * 1024;
    } else if (fromUnit === "gib" && toUnit === "tib") {
        result = inputValue / 1024;
    } else if (fromUnit === "gib" && toUnit === "pib") {
        result = inputValue / 1048576;
    } else if (fromUnit === "tib" && toUnit === "bit") {
        result = inputValue * 8796093022208;
    } else if (fromUnit === "tib" && toUnit === "byte") {
        result = inputValue * 1099511627776;
    } else if (fromUnit === "tib" && toUnit === "kib") {
        result = inputValue * 1073741824;
    } else if (fromUnit === "tib" && toUnit === "mib") {
        result = inputValue * 1048576;
    } else if (fromUnit === "tib" && toUnit === "gib") {
        result = inputValue * 1024;
    } else if (fromUnit === "tib" && toUnit === "pib") {
        result = inputValue / 1024;
    } else if (fromUnit === "pib" && toUnit === "bit") {
        result = inputValue * 9007199254740992;
    } else if (fromUnit === "pib" && toUnit === "byte") {
        result = inputValue * 1125899906842624;
    } else if (fromUnit === "pib" && toUnit === "kib") {
        result = inputValue * 1099511627776;
    } else if (fromUnit === "pib" && toUnit === "mib") {
        result = inputValue * 1073741824;
    } else if (fromUnit === "pib" && toUnit === "gib") {
        result = inputValue * 1048576;
    } else if (fromUnit === "pib" && toUnit === "tib") {
        result = inputValue * 1024;
    }

    document.getElementById("storage-result").innerHTML = result;
}