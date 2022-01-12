//Chart.js設定
var w = $(window).width();
var x = 1024;
if (w > x) {
  var radarfontsize = 12;
  var radarfontcolor = '#111';

} else {
  var radarfontsize = 11;
  var radarfontcolor = '#0b4e71';
}
var option = {
  legend: {
    display: false,
  },
  animation: {
    duration: 0,
  },
  scale: {
    pointLabels: {
      fontFamily: '\'Noto Sans Japanese\',sans-serif',
      fontSize: radarfontsize,
      fontColor: radarfontcolor,
    },
    ticks: {
      display: true,
      stepSize: 2,
      max: 10,
      beginAtZero: true,
    },
    angleLines: {
      display: false,
    }
  }
};
var w = $(window).width();
var x = 767;
if (w > x) {
  var optiondetailGraph2xpadding = 10;
  var optiondetailGraph2xlabelOffset = 20;
  var optiondetailGraph2ypadding = 20;
  var optiondetailGAmoGraph1xpadding = 10;
  var optiondetailGAmoGraph1xlabelOffset = 20;
  var optiondetailGAmoGraph1ypadding = 20;
  var optiondetailGAmoGraph2xlabelOffset = 20;
  var optiondetailGAmoGraph2ypadding = 20;
  var optiondetailSCGraph1xpadding = 10;
  var optiondetailSCGraph1ypadding = 40;
  var optiondetailcommonxlabelOffset = 20;
  var optiondetailcommonxpadding = 10;
  var optiondetailcommonypadding = 20;
  var optiondetailfontsize = 12;
  var optiondetailfontsize10 = 10;
  var optiondetailfontsize8 = 8;
} else {
  var optiondetailGraph2xpadding = 5;
  var optiondetailGraph2xlabelOffset = 5;
  var optiondetailGraph2ypadding = 5;
  var optiondetailGAmoGraph1xpadding = 5;
  var optiondetailGAmoGraph1xlabelOffset = 5;
  var optiondetailGAmoGraph1ypadding = 5;
  var optiondetailGAmoGraph2xlabelOffset = 5;
  var optiondetailGAmoGraph2ypadding = 5;
  var optiondetailSCGraph1xlabelOffset = 5;
  var optiondetailSCGraph1xpadding = 5;
  var optiondetailSCGraph1ypadding = 5;
  var optiondetailcommonxlabelOffset = 5;
  var optiondetailcommonxpadding = 5;
  var optiondetailcommonypadding = 5;
  var optiondetailfontsize = 9;
  var optiondetailfontsize10 = 8;
  var optiondetailfontsize8 = 7;
}
var optiondetailGraph2 = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      labelOffset: optiondetailGraph2xlabelOffset,
      ticks: {
        padding: optiondetailGraph2xpadding,
        fontSize: optiondetailfontsize,
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      ticks: {
        autoSkip: true,
        beginAtZero: true,
        //max: 200,
        //min: -100,
        // stepSize: 10000,
        padding: optiondetailGraph2ypadding,
        fontSize: optiondetailfontsize,
      },
      gridLines: {
        drawBorder: false
      }
    }]
  },
  tooltips: {
    displayColors: false,
    mode: 'index',
    intersect: false,
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        return data.datasets[tooltipItems.datasetIndex].label + '：' + tooltipItems.yLabel.toLocaleString() + '円';
      }
    }
  }
};
var optiondetailGAmoGraph1 = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      labelOffset: optiondetailGAmoGraph1xlabelOffset,
      ticks: {
        padding: optiondetailGAmoGraph1xpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        //max: 5000,
        min: 0,
        // stepSize: 15000,
        padding: optiondetailGAmoGraph1ypadding,
        fontSize: optiondetailfontsize,
        callback: function (label, index, labels) {
          return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      },
      gridLines: {
        drawBorder: false
      }
    }]
  },
  tooltips: {
    displayColors: false,
    mode: 'index',
    intersect: false,
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var $ttl = data.datasets[tooltipItems.datasetIndex].label;
        if ($ttl == 'ページビュー数') {
          var $ttlrp = 'PV';
        } else {
          var $ttlrp = 'UU';
        }

        var $yLbl = tooltipItems.yLabel;
        $yLblrp = $yLbl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return $ttlrp + '：' + $yLblrp;
      }
    }
  }
};
var optiondetailGAmoGraph1_28day = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      labelOffset: optiondetailGAmoGraph1xlabelOffset,
      ticks: {
        callback: function (value, i) {
          if (i % 2 == 0 || i == 27) {
            return value;
          } else {
            return '';
          }
        },
        padding: optiondetailGAmoGraph1xpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        //max: 5000,
        min: 0,
        // stepSize: 15000,
        padding: optiondetailGAmoGraph1ypadding,
        fontSize: optiondetailfontsize,
        callback: function (label, index, labels) {
          return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      },
      gridLines: {
        drawBorder: false
      }
    }]
  },
  tooltips: {
    displayColors: false,
    mode: 'index',
    intersect: false,
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var day = data.labels[tooltipItems.index];
        if (0 < day.indexOf('/')) {
          day = day.replace('/', '月') + '日';
        } else {
          day = day + '日';
        }
        var $ttl = data.datasets[tooltipItems.datasetIndex].label;
        if ($ttl == 'ページビュー数') {
          var $ttlrp = 'PV';
        } else {
          var $ttlrp = 'UU';
        }

        var $yLbl = tooltipItems.yLabel;
        $yLblrp = $yLbl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return [day, $ttlrp + '：' + $yLblrp];
      }
    }
  }
};
var optiondetailGAmoGraph2 = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      barPercentage: 0.4,
      categoryPercentage: 1,
      labelOffset: optiondetailGAmoGraph2xlabelOffset,
      ticks: {
        autoSkip: false,
        fontSize: optiondetailfontsize8,
        maxRotation: 75,
        minRotation: 0
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        //max: 100,
        min: 0,
        stepSize: 20,
        padding: optiondetailGAmoGraph2ypadding,
        fontSize: optiondetailfontsize,
        callback: function (value, index, values) {
          return value + '%';
        }
      },
      gridLines: {
        drawBorder: false
      }
    }]
  },
  tooltips: {
    displayColors: false,
    mode: 'index',
    intersect: false,
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var xLbl = tooltipItems.xLabel;
        var xLblttl = String(xLbl).split(',').join('');
        var ga3num = tooltipItems.yLabel;
        return xLblttl + ': ' + ga3num + '%';
      }
    }
  }
};
var optiondetailGAmoGraph3 = {
  legend: {
    display: false,
  },
  cutoutPercentage: 60,
  scales: {},
  tooltips: {
    displayColors: false,
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItem, data) {

        return data.labels[tooltipItem.index]
          + ': '
          + data.datasets[0].data[tooltipItem.index]
          + '%'; //ここで単位を付けます
      }
    }
  }
};

