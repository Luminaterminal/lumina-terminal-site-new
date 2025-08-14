// app/components/MarketChart.tsx
import React from 'react';
import Chart from 'react-apexcharts';

const MarketChart = () => {
  const times = [
    '2025-08-14T10:00:00',
    '2025-08-14T10:30:00',
    '2025-08-14T11:00:00',
    '2025-08-14T11:30:00',
    '2025-08-14T12:00:00',
    '2025-08-14T12:30:00',
    '2025-08-14T13:00:00',
    '2025-08-14T13:30:00',
    '2025-08-14T14:00:00',
    '2025-08-14T14:30:00',
    '2025-08-14T15:00:00',
    '2025-08-14T15:30:00',
  ];

  const candleY = [
    [24.0, 24.1, 23.9, 23.9],
    [23.9, 24.0, 23.8, 23.8],
    [23.8, 23.8, 23.6, 23.6],
    [23.6, 23.7, 23.5, 23.6],
    [23.6, 23.7, 23.6, 23.7],
    [23.7, 23.8, 23.6, 23.7],
    [23.7, 23.8, 23.7, 23.7],
    [23.7, 23.8, 23.6, 23.6],
    [23.6, 23.7, 23.6, 23.7],
    [23.7, 24.0, 23.7, 23.9],
    [23.9, 24.1, 23.9, 24.0],
    [24.0, 24.4, 24.0, 24.1],
  ];

  const volumeData = [
    0.5, 1.0, 5.0, 1.5, 1.0, 0.5, 0.8, 0.6, 0.9, 1.2, 1.5, 3.1 // Vëllimet e paparashikuara bazuar në foto
  ];

  const series = [
    {
      name: 'Price',
      type: 'candlestick',
      data: candleY.map((y, i) => ({
        x: new Date(times[i]).getTime(),
        y,
      })),
    },
    {
      name: 'Unusual Volume (M)',
      type: 'column',
      data: volumeData.map((v, i) => ({
        x: new Date(times[i]).getTime(),
        y: v,
      })),
    },
  ];

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
      background: '#1a1a1a',
      foreColor: '#ccc',
    },
    title: {
      text: 'Palantir Technologies Inc. $PLTR - Combined Dark Pool Activity',
      align: 'left',
      style: {
        color: '#fff',
      },
    },
    subtitle: {
      text: 'Dark Pool Volume: 9.2M +5.8% | Negative Volume: 65,916 ▼20.7% | Sens. Analytics: NEGATIVE | Social Media: NEGATIVE | Unusual Volume: 5 posts ▲31.3% | Average Price: 24.10 ▼1.7% | Current Price: 24.10',
      align: 'left',
      style: {
        color: '#ccc',
      },
    },
    annotations: {
      yaxis: [
        {
          y: 24.10,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Current/Avg Price $24.10',
          },
        },
        {
          y: 24.80,
          borderColor: '#FEB019',
          label: {
            borderColor: '#FEB019',
            style: {
              color: '#fff',
              background: '#FEB019',
            },
            text: 'Institutions Buying at $24.80',
          },
        },
      ],
      xaxis: [
        {
          x: new Date('2025-08-14T09:30:00').getTime(),
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'ATS 60,000 shares @ 09:30',
          },
        },
        {
          x: new Date('2025-08-14T09:45:00').getTime(),
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'ATS 200,000 shares @ 09:45',
          },
        },
        {
          x: new Date('2025-08-14T09:58:00').getTime(),
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'ATS 100,000 shares @ 09:58',
          },
        },
        {
          x: new Date('2025-08-14T09:58:00').getTime() + 60000, // pak i zhvendosur
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'ATS 50,000 shares @ 24.50',
          },
        },
      ],
    },
    xaxis: {
      type: 'datetime',
      min: new Date('2025-08-14T09:00:00').getTime(),
      labels: {
        datetimeFormatter: {
          hour: 'HH:mm',
        },
      },
    },
    yaxis: [
      {
        title: {
          text: 'Price (USD)',
          style: {
            color: '#fff',
          },
        },
        labels: {
          formatter: (val: number) => val.toFixed(1),
        },
      },
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        opposite: true,
        title: {
          text: 'Volume (M)',
          style: {
            color: '#fff',
          },
        },
      },
    ],
    grid: {
      borderColor: '#333',
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00B746',
          downward: '#EF403C',
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  return <Chart options={options} series={series} type="candlestick" height={350} width="100%" />;
};

export default MarketChart;
