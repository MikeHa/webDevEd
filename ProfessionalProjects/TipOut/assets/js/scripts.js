"use strict";

var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg", "img13.jpg",]; 
$("body").css({
  "background-image":
    "url(assets/img/" + images[Math.floor(Math.random() * images.length)] + ")"
});

var normal = {
  // initial values
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
  // initial values
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
  // predetermined percentages as whole numbers
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

  // baristas and backwaiters additional fixed dollar tips
var extraTip = {
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

var barTransferPercent = 0.15;


// Calculations
function calculateTippableSales(total, transfers) {
  return total - transfers;
}

function calculateTipOut(sales, percent) {
  return (Math.ceil(sales * percent) / 100).toFixed(2);
}

function calculateNormalBarTipOut() {
  return (Math.ceil(normal.transfers * barTransferPercent).toFixed(2));
}

function calculateAutoGratBarTipOut() {
  return (Math.ceil(autograt.transfers * barTransferPercent).toFixed(2));
}



// get integer value from id
function num(id) {
  return Number($(id).val());
}

// get number value HTML
function getNum(id){
  return document.getElementById(id).innerHTML;
}

// Additional tips for Barista and Backwaiters fixed normal side.  If no fixed sales for the day, apply to autograt side.
function extraFixedBarista() {
  var normalBarista = getNum("normalbarista");
  var autoBarista = getNum("autogratbarista");
  if (autoBarista > 0) {
    document.getElementById("autogratbarista").innerHTML = (Number(autoBarista) + extraTip.barista).toFixed(2);
  } else if (normalBarista > 0) {
    document.getElementById("normalbarista").innerHTML = (Number(normalBarista) + extraTip.barista).toFixed(2);
  }
}

function extraFixedBackwaiter() {
  var normalBW = getNum("normalbackwaiter");
  var autoBW = getNum("autogratbackwaiter");
  if (autoBW > 0) {
    document.getElementById("autogratbackwaiter").innerHTML = (Number(autoBW) + extraTip.backwaiter).toFixed(2);
  } else if (normalBW > 0) {
    document.getElementById("normalbackwaiter").innerHTML = (Number(normalBW) + extraTip.backwaiter).toFixed(2);
  } 
}

// Calculations
function calculateAll() {
  // Data
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

  // Binding Data to span
  document.getElementById("normalhousefee").innerHTML = "N/A";
  document.getElementById("autograthousefee").innerHTML = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.house);
  document.getElementById("normalbar").innerHTML = (Number(calculateTipOut(normal.tippableSales, tipOutPercent.normal.bar)) + Number(calculateNormalBarTipOut())).toFixed(2);
  document.getElementById("autogratbar").innerHTML = (Number(calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.bar)) + Number(calculateAutoGratBarTipOut())).toFixed(2)
  document.getElementById("normalrunner").innerHTML = calculateTipOut(normal.tippableSales, tipOutPercent.normal.runner);
  document.getElementById("autogratrunner").innerHTML = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.runner);
  document.getElementById("normalsomm").innerHTML = calculateTipOut(normal.tippableWineSales, tipOutPercent.normal.somm);
  document.getElementById("autogratsomm").innerHTML = calculateTipOut(autograt.tippableWineSales, tipOutPercent.autograt.somm);
  document.getElementById("normalhost").innerHTML = calculateTipOut(normal.tippableSales, tipOutPercent.normal.host);
  document.getElementById("autograthost").innerHTML = calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.host);
  document.getElementById("normalbarista").innerHTML = calculateTipOut(normal.tippableSales,tipOutPercent.normal.barista);
  document.getElementById("autogratbarista").innerHTML = calculateTipOut(autograt.tippableSales,tipOutPercent.autograt.barista);
  document.getElementById("normalbackwaiter").innerHTML = (Number(calculateTipOut(normal.tippableSales, tipOutPercent.normal.backwaiter)) + Number(normal.backwaiterBump)).toFixed(2);
  document.getElementById("autogratbackwaiter").innerHTML = (Number(calculateTipOut(autograt.tippableSales, tipOutPercent.autograt.backwaiter)) + Number(autograt.backwaiterBump)).toFixed(2);

  // Extra Fixed Tips for two departments
  extraFixedBarista();
  extraFixedBackwaiter();

  // Declared Calculations
  function get(name) {
    return document.getElementById(name).innerHTML;
  }
  
  document.getElementById("normaldeclared").innerHTML = (normal.ccTips -
    get("normalbar") - get("normalrunner") - get("normalsomm") - get("normalhost") - get("normalbarista") - get("normalbackwaiter")).toFixed(2);
  
  document.getElementById("autogratdeclared").innerHTML = (autograt.ccTips -
    get("autogratbar") - get("autogratrunner") - get("autogratsomm") - get("autograthost") - get("autogratbarista") - get("autogratbackwaiter") - get("autograthousefee")).toFixed(2);

}

// Calculation onEvent
$(".calculate").on('click touchstart', function() {
  calculateAll();
  $("html,body").animate({ scrollTop: $("#results").offset().top }, "slow");
})

$("input").on("keydown", function(e) {
  if (e.which == 13) {
    calculateAll();
    $("html,body").animate({ scrollTop: $("#results").offset().top }, "slow");
  }
})

$("#twoserver").on("click touchstart", function() {
  tipOutPercent.normal.backwaiter = 3.5;
  tipOutPercent.autograt.backwaiter = 3.25;
  calculateAll();
});

$("#threeserver").on("click touchstart", function(){
  tipOutPercent.normal.backwaiter = 3;
  tipOutPercent.autograt.backwaiter = 2.75;
  calculateAll();
})

// Disable Pinch to Zoom on Mobile devices
document.addEventListener('gesturestart', function (e) { 
  e.preventDefault(); 
})