var optiondetailGAmoGraph4_1 = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      display: false,
      stacked: true
    }],
    yAxes: [{
      display: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      stacked: true
    }]
  },
  tooltips: {
    displayColors: false,
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        return data.datasets[tooltipItems.datasetIndex].label + '：' + tooltipItems.xLabel + '%';
      }
    }
  }
};
var optiondetailGAmoGraph4_2 = {
  legend: {
    display: false,
  },
  cutoutPercentage: 60,
  scales: {},
  tooltips: {
    displayColors: false,
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItem, data) {

        return data.labels[tooltipItem.index]
          + ': '
          + data.datasets[0].data[tooltipItem.index]
          + '%'; //ここで単位を付けます
      }
    }
  }
};

var maxYig = 5;
var optiondetailGAmo_ig = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      display: false,
      stacked: true,
      ticks: {
        beginAtZero: true,
        max: maxYig,
        min: 0,
      },
    }],
    yAxes: [{
      display: false,
      barPercentage: 0.6,
      categoryPercentage: 1,
      stacked: true
    }]
  },
  tooltips: {
    displayColors: false,
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        return (tooltipItems.xLabel).toFixed(2) + '%';
      }
    }
  }
};
var optiondetailSCGraph1 = {
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 0
    }
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      labelOffset: optiondetailSCGraph1xlabelOffset,
      ticks: {
        padding: optiondetailSCGraph1xpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      id: 'y-axis-1',
      display: true,
      ticks: {
        display: false,
        beginAtZero: true,
        //max: 5000,
        min: 0,
        //stepSize: 1000,
        padding: optiondetailSCGraph1ypadding,
      },
      gridLines: {
        drawBorder: false
      }
    },
      {
        id: 'y-axis-2',
        display: false,
        ticks: {
          display: false,
          beginAtZero: true,
          //max: 5000,
          min: 0,
          //stepSize: 1000,
          padding: optiondetailSCGraph1ypadding,
        },
        gridLines: {
          drawBorder: false
        }
      },
      {
        id: 'y-axis-3',
        display: false,
        ticks: {
          display: false,
          beginAtZero: true,
          //max: 5000,
          min: 0,
          //stepSize: 1000,
          padding: optiondetailSCGraph1ypadding,
        },
        gridLines: {
          drawBorder: false
        }
      },
      {
        id: 'y-axis-4',
        display: false,
        ticks: {
          display: false,
          reverse: true,
          beginAtZero: true,
          //max: 5000,
          min: 1,
          //stepSize: 1000,
          padding: optiondetailSCGraph1ypadding,
        },
        gridLines: {
          drawBorder: false
        }
      }
    ]
  },
  tooltips: {
    displayColors: false,
    mode: 'x',
    position: 'nearest',
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var $scg1Label = data.datasets[tooltipItems.datasetIndex].label;
        var $scg1yLabel = tooltipItems.yLabel;
        var $scg1yLabelrp = $scg1yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if ($scg1Label == '平均CTR') {
          return $scg1Label + '：' + $scg1yLabelrp + '%';
        } else {
          return $scg1Label + '：' + $scg1yLabelrp;
        }
      }
    }
  }
};

