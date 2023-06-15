const data = [
  {
    state: 'California',
    law_passed: 'passed',
    law_proposed: null,
    year: '2018',
    law_url: ['https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB2942'],
    title_of_law: ['AB 2942'],
    prison_pop: '96,047'
  },
  {
    state: 'Louisiana',
    law_passed: 'passed',
    law_proposed: null,
    year: '2021',
    law_url: ['https://legis.la.gov/legis/BillInfo.aspx?s=21RS&b=SB186&sbi=y'],
    title_of_law: ['SB 186'],
    prison_pop: '27,074'
  },
  {
    state: 'Illinois',
    law_passed: 'passed',
    law_proposed: null,
    year: '2021',
    law_url: ['https://www.ilga.gov/legislation/billstatus.asp?DocNum=2129&GAID=16&GA=102&DocTypeID=SB&LegID=134780&SessionID=110'],
    title_of_law: ['SB 2129'],
    prison_pop: '29,245'
  },
  {
    state: 'Oregon',
    law_passed: 'passed',
    law_proposed: null,
    year: '2021',
    law_url: ['https://olis.oregonlegislature.gov/liz/2021R1/Measures/Overview/SB819'],
    title_of_law: ['SB 819'],
    prison_pop: '12,299'
  },

  {
    state: 'Washington',
    law_passed: 'passed',
    law_proposed: null,
    year: '2020',
    law_url: ['https://app.leg.wa.gov/billsummary?Year=2019&BillNumber=6164'],
    title_of_law: ['SB 6164'],
    prison_pop: '13,373'
  },
  {
    state: 'Texas',
    law_passed: null,
    law_proposed: 'proposed',
    year: '2023',
    law_url: ['https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB4518'],
    title_of_law: ['HB 4518'],
    prison_pop: '121,964'
  },
  {
    state: 'Georgia',
    law_passed: null,
    law_proposed: 'proposed',
    year: '2022',
    law_url: ['https://www.legis.ga.gov/legislation/62030'],
    title_of_law: ['SB 501'],
    prison_pop: '49,337'
  },
  {
    state: 'Maryland',
    law_passed: null,
    law_proposed: 'proposed',
    year: '2023',
    law_url: ['https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/HB0330?ys=2023RS',
      'https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/SB0295?ys=2023rs'],
    title_of_law: ['HB 330', 'SB 295'],
    prison_pop: '14,948'
  },
  {
    state: 'Massachusetts',
    law_passed: null,
    law_proposed: 'proposed',
    year: '2021-22',
    law_url: ['https://malegislature.gov/Bills/192/H1567'],
    title_of_law: ['H 1567'],
    prison_pop: '6,034'
  },
  {
    state: 'Minnesota',
    law_passed: 'passed',
    law_proposed: null,
    year: '2023-24',
    law_url: ['https://www.revisor.mn.gov/bills/bill.php?f=SF2909&b=senate&y=2023&ssn=0'],
    title_of_law: ['SF 2909'],
    prison_pop: '8,152'
  },
  {
    state: 'New York',
    law_passed: 'proposed',
    law_proposed: null,
    year: '2021-22',
    law_url: ['https://www.nysenate.gov/legislation/bills/2021/S257',
      'https://www.nysenate.gov/legislation/bills/2021/a5977'],
    title_of_law: ['S 257', 'A 5977'],
    prison_pop: '31,803'
  },
  {
    state: 'Florida',
    law_passed: null,
    law_proposed: 'proposed',
    year: '2021',
    law_url: ['https://www.flsenate.gov/Session/Bill/2021/662/?Tab=BillHistory',
      'https://www.flsenate.gov/Session/Bill/2021/1459'],
    title_of_law: ['SB 662', 'HB 1459'],
    prison_pop: '84,081'
  }
];

// CREATE STYLES OBJECT
const main_styles = {
  bottom: '30rem',
  left: '34rem',
}

// CREATE STYLES OBJECT
const location_styles = {
  'font-size':'3rem',
  'margin-bottom':'1rem',
}
// CREATE STYLES OBJECT
const prisonPop_styles = {
  'font-size':'3rem',
  'margin-bottom':'1rem',
}

// CREATE STYLES OBJECT
const key_table_styles = {
  top:'0rem',
  left:'20rem',
  width:'40%',
}

// CREATE STYLES OBJECT
const passed_styles = {
  'font-size':'3rem',
}

// CREATE STYLES OBJECT
const proposed_styles = {
  'font-size':'3rem',
}











