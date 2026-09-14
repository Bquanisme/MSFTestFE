import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-js-page',
  imports: [BaseChartDirective],
  templateUrl: './chart-js-page.html',
  styleUrl: './chart-js-page.css',
})
export class ChartJsPage {

  // =========================
  // SALE CHART
  // =========================
  public salesData: ChartData<'line'> = {
    labels: [
      'January',
      'February',  
      'March',
      'April',
      'May',
      'June'
    ],

    datasets: [
      {
        label: 'Sales',

        data: [
          12000,
          19000,
          15000,
          25000,
          22000,
          30000
        ],

        borderColor: '#26c1cc',
        backgroundColor: 'rgba(1, 182, 170, 0.12)',

        borderWidth: 3,

        pointRadius: 3,
        pointHoverRadius: 4,

        pointBorderWidth: 1,

        tension: 0.4,

        fill: true,
      }
    ],
  };

  public salesOptions: ChartOptions<'line'> = {
    responsive: true,

    maintainAspectRatio: false,

    interaction: {
      mode: 'index',
      intersect: false,
    },

    plugins: {
      // label
      legend: {
        position: 'top',

        labels: {
          // hình tròn
          // usePointStyle: true,
          // padding: 95,

          usePointStyle: false
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
        // Xuất phát từ 0
        // beginAtZero: true,

        title: {
          display: true,
          text: 'Sales ($)',
          font: {
            size: 12
          }
        },

        min: 12000,
        beginAtZero: false,

        ticks: {
          stepSize: 2000,
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
          text: 'Months',
          font: {
            size: 12
          }
        },
        grid: {
          color: '#e5e7eb',
          display: true,
        },
      },
    },
  };



  // =========================
  // TEAM CHART
  // =========================
  public teamData: ChartData<'bar'> = {
    labels: [
      'Developer',
      'Designer',  
      'Marketing',
      'Sales',
      'Support'
    ],

    datasets: [
      {
        label: 'Team Members',

        data: [
          12,
          8,
          6,
          9,
          5
        ],

        backgroundColor: [
          '#FF829D', // Developer - hồng
          '#5EB5EF', // Designer - xanh dương
          '#FFD878', // Marketing - vàng
          '#6FCDCD', // Sales - xanh ngọc
          '#AD85FF'  // Support - tím
        ],

        borderColor: [
          '#FF5C82',
          '#3FA3E8',
          '#FFC94D',
          '#4FC0C0',
          '#9465F5'
        ],
        
        borderWidth: 2,

        borderRadius: 5,
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
        position: 'top',

        labels: {
          // hình tròn
          // usePointStyle: true,
          // padding: 95,

          usePointStyle: false
        },
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;

            return `Team Members: ${value.toLocaleString()}`;
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          stepSize: 2,
          callback: (value) => {
            return `${Number(value).toLocaleString()}`;
          },
        },

        grid: {
          display: true,
          lineWidth: 1,
          z: 1,
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },

    elements: {
      bar: {
        borderWidth: 1,
      },
    },
  };



  // =========================
  // BAR CHART
  // =========================
  public barData: ChartData<'bar'> = {
    labels: [
      'Red',
      'Blue',  
      'Yellow',
      'Green',
      'Purple',
      'Orange'
    ],

    datasets: [
      {
        label: 'Dataset',

        data: [
          12,
          19,
          3,
          5,
          2,
          3
        ],

        backgroundColor: [
          '#FFE0E6', // Red
          '#D7ECFB', // Blue
          '#fdf2d6', // Yellow
          '#DBF2F2', // Green
          '#EBE0FF', // Purple
          '#FFECD9'  // Orange
        ],

        borderColor: [
          '#FF829D',
          '#5EB5EF',
          '#fcce5b',
          '#6FCDCD',
          '#AD85FF',
          '#FFB66E'
        ],
        
        hoverBackgroundColor: [
          '#FFD5DD', // Red
          '#BFDFF5', // Blue
          '#F9E8B5', // Yellow
          '#BFE5E5', // Green
          '#DCCCF5', // Purple
          '#FFE1C5'  // Orange
        ],


        borderWidth: 1.2,
        

      }
    ],
  };

  public barOptions: ChartOptions<'bar'> = {
    responsive: true,

    maintainAspectRatio: false,

    interaction: {
      mode: 'index',
      intersect: false,
    },

    plugins: {
      // label
      legend: {
        position: 'top',

        labels: {
          // hình tròn
          // usePointStyle: true,
          // padding: 95,

          usePointStyle: false
        },
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;

            return `Dataset: ${value.toLocaleString()}`;
          },
        },
      },
    },

    scales: {
      y: {
        // Xuất phát từ 0
        beginAtZero: true,

        // min: 12000,
        // beginAtZero: false,

        ticks: {
          stepSize: 2,
          callback: (value) => {
            return `${Number(value).toLocaleString()}`;
          },
        },

        grid: {
          display: true,
          lineWidth: 1,
          z: 1
        },
      },

      x: {
        grid: {
          display: true,
        },
      },
    },
  };