var optiondetailSCGraph1_2 = {
  legend: {
    display: true,
    labels: {
      boxWidth: 16,
      fontSize: 16,
      fontColor: '#111',
      padding: 40,
      generateLabels: function (chart) {
        return chart.data.datasets.map(function (dataset, i) {
          return {
            // plugin.legend.js generateLabels.labelsを参照してください。
            text: dataset.label,
            fillStyle: dataset.backgroundColor,
            hidden: dataset.hidden,
            lineCap: dataset.borderCapStyle,
            lineDash: dataset.borderDash,
            lineDashOffset: dataset.borderDashOffset,
            lineJoin: dataset.borderJoinStyle,
            lineWidth: dataset.borderWidth,
            strokeStyle: dataset.borderColor,
            // 以下はデータセットの表示をトグルする場合に使用します。
            datasetIndex: i
          };
        });
      }
    }
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      labelOffset: optiondetailSCGraph1xlabelOffset,
      ticks: {
        padding: optiondetailSCGraph1xpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      id: 'y-axis-1',
      display: true,
      ticks: {
        display: false,
        beginAtZero: true,
        //max: 5000,
        min: 0,
        //stepSize: 1000,
        padding: optiondetailSCGraph1ypadding,
      },
      gridLines: {
        drawBorder: false
      }
    },
      {
        id: 'y-axis-2',
        display: false,
        ticks: {
          display: false,
          beginAtZero: true,
          //max: 5000,
          min: 0,
          //stepSize: 1000,
          padding: optiondetailSCGraph1ypadding,
        },
        gridLines: {
          drawBorder: false
        }
      },
      {
        id: 'y-axis-3',
        display: false,
        ticks: {
          display: false,
          beginAtZero: true,
          //max: 5000,
          min: 0,
          //stepSize: 1000,
          padding: optiondetailSCGraph1ypadding,
        },
        gridLines: {
          drawBorder: false
        }
      },
      {
        id: 'y-axis-4',
        display: false,
        ticks: {
          display: false,
          reverse: true,
          beginAtZero: true,
          //max: 5000,

          //stepSize: 1000,
          padding: optiondetailSCGraph1ypadding,
        },
        gridLines: {
          drawBorder: false
        }
      }
    ]
  },
  tooltips: {
    displayColors: false,
    mode: 'x',
    position: 'nearest',
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var $scg1Label = data.datasets[tooltipItems.datasetIndex].label;
        var $scg1yLabel = tooltipItems.yLabel;
        var $scg1yLabelrp = $scg1yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if ($scg1Label == '平均CTR') {
          return $scg1Label + '：' + $scg1yLabelrp + '%';
        } else {
          return $scg1Label + '：' + $scg1yLabelrp;
        }
      }
    }
  }
};
var optiondetailSCGraph2 = {
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 0
    }
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      labelOffset: optiondetailcommonxlabelOffset,
      ticks: {
        padding: optiondetailcommonxpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        fontSize: optiondetailfontsize,
        //display:false,
        //max: 5000,
        min: 0,
        //stepSize: 20000,
        padding: optiondetailcommonypadding,
        callback: function (label, index, labels) {
          return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      },
      gridLines: {
        drawBorder: false
      }
    }
    ]
  },
  tooltips: {
    displayColors: false,
    mode: 'index',
    intersect: false,
    position: 'nearest',
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var $scg1Label = data.datasets[tooltipItems.datasetIndex].label;
        var $scg1yLabel = tooltipItems.yLabel;
        var $scg1yLabelrp = $scg1yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if ($scg1Label == '平均CTR') {
          return $scg1Label + '：' + $scg1yLabelrp + '%';
        } else {
          return $scg1Label + '：' + $scg1yLabelrp;
        }
      }
    }
  }
};
var optiondetailSCGraph3 = {
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 0
    }
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      labelOffset: optiondetailcommonxlabelOffset,
      ticks: {
        padding: optiondetailcommonxpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        fontSize: optiondetailfontsize,
        //display:false,
        beginAtZero: true,
        //max: 5000,
        min: 0,
        //stepSize: 10,
        padding: optiondetailcommonypadding,
        callback: function (label, index, labels) {
          return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      },
      gridLines: {
        drawBorder: false
      }
    }
    ]
  },
  tooltips: {
    displayColors: false,
    mode: 'index',
    intersect: false,
    position: 'nearest',
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var $scg1Label = data.datasets[tooltipItems.datasetIndex].label;
        var $scg1yLabel = tooltipItems.yLabel;
        var $scg1yLabelrp = $scg1yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if ($scg1Label == '平均CTR') {
          return $scg1Label + '：' + $scg1yLabelrp + '%';
        } else {
          return $scg1Label + '：' + $scg1yLabelrp;
        }
      }
    }
  }
};
var optiondetailSCGraph4 = {
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 0
    }
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      labelOffset: optiondetailcommonxlabelOffset,
      ticks: {
        padding: optiondetailcommonxpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        fontSize: optiondetailfontsize,
        //display:false,
        beginAtZero: true,

        //stepSize: 10,
        padding: optiondetailcommonypadding,
        callback: function (value, index, values) {
          return value + '%';
        }
      },
      gridLines: {
        drawBorder: false
      }
    }
    ]
  },
  tooltips: {
    displayColors: false,
    mode: 'index',
    intersect: false,
    position: 'nearest',
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var $scg1Label = data.datasets[tooltipItems.datasetIndex].label;
        var $scg1yLabel = tooltipItems.yLabel;
        var $scg1yLabelrp = $scg1yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if ($scg1Label == '平均CTR') {
          return $scg1Label + '：' + $scg1yLabelrp + '%';
        } else {
          return $scg1Label + '：' + $scg1yLabelrp;
        }
      }
    }
  }
};
var optiondetailSCGraph5 = {
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 0
    }
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      labelOffset: optiondetailcommonxlabelOffset,
      ticks: {
        padding: optiondetailcommonxpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        fontSize: optiondetailfontsize,

        //display:false,
        beginAtZero: true,
        //max: 100,
        min: 1,
        padding: optiondetailcommonypadding,
        reverse: true,
      },
      gridLines: {
        drawBorder: false
      }
    }
    ]
  },
  tooltips: {
    displayColors: false,
    mode: 'index',
    intersect: false,
    position: 'nearest',
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var $scg1Label = data.datasets[tooltipItems.datasetIndex].label;
        var $scg1yLabel = tooltipItems.yLabel;
        var $scg1yLabelrp = $scg1yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if ($scg1Label == '平均CTR') {
          return $scg1Label + '：' + $scg1yLabelrp + '%';
        } else {
          return $scg1Label + '：' + $scg1yLabelrp;
        }
      }
    }
  }
};

