import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
  type ChartData,
} from 'chart.js';

import { Line, Doughnut } from 'react-chartjs-2';

import DownloadIcon from '@mui/icons-material/Download';

import '../../styles/chart/chart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

function DashboardCharts() {

  const salesData: ChartData<'line'> = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],

    datasets: [
      {
        label: 'Sales',

        data: [
          12500,
          15000,
          14500,
          18000,
          19500,
          22000,
          24500,
          23500,
          25000,
          26500,
          28000,
          29000,
        ],

        borderColor: '#03a9f4',
        backgroundColor: 'rgba(3, 169, 244, 0.12)',

        borderWidth: 2,

        pointRadius: 3,
        pointHoverRadius: 5,

        tension: 0.4, //đường cong mềm

        fill: true,
      },

      {
        label: 'Revenue',

        data: [
          8500,
          10000,
          9500,
          12500,
          13000,
          15000,
          17000,
          16500,
          17500,
          18200,
          19200,
          20000,
        ],

        borderColor: '#00c49a',
        backgroundColor: 'rgba(0, 196, 154, 0.12)',

        borderWidth: 2,

        pointRadius: 3,
        pointHoverRadius: 5,

        tension: 0.4,

        fill: true,
      },
    ],
  };

  const salesOptions: ChartOptions<'line'> = {
    responsive: true,

    maintainAspectRatio: false,

    interaction: {
      mode: 'index',
      intersect: false,
    },

    plugins: {
      legend: {
        position: 'bottom',

        labels: {
          usePointStyle: true,
          padding: 95,
        },
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;

            return `${context.dataset.label}: $${value.toLocaleString()}`;
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          callback: (value) => {
            return `$${Number(value).toLocaleString()}`;
          },
        },

        grid: {
          color: '#e5e7eb',
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const trafficData: ChartData<'doughnut'> = {
    labels: [
      'Direct',
      'Social',
      'Referral',
      'Organic',
      'Email'
    ],

    datasets: [
      {
        data: [
          35,
          25,
          20,
          15,
          5
        ],

        backgroundColor: [
          '#03a9f4',
          '#00c49a',
          '#ffb703',
          '#a30bf5',
          '#00c427'
        ],

        borderWidth: 0,

        hoverOffset: 5,
      },
    ],
  };

  const trafficOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,

    cutout: '65%',

    plugins: {
        legend: {
        display: true,
        position: 'bottom',

        labels: {
            usePointStyle: true,
            padding: 50,
        },
        },
    },
  };

  return (
    <div className="dashboard-charts">

      <div className="chart-card">

        <div className="chart-card-header">

          <h3>
            Sales Overview
          </h3>

          <button
            className="download-button"
            type="button"
          >
            <DownloadIcon />
          </button>

        </div>

        <div className="line-chart-container">
          <Line
            data={salesData}
            options={salesOptions}
          />
        </div>

      </div>



      <div className="chart-card traffic-chart-card">

        <div className="chart-card-header">

          <h3>
            Traffic Sources
          </h3>

        </div>

        <div className="doughnut-chart-container">
          <Doughnut
            data={trafficData}
            options={trafficOptions}
          />
        </div>

      </div>

    </div>
  );
}

export default DashboardCharts;