// @TODO: YOUR CODE HERE!

// margins and target size

var margin = {top: 40, right: 30, bottom: 70, left: 50};
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

d3.csv("assets/data/data.csv").then(function(data) {
    console.log(data);

    data.forEach(function(d) {
        d.poverty = +d.poverty;
        d.obesity = +d.obesity;
    });
// setup x-axis

    var x = d3.scaleLinear()
        .domain([d3.min(data, function(d) { return d.poverty; }) - 2, 
            d3.max(data, function(d) { return d.poverty; }) + 2 ])
        .range([ 0, width ]);
    
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

// setup y-axis

    var y = d3.scaleLinear()
        .domain([d3.min(data, function(d) { return d.obesity; }) - 2, 
            d3.max(data, function(d) { return d.obesity; }) + 2 ])
        .range([ height, 0]);

    svg.append("g")
        .call(d3.axisLeft(y));

// render scatter circles

    svg.append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", function (d) { return x(d.poverty); } )
            .attr("cy", function (d) { return y(d.obesity); } )
            .attr("r", 18)
            .style("fill", "#69b3a2");
    svg.append("g")
        .selectAll("text")
        .data(data)
            .enter()
            .append("text")
            .attr("x", function (d) { return x(d.poverty) - 10; } )
            .attr("y", function (d) { return y(d.obesity) + 5; } )
            .text( d => d.abbr);

// axes labels

    svg.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top })`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .text("Poverty (%)");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2) )
        .attr("dy", "1em")
        .text("Obesity (%)")
                
});