var optiondetailSCGraphDisplaySP = {
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 0
    }
  },
  scales: {
    xAxes: [{
      callback: function (value, i) {
        if (i % 2 == 0 || i == 27) {
          return value;
        } else {
          return '';
        }
      },
      display: true,
      stacked: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      labelOffset: optiondetailcommonxlabelOffset,
      ticks: {
        callback: function (value, i) {
          if (i % 2 == 0 || i == 27) {
            return value;
          } else {
            return '';
          }
        },
        padding: optiondetailcommonxpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        fontSize: optiondetailfontsize,
        //display:false,
        beginAtZero: true,
        //max: 5000,
        min: 0,
        //stepSize: 10,
        padding: optiondetailcommonypadding,
        callback: function (label, index, labels) {
          return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      },
      gridLines: {
        drawBorder: false
      }
    }
    ]
  },
  tooltips: {
    displayColors: false,
    mode: 'index',
    intersect: false,
    position: 'nearest',
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var day = data.labels[tooltipItems.index];
        if (0 < day.indexOf('/')) {
          day = day.replace('/', '月') + '日';
        } else {
          day = day + '日';
        }
        var $scg1Label = data.datasets[tooltipItems.datasetIndex].label;
        var $scg1yLabel = tooltipItems.yLabel;
        var $scg1yLabelrp = $scg1yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return [day, $scg1Label + '：' + $scg1yLabelrp];
      }
    }
  }
};