  // =========================
  // RADAR CHART
  // =========================
  public radarData: ChartData<'radar'> = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling'
    ],

    datasets: [
      {
        label: 'My First Dataset',

        data: [
          65,
          59,
          90,
          81,
          56,
          55
        ],

        
        backgroundColor: 'rgba(255, 99, 132, 0.2)',

        borderColor: 'rgb(255, 99, 132)',

        pointBackgroundColor: 'rgb(255, 99, 132)',

        pointBorderColor: 'rgb(255, 99, 132)',

        pointHoverBackgroundColor: 'rgb(255, 99, 132)',

        borderWidth: 1,
        

      }
    ],
  };

  public radarOptions: ChartOptions<'radar'> = {
    responsive: true,

    maintainAspectRatio: false,

    // interaction: {
    //   mode: 'index',
    //   intersect: false,
    // },

    plugins: {
      // label
      legend: {
        position: 'top',

        labels: {
          // hình tròn
          // usePointStyle: true,
          // padding: 95,

          usePointStyle: false
        },
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;

            return `My First Dataset: ${value.toLocaleString()}`;
          },
        },
      },
    },
  };





  // =========================
  // LINE CHART
  // =========================
  public lineData: ChartData<'line'> = {
    labels: [
      'January',
      'February',  
      'March',
      'April',
      'May',
      'June',
      'July'
    ],

    datasets: [
      {
        label: 'My Dataset',

        data: [
          65,
          59,
          80,
          81,
          56,
          55,
          40
        ],

        borderColor: '#26c1cc',

        borderWidth: 3,

        pointRadius: 3,
        pointHoverRadius: 4,

        pointBorderWidth: 1,

        tension: 0.1,

        //có background cho phần sơ đồ
        // fill: true,

        fill: false,
      }
    ],
  };

  public lineOptions: ChartOptions<'line'> = {
    responsive: true,

    maintainAspectRatio: false,

    interaction: {
      mode: 'index',
      intersect: false,
    },

    plugins: {
      // label
      legend: {
        position: 'top',

        labels: {
          // hình tròn
          // usePointStyle: true,
          // padding: 95,

          usePointStyle: false
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
        // Xuất phát từ 0
        // beginAtZero: true,

        min: 40,
        beginAtZero: false,

        ticks: {
          stepSize: 5,

          maxTicksLimit: 6,
          callback: (value) => {
            return `${Number(value).toLocaleString()}`;
          },
        },

        grid: {
          color: '#e5e7eb',
        },
      },

      x: {
        grid: {
          color: '#e5e7eb',
          display: true,
        },
      },
    },
  };


  // =========================
  // DOUGHNUT CHART
  // =========================

  public doughnutData: ChartData<'doughnut'> = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],

    datasets: [
      {
        label: 'My Dataset',

        data: [
          300,
          50,
          100
        ],

        backgroundColor: [
          '#FF6384', // Red
          '#36A2EB', // Blue
          '#FFCE56'  // Yellow
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
        display: true,

        position: 'top',


        labels: {
          usePointStyle: false
        },
      },
    },
  };



  // =========================
  // PIE CHART
  // =========================

  public teamPieData: ChartData<'pie'> = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],

    datasets: [
      {
        label: 'Dataset',

        data: [
          300,
          50,
          100
        ],

        backgroundColor: [
          '#FF6384', // Red
          '#36A2EB', // Blue
          '#FFCE56'  // Yellow
        ],

        borderColor: '#ffffff',
        borderWidth: 2,

        hoverOffset: 8
      }
    ]
  };

  public teamPieOptions: ChartOptions<'pie'> = {
    responsive: true,

    maintainAspectRatio: false,
    

    plugins: {
      legend: {
        position: 'top',

        labels: {
          usePointStyle: false,

        //   padding: 20,

        //   boxWidth: 15,
        //   boxHeight: 15
        }
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;

            return `${context.label}: ${value}`;
          }
        }
      }
    }
  };



  // =========================
  // POLAR CHART
  // =========================

  public polarData: ChartData<'polarArea'> = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],

    datasets: [
      {
        label: 'Dataset',

        data: [11, 16, 7, 3, 14],

        // Màu nền nhạt giống hình
        backgroundColor: [
          'rgba(255, 99, 132, 0.20)',   // Red
          'rgba(75, 192, 192, 0.20)',   // Green
          'rgba(255, 206, 86, 0.20)',   // Yellow
          'rgba(201, 203, 207, 0.20)',  // Grey
          'rgba(54, 162, 235, 0.20)'    // Blue
        ],

        // Border theo đúng màu của từng phần
        borderColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#C9CBCF',
          '#36A2EB'
        ],

        borderWidth: 1,

        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.30)',
          'rgba(75, 192, 192, 0.30)',
          'rgba(255, 206, 86, 0.30)',
          'rgba(201, 203, 207, 0.30)',
          'rgba(54, 162, 235, 0.30)'
        ]
      }
    ]
  };

  public polarOptions: ChartOptions<'polarArea'> = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: 'top',

        labels: {
          usePointStyle: false,

          font: {
            size: 12
          }
        }
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;

            return `${context.label}: ${value}`;
          }
        }
      }
    },

    scales: {
      r: {
        beginAtZero: true,

        min: 0,
        max: 20,

        ticks: {
          stepSize: 5,

          color: '#666',
          font: {
            size: 12
          },

          backdropColor: 'transparent'
        },

        grid: {
          color: '#e5e5e5',
          lineWidth: 1
        },

        pointLabels: {
          color: '#666',
          font: {
            size: 12
          }
        }
      }
    }
  };




  // =========================
  // BAR CHART
  // =========================
  public singleBarData: ChartData<'bar'> = {
    labels: [
      'January',
      'February',  
      'March',
      'April',
      'May',
      'June',
      'July'
    ],

    datasets: [
      {
        label: 'Dataset',

        data: [
          65,
          59,
          80,
          81,
          56,
          55,
          40
        ],

        backgroundColor: [
          '#D7ECFB',
        ],

        borderColor: [
          '#4baff1'
        ],

        hoverBackgroundColor: [
          '#d1eeff', 
        ],

        borderWidth: 1.3,
      }
    ],
  };

  public singleBarOptions: ChartOptions<'bar'> = {
    responsive: true,

    maintainAspectRatio: false,

    interaction: {
      mode: 'index',
      intersect: false,
    },

    plugins: {
      // label
      legend: {
        labels: {
          color: 'transparent',
          boxWidth: 0,
          boxHeight: 0
        }
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;

            return `Dataset: ${value.toLocaleString()}`;
          },
        },
      },
    },

    scales: {
      y: {
        // Xuất phát từ 0
        beginAtZero: true,

        // min: 12000,
        // beginAtZero: false,

        ticks: {
          stepSize: 10,
          callback: (value) => {
            return `${Number(value).toLocaleString()}`;
          },
        },

        grid: {
          display: true,
          z: 1
        },
      },

      x: {
        grid: {
          color: '#e5e7eb',
          display: true,
        },
      },
    },
  };

}
