import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const PieGraph = () => {
  const pieChartData = {
    labels: ["Appetizer", "Salad", "Main Course", "Italian", "Dessert", "Beverage", "Cocktail"],
    datasets: [
      {
        label: "Best Sales",
        data: [290, 6, 20, 10, 15, 17, 280],
        backgroundColor: [
          "#CC0000",
          "rgb(65, 117, 151)",
          "rgb(172, 160, 59)",
          "rgb(65, 167, 82)",
          "rgb(70, 52, 151)",
          "rgb(97, 94, 94)",
          "rgb(255, 255, 255)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgb(87, 95, 212)",
          "rgb(0, 0, 0)",
          "rgb(255, 255, 255)"
        ],
        borderWidth: 1,
        hoverOffset: 4,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="pieChartGraphSection">
      <Pie className="pieChartGraphInnerSection" data={pieChartData} options={options}/>
    </div>
  );
};

export default PieGraph;
