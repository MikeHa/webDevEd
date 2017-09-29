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

var normalTipOutPercentages = {
    bar: 1.25,
    runner: 1.675,
    somm: 3, // of wine sales only
    host: 0.5,
    barista: 0.75, // add $10 to either normal side or autograt side | not both
    backwaiter: 3.5 // add $4 to either normal side or autograt side | not both
};

var calculationsNormal = {
    declared: 0,
    bar: 0,
    runner: 0,
    somm: 0,
    host: 0,
    barista: 0,
    bw: 0
};

var calculationsAutoGrat = {
    declared: 0,
    bar: 0,
    runner: 0,
    somm: 0,
    host: 0,
    barista: 0,
    bw: 0
};

// Collecting Data
// Normal Side
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

// Autograt Side
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

(function calculateTippableSales() {
    normal.tippableSales = normal.totalSales - normal.transfers;
    normal.tippableWineSales = normal.wineSales - normal.wineTransfers;
    autograt.tippableSales = autograt.totalSales - autograt.transfers;
    autograt.tippableWineSales = autograt.wineSales - autograt.wineTransfers;
}());

function calculateNormalResults() {
    calculationsNormal.bar = Math.ceil(normal.tippableSales * 125) / 10000;
    calculationsNormal.bar = Math.ceil(normal.tippableSales * 125) / 10000;
    calculationsNormal.bar = Math.ceil(normal.tippableSales * 125) / 10000;
    calculationsNormal.bar = Math.ceil(normal.tippableSales * 125) / 10000;
    calculationsNormal.bar = Math.ceil(normal.tippableSales * 125) / 10000;
    calculationsNormal.bar = Math.ceil(normal.tippableSales * 125) / 10000;
    calculationsNormal.bar = Math.ceil(normal.tippableSales * 125) / 10000;
}