var w = 800;
var h = 450;
var data = [132,71,337,93,78,43,20,16,30,8,17,21];
var xScale = d3.scale.linear()
          .domain([0, d3.max(data)])
          .range([0, w]);
var yScale = d3.scale.linear()
          .domain([0, data.length])
          .range([0, h])
var svg = d3.select('body').append('svg')
            .attr('id', 'chart')
            .attr('width',w)
            .attr('height',h)

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

plot.call(svg,{
  data: data
})
