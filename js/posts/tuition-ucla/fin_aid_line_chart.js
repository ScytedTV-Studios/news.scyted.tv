Chart.defaults.font.family = 'PT Sans'; //FONT FOR CHART CHANGE IF NEEDED
const labels_finaid = [
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
]; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors_finaid = [
  '#ffebd2',
  '#e89c81',
  '#eac4d5',
  '#d6eadf',
  '#b1cfe6',
  '#809bce',
  '#60759b',
  'black',
  'white',
]; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data_finaid = {
  labels: labels_finaid,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}
  datasets: [
    {
      label: 'Cal Grant',
      data: [
        38607214.08,
        53125177.04,
        63404952.9,
        66264702.83,
        62071559.35,
        64534757.44,
        65744506.77,
        74582811.02,
        91026164.06,
        103537149.39,
        110068945.84,
        118664693.69,
        126227270.33,
        130774062.9,
        136995035.95,
        143385377.63,
        136663180.11,
        136102969.46,
        128118403.48,
        120716038.04,
        115756498.0,
      ], //VALUE FOR EACH POINT
      backgroundColor: colors_finaid[0],
      borderColor: colors_finaid[0],
      borderWidth: 1,
    },
    {
      label: 'Pell Grant',
      data: [
        38964446.82,
        39415276.65,
        36898198.01,
        34893291.9,
        33078696.5,
        34726900.02,
        36465770.21,
        51376963.83,
        53259903.11,
        53441783.17,
        50942521.39,
        51168042.81,
        51463350.1,
        51004833.58,
        51663197.16,
        57877461.94,
        55741973.04,
        53014527.03,
        50099159.3,
        47046932.46,
        46542633.0,
      ], //DATA HERE
      backgroundColor: colors_finaid[1],
      borderColor: colors_finaid[1],
      borderWidth: 1,
    },
    {
      label: 'UC Grant (All)',
      data: [
        41127273.66,
        53044020.3,
        59175291.34,
        72386515.74,
        61776013.66,
        62916171.27,
        76151933.1,
        74058037.39,
        94821062.72,
        117111419.43,
        117074394.03,
        114656038.27,
        121314218.88,
        111981087.52,
        112637130.18,
        107503809.0,
        114469548.35,
        110340877.87,
        99113504.46,
        96482284.51,
        98645456.47,
      ],
      backgroundColor: colors_finaid[2],
      borderColor: colors_finaid[2],
      borderWidth: 1,
    },
    {
      label: 'UC Grant (Need Based)',
      data: [
        40987036.77,
        52992783.4,
        59067904.46,
        72226728.31,
        61661677.88,
        62840871.28,
        75992481.16,
        73911405.01,
        94821062.72,
        117111419.43,
        116991817.53,
        114369761.31,
        120918860.93,
        111488251.1,
        112162162.53,
        107147920.12,
        114458196.78,
        109905219.63,
        99098518.4,
        96225254.21,
        98274835.47,
      ], //DATA HERE
      backgroundColor: colors_finaid[3],
      borderColor: colors_finaid[3],
      borderWidth: 1,
    },
    {
      label: 'UC Scholarships',
      data: [
        17784653.22,
        17636263.78,
        18811547.92,
        19555549.36,
        21482423.37,
        19411585.65,
        22596555.64,
        19427398.07,
        20913030.2,
        24951111.93,
        26276588.99,
        25073148.85,
        26771493.38,
        26682052.87,
        28780805.57,
        30492867.78,
        29326184.13,
        31164109.39,
        27272298.98,
        24050708.45,
        22951864.52,
      ], //DATA HERE
      backgroundColor: colors_finaid[4],
      borderColor: colors_finaid[4],
      borderWidth: 1,
    },
    {
      label: 'CA Middle Class Scholarships',
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        2414969.93,
        1752733.25,
        3249297.59,
        4076441.07,
        4262512.55,
        4854367.32,
        7146260.11,
        5178382.1,
        20813495.0,
      ], //DATA HERE
      backgroundColor: colors_finaid[5],
      borderColor: colors_finaid[5],
      borderWidth: 1,
    },
    {
      label: 'Other Scholarships',
      data: [
        10845314.91,
        14541542.0,
        13805435.57,
        12823902.01,
        15841030.98,
        15447577.64,
        15246583.37,
        18451335.51,
        15339808.36,
        9534507.65,
        8563255.0,
        9156506.87,
        11103179.7,
        10737706.69,
        12854704.22,
        14752741.01,
        15040007.83,
        15697268.63,
        17518545.48,
        15499521.93,
        30435340.52,
      ], //DATA HERE
      backgroundColor: colors_finaid[6],
      borderColor: colors_finaid[6],
      borderWidth: 1,
    },
    {
      label: 'Total Gift Aid',
      data: [
        148342382.06,
        180494529.66,
        194758855.85,
        208776459.99,
        196992254.98,
        200328581.43,
        218669747.72,
        240383573.0,
        277857851.24,
        311633956.21,
        315301163.59,
        320966684.5,
        339159684.93,
        333423796.97,
        345147800.53,
        356253541.91,
        353482992.5,
        360173766.64,
        343875424.5,
        346077190.12,
        317317066.04,
      ], //DATA HERE
      backgroundColor: colors_finaid[8],
      borderColor: colors_finaid[7],
      borderWidth: 1,
    },
    {
      label: 'Total Loans (excl. PLUS)',
      data: [
        81913626.95,
        84800037.27,
        79899154.47,
        70575197.79,
        75150707.61,
        73698782.37,
        72729804.28,
        84143379.54,
        81136050.08,
        87179339.2,
        84432117.25,
        80425544.19,
        74488606.76,
        73941984.84,
        73823220.27,
        70562090.99,
        61920736.18,
        56665298.48,
        21181251.5,
        42205541.56,
        39404770.0,
      ], //DATA HERE
      backgroundColor: colors_finaid[8],
      borderColor: colors_finaid[7],
      borderDash: [5, 5],
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options_finaid = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Dollars($)',
      },
    },
    x: {
      beginAtZero: false,
      title: {
        display: true,
        text: 'Year',
      },
    },
  },
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Financial aid recieved',
      font: {
        size: 20, // You can change the font size here
      },
    },
    subtitle: {
      display: true,
      text:
        'The inflation-adjusted amount of financial aid recieved by UCLA students from 2002 to 2022.',
      // align: 'start', // Add this line
      font: {
        size: 15,
      },
      padding: {
        bottom: 20, // Add space above the subtitle
      },
    },
  },
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxLINE_finaid = document.getElementById('fin_aid_line_chart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart_finaid = new Chart(ctxLINE_finaid, {
  type: 'line',
  data: data_finaid,
  options: options_finaid,
});