import { Component } from '@angular/core';
import { Breadcrumb } from '../../../components/breadcrumb/breadcrumb';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-vector-map-page',
  imports: [Breadcrumb, BaseChartDirective],
  templateUrl: './vector-map-page.html',
  styleUrl: './vector-map-page.css',
})
export class VectorMapPage {

  public teamData: ChartData<'bar'> = {
      labels: [
        'North America',
        'Europe',  
        'Asia Pasific',
        'Latin America',
        'Africa',
        'Middle East'
      ],
  
      datasets: [
        {
          label: 'Revenue',
  
          data: [
            450,
            320,
            280,
            150,
            75,
            95
          ],
  
          backgroundColor: [
            '#5EB5EF', 
            '#FF829D',
            '#FFD878',
            '#6FCDCD',
            '#AD85FF',
            '#FFB66E'
          ],
  
          borderColor: [
            '#3FA3E8',
            '#FF5C82',
            '#FFC94D',
            '#4FC0C0',
            '#9465F5',
            '#fda955'
          ],
          
          borderWidth: 1,
  
          borderRadius: {
            topLeft: 4,
            topRight: 4,
            bottomLeft: 0,
            bottomRight: 0,
          },
          
          borderSkipped: false,
  
        }
      ],
  };

  public teamOptions: ChartOptions<'bar'> = {
    responsive: true,

    maintainAspectRatio: false,

    interaction: {
      mode: 'index',
      intersect: false,
    },

    plugins: {
      // label
      legend: {
        display: false
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;

            return `Revenue ($K): ${value.toLocaleString()}`;
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          stepSize: 50,
          callback: (value) => {
            return `$${Number(value).toLocaleString()}K`;
          },
        },

        grid: {
          display: true,
          lineWidth: 0.8,
          z: 1,
        },
      },

      x: {
        grid: {
          display: true,
          lineWidth: 0.8,
        },
      },
    },

    elements: {
      bar: {
        borderWidth: 1,
      },
    },
  };


  public trafficData: ChartData<'line'> = {
    labels: [
      '00:00',
      '04:00',
      '08:00',
      '12:00',
      '16:00',
      '20:00',
      '24:00'
    ],

    datasets: [
      {
        label: 'North America',

        data: [
          1200, 
          900,
          1500,
          2800,
          2400,
          2100,
          1500
        ],

        borderColor: '#007BFF',
        backgroundColor: 'rgba(0, 123, 255, 0.09)',

        borderWidth: 3,

        pointRadius: 3,
        pointHoverRadius: 4,

        pointBorderWidth: 1,

        tension: 0.4,

        fill: true,
      },

      {
        label: 'Europe',

        data: [
          800,
          1200,
          2100,
          2400,
          1800,
          1500,
          1000
        ],

        borderColor: '#28A745',
        backgroundColor: 'rgba(40, 167, 70, 0.1)',

        borderWidth: 3,

        pointRadius: 3,
        pointHoverRadius: 4,

        pointBorderWidth: 1,

        tension: 0.4,

        fill: true,
      },

      {
        label: 'Asia',

        data: [
          2100,
          2400,
          1800,
          1500,
          1800,
          2400,
          2200
        ],

        borderColor: '#FFC107',
        backgroundColor: 'rgba(255, 193, 7, 0.1)',

        borderWidth: 3,

        pointRadius: 3,
        pointHoverRadius: 4,

        pointBorderWidth: 1,

        tension: 0.4,

        fill: true,
      },
    ],
  };

  public trafficOptions: ChartOptions<'line'> = {
    responsive: true,

    maintainAspectRatio: false,

    interaction: {
      mode: 'index',
      intersect: false,
    },

    plugins: {
      title: {
        display: true,
        text: 'Traffic Density by Region (24h)',
        position: 'top',
        font: {
          size: 12,
          weight: 700
        }
      },
      legend: {
        position: 'bottom',

        labels: {
          usePointStyle: false,
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

        title: {
          display: true,
          text: 'Active Users',
          font: {
            size: 12
          }
        },

        ticks: {
          stepSize: 500,
          callback: (value) => {
            return `${Number(value).toLocaleString()}`;
          },
        },

        grid: {
          color: '#e5e7eb',
        },
      },

      x: {
        title: {
          display: true,
          text: 'Time (UTC)',
          font: {
            size: 12
          }
        },
        grid: {
          display: true,
          lineWidth: 1,
        },
      },
    },
  };


  public doughnutData: ChartData<'doughnut'> = {
    labels: [
      'Organic',
      'Direct',
      'Social',
      'Referral',
      'Email'
    ],

    datasets: [
      {
        // label: 'My Dataset',

        data: [
          45,
          25,
          15,
          10,
          5
        ],

        backgroundColor: [
          '#26A844', // Organic
          '#007BFF', // Direct
          '#FD7E14', // Social
          '#6610F2', // Referral
          '#20C997'  // Email
        ],

        borderWidth: 2,

        hoverOffset: 3,
      },
    ],
  };

  public doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,

    maintainAspectRatio: false,

    // độ dày của hình tròn, càng thấp càng dày
    cutout: '50%',

    plugins: {
      legend: {
        position: 'bottom',

        labels: {
          usePointStyle: true,
          padding: 15,
        },
      
        display: true,

      },
    },
  };
}
