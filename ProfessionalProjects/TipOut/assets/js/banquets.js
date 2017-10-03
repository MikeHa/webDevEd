"use strict";

var autograt = {
  // initial values
  // totalSales: 0,
  // wineSales: 0,
  // ccTips: 0,
  // transfers: 0,
  // wineTransfers: 0,
  // tippableSales: 0,
  // tippableWineSales: 0,
  // backwaiterBump: 0
};

var tipOutPercent = {
    declared: 9,
    house: 2,
    somm: 3,
    bw: 2.75,
    banquet: 3
};

var calculationsAutoGrat = {
  // initial calcuated values for AutoGrat side
  // declared: 0,
  // bar: 0,
  // runner: 0,
  // somm: 0,
  // host: 0,
  // barista: 0,
  // backwaiter: 0
  // banquet: 0
};

var barTransferPercent = 0.09;


// Calculations
function calculateTippableSales(total, transfers) {
  return total - transfers;
}

function calculateTipOut(sales, percent) {
  return (Math.ceil(sales * percent) / 100).toFixed(2);
}

// get integer value from id
function num(id) {
  return Number($(id).val());
}

// get number value HTML
function getNum(id) {
  return document.getElementById(id).innerHTML;
}

// Declared Calculations
function get(name) {
  return document.getElementById(name).innerHTML;
}

// Calculations
function calculateAll() {
  // Data
  autograt.totalSales = num("#autograttotalsales");
  autograt.wineSales = num("#autogratwinesales");
  autograt.ccTips = num("#autogratcctips");
  autograt.transfers = num("#autograttransfers");
  autograt.wineTransfers = num("#autogratwinetransfers");
  autograt.backwaiterBump = num("#autogratbackwaiterbump");
  // Tippable Sales
  autograt.tippableSales = calculateTippableSales(autograt.totalSales, autograt.transfers);
  autograt.tippableWineSales = calculateTippableSales(autograt.wineSales, autograt.wineTransfers);
  // Binding Data to span
  document.getElementById("autogratdeclared").innerHTML = calculateTipOut(autograt.tippableSales, tipOutPercent.declared);
  document.getElementById("autograthousefee").innerHTML = calculateTipOut(autograt.tippableSales, tipOutPercent.house);
  document.getElementById("autogratsomm").innerHTML = calculateTipOut(autograt.tippableWineSales, tipOutPercent.somm);
  document.getElementById("autogratbackwaiter").innerHTML = calculateTipOut(autograt.tippableSales, tipOutPercent.bw);
  document.getElementById("autogratbanquet").innerHTML = calculateTipOut(autograt.tippableSales, tipOutPercent.banquet);
  
  var barTransferTip = (autograt.transfers * barTransferPercent);
  var remainder = Number((autograt.ccTips - get("autogratdeclared") - get("autograthousefee") - get("autogratsomm") - get("autogratbackwaiter") - get("autogratbanquet")) - Number(barTransferTip).toFixed(2));

  // Binding Data to span
  document.getElementById("autogratbar").innerHTML = ((Number(remainder * 0.28)) + Number(barTransferTip)).toFixed(2);
  document.getElementById("autogratrunner").innerHTML = (remainder * 0.42).toFixed(2);
  document.getElementById("autograthost").innerHTML = (remainder * .15).toFixed(2);
  document.getElementById("autogratbarista").innerHTML = (remainder * .15).toFixed(2);
}

// Calculation onEvent
$(".calculate").on('click touchstart', function () {
  calculateAll();
  $("html,body").animate({
    scrollTop: $("#results").offset().top
  },
    'slow');
})

$("input").on("keydown", function (e) {
  if (e.which == 13) {
    calculateAll();
  }
})

// Disable Pinch to Zoom on Mobile devices
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});