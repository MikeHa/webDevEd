"use strict";

var normal = {
  // initial normal sales values
  totalSales: 0,
  wineSales: 0,
  ccTips: 0,
  transfers: 0,
  wineTransfers: 0,
  tippableSales: 0,
  tippableWineSales: 0,
  backwaiterBump: 0
};

var autograt = {
  // initial autograt sales values
  totalSales: 0,
  wineSales: 0,
  ccTips: 0,
  transfers: 0,
  wineTransfers: 0,
  tippableSales: 0,
  tippableWineSales: 0,
  backwaiterBump: 0
};

var tipOutPercent = {
  // restaurant-determined tip percentages
  normal: {
    bar: 1.25,
    runner: 1.675,
    somm: 3, // of wine sales only
    host: 0.5,
    barista: 0.75,
    backwaiter: 3.5
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

var extraTip = {
  // baristas and backwaiters get additional fixed tips on one side
  barista: 10,
  backwaiter: 4
};

var calculationsNormal = {
  // initial calculated values for NonAutoGrat side
  declared: 0,
  bar: 0,
  runner: 0,
  somm: 0,
  host: 0,
  barista: 0,
  backwaiter: 0
};

var calculationsAutoGrat = {
  // initial calcuated values for AutoGrat side
  declared: 0,
  bar: 0,
  runner: 0,
  somm: 0,
  host: 0,
  barista: 0,
  backwaiter: 0
};

// Calculations
function calculateTippableSales(total, transfers) {
  return total - transfers;
}

function calculateTipOut(sales, percent) {
  return (Math.ceil(sales * percent) / 100).toFixed(2);
}

function num(id) {
  // get number value from id
  return Number($(id).val());
}

function getNum(id){
  return document.getElementById(id).innerHTML;
}

// Additional tips for Barista and Backwaiters fixed normal side.  If no fixed sales for the day, apply to autograt side.
function extraFixedBarista() {
  var normalBarista = getNum("normalbarista");
  var autoBarista = getNum("autogratbarista");
  if (normalBarista > 0) {
    document.getElementById("normalbarista").innerHTML = (Number(normalBarista) + extraTip.barista).toFixed(2);
  } else if (autoBarista > 0) {
    document.getElementById("autogratbarista").innerHTML = (Number(autoBarista) + extraTip.barista).toFixed(2);
  }
}

function extraFixedBackwaiter() {
  var normalBW = getNum("normalbackwaiter");
  var autoBW = getNum("autogratbackwaiter");
  if (normalBW > 0) {
    document.getElementById("normalbackwaiter").innerHTML = (Number(normalBW) + extraTip.backwaiter).toFixed(2);
  } else if (autoBW > 0) {
    document.getElementById("autogratbackwaiter").innerHTML = (Number(autoBW) + extraTip.backwaiter).toFixed(2);
  }
}

// Calculations
function calculateAll() {
  //Data
  normal.totalSales = num("#normaltotalsales");
  normal.wineSales = num("#normalwinesales");
  normal.ccTips = num("#normalcctips");
  normal.transfers = num("#normaltransfers");
  normal.wineTransfers = num("#normalwinetransfers");
  autograt.totalSales = num("#autograttotalsales");
  autograt.wineSales = num("#autogratwinesales");
  autograt.ccTips = num("#autogratcctips");
  autograt.transfers = num("#autograttransfers");
  autograt.wineTransfers = num("#autogratwinetransfers");
  normal.backwaiterBump = num("#normalbackwaiterbump");
  autograt.backwaiterBump = num("#autogratbackwaiterbump");
  normal.tippableSales = calculateTippableSales(normal.totalSales, normal.transfers);
  normal.tippableWineSales = calculateTippableSales(normal.wineSales,normal.wineTransfers);
  autograt.tippableSales = calculateTippableSales(autograt.totalSales, autograt.transfers);
  autograt.tippableWineSales = calculateTippableSales(autograt.wineSales, autograt.wineTransfers);

  // Filing in Calculations
  document.getElementById("normalhousefee").innerHTML = "N/A";
  document.getElementById("autograthousefee").innerHTML = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.house);
  document.getElementById("normalbar").innerHTML = calculateTipOut(normal.tippableSales, tipOutPercent.normal.bar);
  document.getElementById("autogratbar").innerHTML = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.bar);
  document.getElementById("normalrunner").innerHTML = calculateTipOut(normal.tippableSales, tipOutPercent.normal.runner);
  document.getElementById("autogratrunner").innerHTML = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.runner);
  document.getElementById("normalsomm").innerHTML = calculateTipOut(normal.tippableWineSales, tipOutPercent.normal.somm);
  document.getElementById("autogratsomm").innerHTML = calculateTipOut(autograt.tippableWineSales, tipOutPercent.autograt.somm);
  document.getElementById("normalhost").innerHTML = calculateTipOut(normal.tippableSales, tipOutPercent.normal.host);
  document.getElementById("autograthost").innerHTML = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.host);
  document.getElementById("normalbarista").innerHTML = calculateTipOut(normal.tippableSales,tipOutPercent.normal.barista);
  document.getElementById("autogratbarista").innerHTML = calculateTipOut(autograt.tippableSales,tipOutPercent.autograt.barista);
  document.getElementById("normalbackwaiter").innerHTML = Number(calculateTipOut(normal.tippableSales, tipOutPercent.normal.backwaiter)) + Number(normal.backwaiterBump);
  document.getElementById("autogratbackwaiter").innerHTML = (Number(calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.backwaiter)) + Number(autograt.backwaiterBump)).toFixed(2);

  // Extra Fixed Tips
  extraFixedBarista();
  extraFixedBackwaiter();

  // Math for the declared
  function get(name) {
    return document.getElementById(name).innerHTML;
  }
  
  var subPosition = ["bar", "runner", "somm", "host", "barista", "backwaiter", "autograthousefee"];
  
  document.getElementById("normaldeclared").innerHTML = (normal.ccTips -
   get("normalbar") - get("normalrunner") - get("normalsomm") - get("normalhost") - get("normalbarista") - get("normalbackwaiter")).toFixed(2);
  
  document.getElementById("autogratdeclared").innerHTML = (autograt.ccTips -
  get("autogratbar") - get("autogratrunner") - get("autogratsomm") - get("autograthost") - get("autogratbarista") - get("autogratbackwaiter") - get("autograthousefee")).toFixed(2);

}

// Calculate Event
$(".calculate").on('click touchstart', function() {
  calculateAll();
})

$("input").on("keydown", function(e) {
  if (e.which == 13) {
    calculateAll();
  }})