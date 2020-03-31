// @TODO: YOUR CODE HERE!

// margins and target size

var margin = {top: 30, right: 30, bottom: 30, left: 30};
var width = 800 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

// append to body at id scatter 

var svg = d3.select("#scatter")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// import csv and commence graphing

d3.csv("assets/data/data.csv", function(data) {
    // console.log(data);

// setup x-axis

    var xAxis = 

// setup y-axis

    var yAxis = 

// render scatter circles

    svg.append("g")
        .selectAll("dot")
        .data()
})


