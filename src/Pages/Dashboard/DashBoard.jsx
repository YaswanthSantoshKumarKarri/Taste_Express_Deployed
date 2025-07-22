import React from 'react';
import Pie from '../../Components/Charts/PieGraph';
import Line from '../../Components/Charts/LineGraph';
import './DashBoard.css';

const DashBoard = () => {
  const lineChartData = [
    {
      title: 'Orders',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Orders',
            data: [400, 300, 350, 600, 460, 220, 350],
            borderColor: '#CC0000',
            fill: false,
          },
        ],
      },
    },
    {
      title: 'Customers',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Customers',
            data: [450, 650, 500, 780, 820, 280, 360],
            borderColor: '#fff',
            fill: false,
          },
        ],
      },
    },
    {
      title: 'Reviews',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Reviews',
            data: [380, 420, 640, 250, 570, 670, 440],
            borderColor: '#CC0000',
            fill: false,
          },
        ],
      },
    },
    {
      title: 'WeeklyDifference',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Current-week',
            data: [3000, 7000, 5000, 6000, 7000, 3000, 6000],
            borderColor: '#CC0000',
            fill: false,
          },
          {
            label: 'Previous-week',
            data: [2000, 5000, 3000, 6000, 9000, 4000, 5000],
            borderColor: '#fff',
            fill: false,
          },
        ],
      },
    },
  ];

  return (
    <div className="DashboardMainSection">
      <h1>DashBoard</h1>
      <div className="CardsOfCharts">
        {lineChartData.slice(0, 3).map((chart, index) => (
          <div className="ChartCard" key={index}>
            <Line lineChartData={chart.data} />
          </div>
        ))}
      </div>
      <div className="bestSellersMainSection">
        <h2>Best Sellers</h2>
        <div className="bestSellerSection">
          <div className="pieCard">
            <Pie />
          </div>
          <div className="topThreeSellers">
            <Line lineChartData={lineChartData[3].data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
