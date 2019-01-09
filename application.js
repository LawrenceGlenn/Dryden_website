$('document').ready(function() {

  //set dimensions for the canvis the graph will be on
  var svgWidth = 100, svgHeight = 500;
  var margin = { top: 20, right: 20, bottom: 20, left: 20 };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;

  var svg = d3.select('div.nav')
    .append("svg")
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .style("border", "1px solid black")
    .attr('class', 'nav');

   var g = svg.append("g")
      .attr("class", "homeButton");
    var link = g.append("a").attr("xlink:href", "link.html");

   link.append("rect")
      .attr("height", 18)
      .attr("width", width)
      .attr("stroke", "black")
      .attr("fill", "pink")
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
      .on('mouseover', over)
      .on('mouseout', out)
      .on("click", click)
      
      link.append("text")
      .attr("y", 18)
      .attr('transform', 'translate(' + (margin.left+2) + ', ' + (margin.top-2) + ')')
      .text("HOME")
      .attr("fill", "black");




  function over(){

  }

  function out(){

  }

  function click(){

  }
});