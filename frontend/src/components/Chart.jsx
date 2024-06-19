import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Chart = ({ data }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr('width', 800)
            .attr('height', 400);

        svg.selectAll('*').remove(); // Clear the svg area

        // Set up chart dimensions
        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const width = +svg.attr('width') - margin.left - margin.right;
        const height = +svg.attr('height') - margin.top - margin.bottom;

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Define scales
        const x = d3.scaleBand()
            .rangeRound([0, width])
            .padding(0.1)
            .domain(data.map(d => d.year));

        const y = d3.scaleLinear()
            .rangeRound([height, 0])
            .domain([0, d3.max(data, d => d.intensity)]);

        // Create axes
        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x));

        g.append('g')
            .call(d3.axisLeft(y));

        // Create bars
        g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.year))
            .attr('y', d => y(d.intensity))
            .attr('width', x.bandwidth())
            .attr('height', d => height - y(d.intensity));
    }, [data]);

    return (
        <svg ref={ref}></svg>
    );
};

export default Chart;
