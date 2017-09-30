"use strict";

var normal = { // initial normal sales values
      totalSales: 0,
      wineSales: 0,
      ccTips: 0,
      transfers: 0,
      wineTransfers: 0,
      tippableSales: 0,
      tippableWineSales: 0,
      backwaiterBump: 0
};

var autograt = { // initial autograt sales values
      totalSales: 0,
      wineSales: 0,
      ccTips: 0,
      transfers: 0,
      wineTransfers: 0,
      tippableSales: 0,
      tippableWineSales: 0,
      backwaiterBump: 0
};

var tipOutPercent = { // restaurant-determined tip percentages
    normal: {
        bar: 1.25,
        runner: 1.675,
        somm: 3, // of wine sales only
        host: 0.5,
        barista: 0.75, 
        backwaiter: 3.5,
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

var extraTip = { // baristas and backwaiters get additional fixed tips on one side
      barista: 10,
      backwaiter: 4
};

var calculationsNormal = { // initial calculated values for NonAutoGrat side
      declared: 0,
      bar: 0,
      runner: 0,
      somm: 0,
      host: 0,
      barista: 0,
      backwaiter: 0
};

var calculationsAutoGrat = { // initial calcuated values for AutoGrat side
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

// Additional tips for Barista and Backwaiters fixed normal side.  If no fixed sales for the day, apply to autograt side.  Only if combined sales are over $1000
function extraFixedBarista() {
  if (document.getElementById("normalbarista").value > 0) {
    document.getElementById("normalbarista").value = (Number(document.getElementById("normalbarista").value) + extraTip.barista).toFixed(2);
  } else if (document.getElementById("autogratbarista").value > 0) {
    document.getElementById("autogratbarista").value = (Number(document.getElementById("autogratbarista").value) + extraTip.barista).toFixed(2);
  }
}

function extraFixedBackwaiter() {
  if (document.getElementById("normalbackwaiter").value > 0) {
    document.getElementById("normalbackwaiter").value = (Number(document.getElementById("normalbackwaiter").value) + extraTip.backwaiter).toFixed(2);
  } else if (document.getElementById("autogratbackwaiter").value > 0) {
    document.getElementById("autogratbackwaiter").value = (Number(document.getElementById("autogratbackwaiter").value) + extraTip.backwaiter).toFixed(2);
  }
}


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

$("body").keyup(function () {
  normal.tippableSales = calculateTippableSales(normal.totalSales, normal.transfers);
  normal.tippableWineSales = calculateTippableSales(normal.wineSales, normal.wineTransfers);
  autograt.tippableSales = calculateTippableSales(autograt.totalSales, autograt.transfers);
  autograt.tippableWineSales = calculateTippableSales(autograt.wineSales, autograt.wineTransfers);
  normal.backwaiterBump = Number($("#normalbackwaiterbump").val());
  autograt.backwaiterBump = Number($("#autogratbackwaiterbump").val());
  
  // Filing in Calculations
  document.getElementById("normalhousefee").value = 0;
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
  document.getElementById("normalbackwaiter").value = Number(calculateTipOut(normal.tippableSales, tipOutPercent.normal.backwaiter)) + Number(normal.backwaiterBump);
  document.getElementById("autogratbackwaiter").value = Number(calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.backwaiter)) + Number(autograt.backwaiterBump);
  
  // Extra Fixed Tips
  extraFixedBarista();
  extraFixedBackwaiter();

  // Math for the declared
  document.getElementById("normaldeclared").value = (normal.ccTips - document.getElementById("normalbar").value - document.getElementById("normalrunner").value - document.getElementById("normalsomm").value - document.getElementById("normalhost").value - document.getElementById("normalbarista").value - document.getElementById("normalbackwaiter").value - document.getElementById("normalhousefee").value).toFixed(2);
  document.getElementById("autogratdeclared").value = (autograt.ccTips - document.getElementById("autogratbar").value - document.getElementById("autogratrunner").value - document.getElementById("autogratsomm").value - document.getElementById("autograthost").value - document.getElementById("autogratbarista").value - document.getElementById("autogratbackwaiter").value - document.getElementById("autograthousefee").value).toFixed(2);
});