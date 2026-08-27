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
      'Febuary',  
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

        borderColor: '#00c49a',
        backgroundColor: 'rgba(1, 182, 170, 0.12)',

        borderWidth: 2,

        pointRadius: 3,
        pointHoverRadius: 5,

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
        grid: {
          display: false,
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
          '#f75fbf', // Developer
          '#42a8e3', // Designer
          '#dfdc84', // Marketing
          '#78ff78', // Sales
          '#a561ed', // Support
        ],

        borderColor: [
          '#e80d98',
          '#0888d1',
          '#ded716',
          '#05f905',
          '#7e0cf7',
        ],

        borderRadius: 5,

        borderWidth: 2,
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
          13,
          19,
          3,
          5,
          2,
          3
        ],

        backgroundColor: [
          'rgba(255, 122, 122, 0.35)',
          'rgba(140, 226, 255, 0.35)',
          'rgba(223, 222, 132, 0.35)',
          'rgba(134, 255, 120, 0.35)',
          'rgba(192, 13, 232, 0.35)',
          'rgba(232, 119, 13, 0.35)'
        ],

        borderColor: [
          '#e80d98',
          '#0888d1',
          '#ded716',
          '#05f905',
          '#7e0cf7',
          '#e1a639'
        ],

        hoverBackgroundColor: [
          '#eecde2',
          '#c0d9e7', 
          '#ebebd4', 
          '#bee6d0', 
          '#d4c3e7',
          '#e9ddc8'
        ],


        borderWidth: 1,

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
        label: 'Dataset',

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
      'Febuary',  
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

        borderColor: '#00c49a',

        borderWidth: 2,

        pointRadius: 3,
        pointHoverRadius: 5,

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
          display: false,
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
          '#f4038c',
          '#47a6ee',
          '#ffd15d',
        ],

        borderWidth: 0,

        hoverOffset: 3,
      },
    ],
  };

  public doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,

    maintainAspectRatio: false,

    cutout: '65%',

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
          '#f4038c',
          '#47a6ee',
          '#ffd15d',
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

          padding: 20,

          boxWidth: 15,
          boxHeight: 15
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

        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ],

        backgroundColor: [
          'rgb(255, 200, 212)',
          'rgb(199, 238, 238)',
          'rgb(255, 238, 200)',
          'rgb(230, 233, 240)',
          'rgb(186, 216, 237)'
        ],

        hoverBackgroundColor: [
          'rgb(255, 200, 212)',
          'rgb(199, 238, 238)',
          'rgb(255, 238, 200)',
          'rgb(230, 233, 240)',
          'rgb(186, 216, 237)'
        ],



        borderWidth: 2,

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

          padding: 20,

          // boxWidth: 15,
          // boxHeight: 15
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
  // BAR CHART
  // =========================
  public singleBarData: ChartData<'bar'> = {
    labels: [
      'January',
      'Febuary',  
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
          'rgba(178, 233, 251, 0.35)',
        ],

        borderColor: [
          '#53b8f3'
        ],

        hoverBackgroundColor: [
          '#d1eeff', 
        ],

        borderWidth: 1,
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
          stepSize: 10,
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
          display: false,
        },
      },
    },
  };

}
