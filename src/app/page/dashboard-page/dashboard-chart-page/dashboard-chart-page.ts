import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartOptions,
} from 'chart.js';

@Component({
  selector: 'app-dashboard-chart-page',
  imports: [BaseChartDirective],
  templateUrl: './dashboard-chart-page.html',
  styleUrl: './dashboard-chart-page.css',
})
export class DashboardChartPage {


  public salesData: ChartData<'line'> = {
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
        backgroundColor: 'rgba(50, 184, 246, 0.12)',

        borderWidth: 2,

        pointRadius: 3,
        pointHoverRadius: 5,

        tension: 0.4,

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
        backgroundColor: 'rgba(58, 226, 190, 0.12)',

        borderWidth: 2,

        pointRadius: 3,
        pointHoverRadius: 5,

        tension: 0.4,

        fill: true,
      },
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
      legend: {
        position: 'bottom',

        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;

            return `${context.dataset.label}: $${value.toLocaleString()}.00`;
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          callback: (value) => {
            return `$${Number(value).toLocaleString()}.00`;
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
  // TRAFFIC CHART
  // =========================

  public trafficData: ChartData<'doughnut'> = {
    labels: [
      'Direct',
      'Social',
      'Referral',
      'Organic',
      'Email',
    ],

    datasets: [
      {
        data: [
          35,
          25,
          20,
          15,
          5,
        ],

        backgroundColor: [
          '#03a9f4',
          '#00c49a',
          '#ff9275',
          '#a78cdf',
          '#5fbd6a',
        ],

        borderWidth: 0.1,

        hoverOffset: 3,
      },
    ],
  };

  public trafficOptions: ChartOptions<'doughnut'> = {
    responsive: false,

    cutout: '70%',

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,
      },
    },
  };
}
