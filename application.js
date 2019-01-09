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

  createNavButton("home", "home.html", 0);

  createNavButton("about", "about.html", 1);

  createNavButton("music", "music.html", 2);

  createNavButton("contact", "contact.html", 3);


  function changeFill(selection, color){
    sel = d3.select(selection);
    sel.attr("fill", color);
  }

  function click(){

  }

  function createNavButton(name, link, index){

  var g = svg.append("g")
    .attr("class", name+"Button");

  g.append("rect")
    .attr("height", 18)
    .attr("width", width)
    .attr("stroke", "black")
    .attr("class", "nav"+name+"Background")
    .attr("fill", "pink")
    .attr("opacity", .6)
    .attr('transform', 'translate(' + margin.left + ', ' + (margin.top+(index*22)) + ')');
      
  g.append("text")
    .attr("y", 18)
    .attr('transform', 'translate(' + (margin.left*2) + ', ' + (margin.top-2+(index*22)) + ')')
    .text(name)
    .attr("fill", "black");

  g.append("a")
    .attr("xlink:href", link)
    .append("rect")
      .attr("height", 18)
      .attr("width", width)
      .attr("opacity", 0)
      .attr('transform', 'translate(' + margin.left + ', ' + (margin.top+(index*22)) + ')')
      .on('mouseover', function(d){
        return changeFill(".nav"+name+"Background", "orange");
      })
      .on('mouseout', function(d){
        return changeFill(".nav"+name+"Background", "pink");
      });

  }
});