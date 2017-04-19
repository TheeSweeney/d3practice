var data = [
  {key: "Glazed",   value: 132},
  {key: "Jelly",    value: 71},
  {key: "Holes",    value: 337},
  {key: "Sprinkles",  value: 93},
  {key: "Crumb",    value: 78},
  {key: "Chocolate",  value: 43},
  {key: "Coconut",  value: 20},
  {key: "Cream",    value: 16},
  {key: "Cruller",  value: 30},
  {key: "Éclair",   value: 8},
  {key: "Fritter",  value: 17},
  {key: "Bearclaw",   value: 21}
];

var w = 800;
var h = 450;
var margin = {
  top:20,
  bottom:20,
  left:20,
  right:20
}
var width = w - margin.left - margin.left;
var height = h - margin.top - margin.bottom;

var xScale = d3.scale.linear()
          .domain([0, d3.max(data)])
          .range([0, width]);
var yScale = d3.scale.linear()
          .domain([0, data.length])
          .range([0, height])
var svg = d3.select('body').append('svg')
            .attr('id', 'chart')
            .attr('width',w)
            .attr('height',h)

var chart = svg.append('g')
            .classed('display', true)
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')


function plot(params){

  this.selectAll('.bar')
    .data(params.data)
    .enter()
      .append('rect')
      .classed('bar', true)
      .attr('x', 0)
      .attr('y', function(data, index){
        return yScale(index);
      })
      .attr('width', function(data, index){
          return xScale(data)
      })
      .attr('height', function(data, index){
        return yScale(1)-1;
      })

  this.selectAll('.bar-label')
    .data(params.data)
    .enter()
      .append('text')
      .classed('bar-label', true)
      .attr('x', function(d, i){
        return xScale(d);
      })
      .attr('dx', -4)
      .attr('y', function(data, index){
        return yScale(index);
      })
      .attr('dy', function(d, i){
        return yScale(1)/1.5+2
      })
      .text(function(d, i){
        return d
      });
}

plot.call(chart, {
  data: data
})