var optiondetailSCGraphClickSP = {
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 0
    }
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      labelOffset: optiondetailcommonxlabelOffset,
      ticks: {
        callback: function (value, i) {
          if (i % 2 == 0 || i == 27) {
            return value;
          } else {
            return '';
          }
        },
        padding: optiondetailcommonxpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        fontSize: optiondetailfontsize,
        //display:false,
        //max: 5000,
        min: 0,
        //stepSize: 20000,
        padding: optiondetailcommonypadding,
        callback: function (label, index, labels) {
          return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      },
      gridLines: {
        drawBorder: false
      }
    }
    ]
  },
  tooltips: {
    displayColors: false,
    mode: 'index',
    intersect: false,
    position: 'nearest',
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var day = data.labels[tooltipItems.index];
        if (0 < day.indexOf('/')) {
          day = day.replace('/', '月') + '日';
        } else {
          day = day + '日';
        }
        var $scg1Label = data.datasets[tooltipItems.datasetIndex].label;
        var $scg1yLabel = tooltipItems.yLabel;
        var $scg1yLabelrp = $scg1yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return [day, $scg1Label + '：' + $scg1yLabelrp];
      }
    }
  }
};

var optiondetailSCGraphCtrSP = {
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 0
    }
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      labelOffset: optiondetailcommonxlabelOffset,
      ticks: {
        callback: function (value, i) {
          if (i % 2 == 0 || i == 27) {
            return value;
          } else {
            return '';
          }
        },
        padding: optiondetailcommonxpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        fontSize: optiondetailfontsize,
        //display:false,
        beginAtZero: true,

        //stepSize: 10,
        padding: optiondetailcommonypadding,
        callback: function (value, index, values) {
          return value + '%';
        }
      },
      gridLines: {
        drawBorder: false
      }
    }
    ]
  },
  tooltips: {
    displayColors: false,
    mode: 'index',
    intersect: false,
    position: 'nearest',
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data) {
        var day = data.labels[tooltipItems.index];
        if (0 < day.indexOf('/')) {
          day = day.replace('/', '月') + '日';
        } else {
          day = day + '日';
        }
        var $scg1Label = data.datasets[tooltipItems.datasetIndex].label;
        var $scg1yLabel = tooltipItems.yLabel;
        var $scg1yLabelrp = $scg1yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return [day, $scg1Label + '：' + $scg1yLabelrp + '%'];
      }
    }
  }
};

