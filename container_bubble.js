Highcharts.chart('container_bubble', {
  chart: {
    type: 'packedbubble',
    height: '50%'
  },
  title: {
    text: ''
  },
  tooltip: {
    useHTML: true,
    pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
  },
  plotOptions: {
    packedbubble: {
      minSize: '50%',
      maxSize: '120%',
      zMin: 10,
      zMax: 1000,
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0.02
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}',
        filter: {
          property: 'y',
          operator: '>',
          value: 250
        },
        style: {
          color: 'black',
          textOutline: 'none',
          fontWeight: 'normal'
        }
      }
    }
  },
  series: [{
    name: 'High',
    data: [{
      name: 'High 1',
      value: 767.1
    }, {
      name: 'High 2',
      value: 20.7
    },
    {
      name: "High 3",
      value: 97.2
    },
    {
      name: "High 9",
      value: 34.6
    },
    {
      name: "High 10",
      value: 7.2
    }]
  }, {
    name: 'Low',
    data: [{
      name: "Low 1",
      value: 8.2
    },
    {
      name: "Low 2",
      value: 9.2
    },
    {
      name: "Low 3",
      value: 13.1
    },
    {
      name: "Low 4",
      value: 14.1
    },
    {
      name: "Low 10",
      value: 60.7
    }]
  }, {
    name: 'Suspicious',
    data: [{
      name: "Suspicious 1",
      value: 409.4
    },
    {
      name: "Suspicious 2",
      value: 34.1
    },
    {
      name: "Suspicious 3",
      value: 7.1
    }]
  }, {
    name: 'Critical',
    data: [{
      name: "Critical 1",
      value: 7.6
    },
    {
      name: "Critical 2",
      value: 8.4
    },
    {
      name: "Critical 3",
      value: 8.3
    },
    {
      name: "Critical 4",
      value: 10.2
    },
    {
      name: "Critical 5",
      value: 12
    }]
  }, {
    name: 'Query',
    data: [{
      name: "Query 1",
      value: 7.2
    },
    {
      name: "Query 2",
      value: 8.1
    },
    {
      name: "Query 3",
      value: 17.8
    },
    {
      name: "Query 4",
      value: 34
    }, 
    {
      name: "Query 7",
      value: 195.2
    }]
  }]
});