$('document').ready(function() {



  d3.select("body").on("click",function(){
    var pg = d3.selectAll("rect");
    var outside = pg.filter(equalToEventTarget).empty();
    if (outside) {
      d3.select("rect.internalPageDisplay").attr("opacity", 0);
    }
  });

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




  var svg = d3.select('div.page')
    .append("svg")
    .style('transform', 'translate(20%, 20%)')
    .attr('width', 500)
    .attr('height', 500)
    .attr('class', 'page');



  var g = svg.append("g")
    .attr("class", "internalPage");

  g.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("class", "internalPageDisplay")
    .attr("opacity", 0)
    .attr("fill", "gray");


  function changeFill(selection, color){
    sel = d3.select(selection);
    sel.attr("fill", color);
  }

  function click(){
    back = d3.select("rect.internalPageDisplay");
    back.attr("opacity", 0.6);
  }


  function equalToEventTarget() {
    return this == d3.event.target;
  }


  function createNavButton(name, link, index){

  g = svg.append("g")
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

  g
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
      })
      .on('click', function(d){
        return click();
      });

  }
});