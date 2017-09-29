"use strict";

var normal = {
    totalSales: 0,
    wineSales: 0,
    ccTips: 0,
    transfers: 0,
    wineTransfers: 0
};

var autograt = {
    totalSales: 0,
    wineSales: 0,
    ccTips: 0,
    transfers: 0,
    wineTransfers: 0
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

