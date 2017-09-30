"use strict";

var normal = {
    totalSales: 0,
    wineSales: 0,
    ccTips: 0,
    transfers: 0,
    wineTransfers: 0,
    tippableSales: 0,
    tippableWineSales: 0
};

var autograt = {
    totalSales: 0,
    wineSales: 0,
    ccTips: 0,
    transfers: 0,
    wineTransfers: 0,
    tippableSales: 0,
    tippableWineSales: 0
};

var tipOutPercent = {
    normal: {
        bar: 1.25,
        runner: 1.675,
        somm: 3, // of wine sales only
        host: 0.5,
        barista: 0.75, // add $10 to normal side unless autograt only, then add to autograt
        backwaiter: 3.5 // add $4 to normal side unless autograt only, then add to autograt
    },
    autograt: {
        bar: 1,
        runner: 1.425,
        somm: 3, // of wine sales only
        host: 0.5,
        barista: 0.5,
        backwaiter: 3.25,
        house: 2
    }
};

var calculationsNormal = {
    declared: 0,
    bar: 0,
    runner: 0,
    somm: 0,
    host: 0,
    barista: 0,
    backwaiter: 0
};

var calculationsAutoGrat = {
    declared: 0,
    bar: 0,
    runner: 0,
    somm: 0,
    host: 0,
    barista: 0,
    backwaiter: 0
};

// Normal Side Data

$("#normaltotalsales").keyup(function () {
    normal.totalSales = Number($("#normaltotalsales").val());
});

$("#normalwinesales").keyup(function () {
    normal.wineSales = Number($("#normalwinesales").val());
});

$("#normalcctips").keyup(function () {
    normal.ccTips = Number($("#normalcctips").val());
});

$("#normaltransfers").keyup(function () {
    normal.transfers = Number($("#normaltransfers").val());
});

$("#normalwinetransfers").keyup(function () {
    normal.wineTransfers = Number($("#normalwinetransfers").val());
});

// Autograt Side Data

$("#autograttotalsales").keyup(function () {
    autograt.totalSales = Number($("#autograttotalsales").val());
});

$("#autogratwinesales").keyup(function () {
    autograt.wineSales = Number($("#autogratwinesales").val());
});

$("#autogratcctips").keyup(function () {
    autograt.ccTips = Number($("#autogratcctips").val());
});

$("#autograttransfers").keyup(function () {
    autograt.transfers = Number($("#autograttransfers").val());
});

$("#autogratwinetransfers").keyup(function () {
    autograt.wineTransfers = Number($("#autogratwinetransfers").val());
});

// Calculations

function calculateTippableSales(total, transfers) {
    return (total - transfers);
}

function calculateTipOut(sales, percent){
    return (Math.ceil(sales * percent) /100).toFixed(2);
}

$("#salesinfo").keyup(function () {
    normal.tippableSales = calculateTippableSales(normal.totalSales, normal.transfers);
    normal.tippableWineSales = calculateTippableSales(normal.wineSales, normal.wineTransfers);
    autograt.tippableSales = calculateTippableSales(autograt.totalSales, autograt.transfers);
    autograt.tippableWineSales = calculateTippableSales(autograt.wineSales, autograt.wineTransfers);
    
    
    // Filing in Calculations
    document.getElementById("normalhousefee").value = 0;
    // document.getElementById("autograthousefee").value = (Math.ceil(autograt.tippableSales * tipOutPercent.autograt.house) / 100).toFixed(2);

    document.getElementById("autograthousefee").value = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.house);
    document.getElementById("normalbar").value = calculateTipOut(normal.tippableSales, tipOutPercent.normal.bar);
    document.getElementById("autogratbar").value = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.bar);
    document.getElementById("normalrunner").value = calculateTipOut(normal.tippableSales, tipOutPercent.normal.runner);
    document.getElementById("autogratrunner").value = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.runner);
    document.getElementById("normalsomm").value = calculateTipOut(normal.tippableWineSales, tipOutPercent.normal.somm);
    document.getElementById("autogratsomm").value = calculateTipOut(autograt.tippableWineSales, tipOutPercent.autograt.somm);
    document.getElementById("normalhost").value = calculateTipOut(normal.tippableSales, tipOutPercent.normal.host);
    document.getElementById("autograthost").value = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.host);
    document.getElementById("normalbarista").value = calculateTipOut(normal.tippableSales, tipOutPercent.normal.barista);
    document.getElementById("autogratbarista").value = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.barista);
    document.getElementById("normalbackwaiter").value = calculateTipOut(normal.tippableSales, tipOutPercent.normal.backwaiter);
    document.getElementById("autogratbackwaiter").value = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.backwaiter);
    
    // Math for the declared
    document.getElementById("normaldeclared").value = normal.ccTips - document.getElementById("normalbar").value - document.getElementById("normalrunner").value - document.getElementById("normalsomm").value - document.getElementById("normalhost").value - document.getElementById("normalbarista").value - document.getElementById("normalbackwaiter").value - document.getElementById("normalhousefee").value;

    document.getElementById("autogratdeclared").value = autograt.ccTips - document.getElementById("autogratbar").value - document.getElementById("autogratrunner").value - document.getElementById("autogratsomm").value - document.getElementById("autograthost").value - document.getElementById("autogratbarista").value - document.getElementById("autogratbackwaiter").value - document.getElementById("autograthousefee").value;
});

