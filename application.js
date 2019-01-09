$('document').ready(function() {

  //set dimensions for the canvis the graph will be on
  var svgWidth = 100, svgHeight = 300;
  var margin = { top: 10, right: 10, bottom: 10, left: 10 };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;

  var svg = d3.select('div.nav')
    .append("svg")
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .style("border", "1px solid black")
    .attr('class', 'nav');

  svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("class", "navBackground")
    .attr("opacity", .4)
    .attr("fill", "gray");

  var g = svg.append("g")
    .attr("class", "homeButton");

  g.append("rect")
    .attr("height", 18)
    .attr("width", width)
    .attr("stroke", "black")
    .attr("class", "navHomeBackground")
    .attr("fill", "pink")
    .attr("opacity", .6)
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
      
  g.append("text")
    .attr("y", 18)
    .attr('transform', 'translate(' + (margin.left*2) + ', ' + (margin.top-2) + ')')
    .text("HOME")
    .attr("fill", "black");

  g.append("a")
    .attr("xlink:href", "home.html")
    .append("rect")
      .attr("height", 18)
      .attr("width", width)
      .attr("opacity", 0)
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
      .on('mouseover', function(d){
        return changeFill(".navHomeBackground", "orange");
      })
      .on('mouseout', function(d){
        return changeFill(".navHomeBackground", "pink");
      })
      .on("click", click);



  function changeFill(selection, color){
    sel = d3.select(selection);
    sel.attr("fill", color);
  }

  function click(){

  }
});