var optiondetailSCGraphPublishRankSP = {
  legend: {
    display: false,
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 0
    }
  },
  scales: {
    xAxes: [{
      display: true,
      stacked: false,
      barPercentage: 1,
      categoryPercentage: 0.5,
      labelOffset: optiondetailcommonxlabelOffset,
      ticks: {
        callback: function (value, i) {
          if (i % 2 == 0 || i == 27) {
            return value;
          } else {
            return '';
          }
        },
        padding: optiondetailcommonxpadding,
        fontSize: optiondetailfontsize10,
        maxRotation: 0,
        minRotation: 0,
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        fontSize: optiondetailfontsize,
        //display:false,
        beginAtZero: true,
        min: 1,
        padding: optiondetailcommonypadding,
        reverse: true,
      },
      gridLines: {
        drawBorder: false
      }
    }
    ]
  },
  tooltips: {
    displayColors: false,
    escape: false,
    mode: 'index',
    intersect: false,
    position: 'nearest',
    callbacks: {
      title: function (tooltipItem, data) {
        return false;
      },
      label: function (tooltipItems, data, index) {
        var day = data.labels[tooltipItems.index];
        if (0 < day.indexOf('/')) {
          day = day.replace('/', '月') + '日';
        } else {
          day = day + '日';
        }
        var $scg1Label = data.datasets[tooltipItems.datasetIndex].label;
        var $scg1yLabel = tooltipItems.yLabel;
        var $scg1yLabelrp = $scg1yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return [day, $scg1Label + '：' + $scg1yLabelrp];
      }
    }
  }
};

var dataLabels = ['売上', '利益', '利益率　　', 'PV', 'UU', 'UPV'];
var datasetsBG = 'rgba(0,91,203,0.6)';
var datasetsBG_eg = 'rgba(0,132,194,0.8)';
var datasetsBG_yl = 'rgba(255,186,0,0.8)';
var datasetsBG_bl = 'rgba(0,91,203,0.8)';
var datasetsBG_bls = '#00a3ee';
var datasetsBG_or = '#ff8400';
var datasetsBG_gr = '#00aeb4';
var datasetsBG_pa = '#87a9ff';


//インタレスト用
$(window).on(function () {
  var percentList1 = new Array();
  $('.detail_ga_interest_affinity .percent').each(function (index, element) {
    percentList1[index] = $(this).children('span').text();
  });
  var maxPercent = Math.ceil(Math.max.apply(null, percentList1));
  $('.detail_ga_interest_affinity .percent').each(function (index, element) {
    var percent = $(this).children('span').text();
    var percentP = percent / maxPercent;
    var intGraphW = percentP * 100;
    $(this).prev().children('.int_graph_wrap').children('.int_tooltip').children('span').text(percent);
    $(this).prev().children('.int_graph_wrap').children('.int_graph').css('width', intGraphW + '%');
  });

  var percentList2 = new Array();
  $('.detail_ga_interest_segment .percent').each(function (index, element) {
    percentList2[index] = $(this).children('span').text();
  });
  var maxPercent = Math.ceil(Math.max.apply(null, percentList2));
  $('.detail_ga_interest_segment .percent').each(function (index, element) {
    var percent = $(this).children('span').text();
    var percentP = percent / maxPercent;
    var intGraphW = percentP * 100;
    $(this).prev().children('.int_graph_wrap').children('.int_tooltip').children('span').text(percent);
    $(this).prev().children('.int_graph_wrap').children('.int_graph').css('width', intGraphW + '%');
  });

  var percentList3 = new Array();
  $('.detail_ga_interest_other .percent').each(function (index, element) {
    percentList3[index] = $(this).children('span').text();
  });
  var maxPercent = Math.ceil(Math.max.apply(null, percentList3));
  $('.detail_ga_interest_other .percent').each(function (index, element) {
    var percent = $(this).children('span').text();
    var percentP = percent / maxPercent;
    var intGraphW = percentP * 100;
    $(this).prev().children('.int_graph_wrap').children('.int_tooltip').children('span').text(percent);
    $(this).prev().children('.int_graph_wrap').children('.int_graph').css('width', intGraphW + '%');
  });

  $('.int_graph_wrap').hover(
    function () {
      var graphWrapW = $(this).innerWidth();
      var graphW = $(this).children('.int_graph').outerWidth();
      var tooltipW = $(this).children('.int_tooltip').outerWidth() + 4;

      if (graphWrapW > (graphW + tooltipW)) {
        $(this).children('.int_tooltip').stop().css('left', graphW + 4 + 'px');
      } else {
        $(this).children('.int_tooltip').stop().css('right', graphWrapW - graphW + 5 + 'px').addClass('right');
      }
      $(this).children('.int_tooltip').stop().animate({opacity: 1}, 200);
    },
    function () {
      $(this).children('.int_tooltip').stop().animate({opacity: 0}, 200);
    }
  );
});