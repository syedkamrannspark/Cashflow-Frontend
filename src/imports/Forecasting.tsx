function Profile() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[normal] not-italic relative shrink-0 text-[16px] whitespace-pre" data-name="Profile">
      <p className="col-1 font-['Inter:Medium',sans-serif] font-medium ml-0 mt-0 relative row-1 text-[rgba(0,0,0,0.6)]">Corporate Treasurer</p>
      <p className="col-1 font-['Inter:Semi_Bold',sans-serif] font-semibold ml-[46px] mt-[28px] relative row-1 text-black">Sarah Mitchell</p>
    </div>
  );
}

function Profile1() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center left-[999px] top-[35px]" data-name="Profile">
      <Profile />
      <div className="relative shrink-0 size-[50px]" data-name="Profile picture">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
          <circle cx="25" cy="25" fill="var(--fill-0, #D9D9D9)" id="Profile picture" r="25" />
        </svg>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-white border-[rgba(91,91,91,0.53)] border-b-2 border-solid h-[113px] left-0 overflow-clip top-0 w-[1280px]" data-name="Navbar">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[normal] left-[60px] not-italic text-[32px] text-black top-[calc(50%-19.5px)] whitespace-pre">LOGO</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[179px] not-italic text-[20px] text-black top-[calc(50%-11.5px)] whitespace-pre">Cash Flow Management Suite</p>
      <Profile1 />
    </div>
  );
}

function Group() {
  return (
    <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-pre">
      <p className="col-1 ml-0 mt-0 relative row-1">Overview</p>
      <p className="col-1 ml-[210px] mt-0 relative row-1">Invoices</p>
      <p className="col-1 ml-[408px] mt-0 relative row-1">Forecasting</p>
      <p className="col-1 ml-[639px] mt-0 relative row-1">AI Insights</p>
      <p className="col-1 ml-[858px] mt-0 relative row-1">Workflow Demo</p>
    </div>
  );
}

function Pages() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[60px] overflow-clip px-[74px] py-[18px] rounded-[20px] top-[161px] w-[1160px]" data-name="Pages">
      <Group />
    </div>
  );
}

function AlertBox() {
  return (
    <div className="absolute bg-[#fff5db] h-[42px] left-[60px] overflow-clip rounded-[20px] top-[241px] w-[1160px]" data-name="Alert box">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[34px] not-italic text-[16px] text-black top-[calc(50%-9px)] whitespace-pre">{`Cash position treding 18% below target. Review All recommendations for optimization strategies `}</p>
    </div>
  );
}

function ForecastedLineGoingUp() {
  return (
    <div className="absolute contents left-[18px] top-[98px]" data-name="Forecasted line going up">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[43px] not-italic text-[#04ff3a] text-[16px] top-[98px] whitespace-pre">+8.2% from last week</p>
      <div className="absolute flex h-[16px] items-center justify-center left-[18px] top-[98px] w-[19px]" style={{ "--transform-inner-width": "14.171875", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative text-[#04ff3a] text-[16px] whitespace-pre">→</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[218px] top-[24px]">
      <div className="absolute bg-[rgba(78,199,255,0.16)] h-[41px] left-[218px] rounded-[8px] top-[24px] w-[35px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[229px] not-italic text-[20px] text-[rgba(0,174,255,0.71)] top-[33px] whitespace-pre">$</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[18px] top-[24px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-pre">Current Cash Position</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[20px] text-black top-[62px] whitespace-pre">$2,950,000</p>
      <ForecastedLineGoingUp />
      <Group1 />
    </div>
  );
}

function CureentCashPosition() {
  return (
    <div className="bg-white h-[140px] overflow-clip relative rounded-[20px] shrink-0 w-[271px]" data-name="Cureent Cash position">
      <Group2 />
    </div>
  );
}

function ForecastedLineGoingUp1() {
  return (
    <div className="absolute contents left-[18px] top-[98px]" data-name="Forecasted line going up">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[43px] not-italic text-[#ff0408] text-[16px] top-[98px] whitespace-pre">-18.6% projected</p>
      <div className="absolute flex h-[16px] items-center justify-center left-[18px] top-[98px] w-[19px]" style={{ "--transform-inner-width": "14.171875", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative text-[#ff0408] text-[16px] whitespace-pre">→</p>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[218px] top-[24px]">
      <div className="absolute bg-[rgba(78,199,255,0.16)] h-[41px] left-[218px] rounded-[8px] top-[24px] w-[35px]" />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[18px] top-[24px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-pre">30 Day Forecast</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[20px] text-black top-[62px] whitespace-pre">$2,400,000</p>
      <ForecastedLineGoingUp1 />
      <Group8 />
    </div>
  );
}

function Component30DayForecast() {
  return (
    <div className="bg-white h-[140px] overflow-clip relative rounded-[20px] shrink-0 w-[271px]" data-name="30 Day Forecast">
      <Group9 />
    </div>
  );
}

function ForecastedLineGoingUp2() {
  return (
    <div className="absolute contents left-[43px] top-[98px]" data-name="Forecasted line going up">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[43px] not-italic text-[#ffc904] text-[16px] top-[98px] whitespace-pre">12 Invoices overdue</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[218px] top-[24px]">
      <div className="absolute bg-[rgba(78,199,255,0.16)] h-[41px] left-[218px] rounded-[8px] top-[24px] w-[35px]" />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[23px] top-[24px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-pre">At-Risk Invoices</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[20px] text-black top-[62px] whitespace-pre">$847,500</p>
      <ForecastedLineGoingUp2 />
      <Group10 />
    </div>
  );
}

function AtRiskInvoices() {
  return (
    <div className="bg-white h-[140px] overflow-clip relative rounded-[20px] shrink-0 w-[271px]" data-name="At-Risk Invoices">
      <Group11 />
    </div>
  );
}

function ForecastedLineGoingUp3() {
  return (
    <div className="absolute contents left-[43px] top-[98px]" data-name="Forecasted line going up">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[43px] not-italic text-[#aeaeae] text-[16px] top-[98px] whitespace-pre">Based on avg . burn</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[218px] top-[24px]">
      <div className="absolute bg-[rgba(78,199,255,0.16)] h-[41px] left-[218px] rounded-[8px] top-[24px] w-[35px]" />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[23px] top-[24px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-pre">Cash Runaway</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[20px] text-black top-[62px] whitespace-pre">45 Days</p>
      <ForecastedLineGoingUp3 />
      <Group12 />
    </div>
  );
}

function CashRunaway() {
  return (
    <div className="bg-white h-[140px] overflow-clip relative rounded-[20px] shrink-0 w-[271px]" data-name="Cash runaway">
      <Group13 />
    </div>
  );
}

function InsightsTiles() {
  return (
    <div className="absolute content-stretch flex gap-[25px] items-center left-[60px] top-[308px]" data-name="Insights Tiles">
      <CureentCashPosition />
      <Component30DayForecast />
      <AtRiskInvoices />
      <CashRunaway />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[33px] top-[32px]">
      <div className="absolute left-[33px] text-black top-[32px] whitespace-nowrap">
        <p className="mb-0">Senario Analysis</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute left-[33px] text-[rgba(0,0,0,0.44)] top-[60px]">Optimistic, expected, and pessimistic cash posit on forecasts</p>
    </div>
  );
}

function ScenarioAnalysis() {
  return (
    <div className="absolute bg-white font-['Inter:Semi_Bold',sans-serif] font-semibold h-[438px] leading-[normal] left-[60px] not-italic overflow-clip rounded-[20px] text-[20px] top-[473px] w-[1160px] whitespace-pre" data-name="Scenario Analysis">
      <Group3 />
      <p className="absolute left-[calc(50%-386px)] text-black top-[207px]">Place for Scenario Analysis plot with Expected, Optimistic, Pessimistic variables</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[33px] top-[32px]">
      <p className="absolute left-[33px] text-black top-[32px] whitespace-pre">4-Week Cash Flow Forecast</p>
      <p className="absolute left-[33px] text-[rgba(0,0,0,0.44)] top-[60px] w-[528px] whitespace-pre-wrap">Detailed breakdown of projected inflows and outflows</p>
    </div>
  );
}

function Component4WeekCashFlowForecast() {
  return (
    <div className="absolute bg-white font-['Inter:Semi_Bold',sans-serif] font-semibold h-[438px] leading-[normal] left-[60px] not-italic overflow-clip rounded-[20px] text-[20px] top-[936px] w-[1160px]" data-name="4-Week Cash Flow Forecast">
      <Group14 />
      <p className="absolute left-[calc(50%-349px)] text-black top-[calc(50%-12px)] whitespace-pre">{`Palce  for Closing Balance Projected Inflows and Projected Outflows Plot`}</p>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[33px] not-italic text-[20px] top-[32px] whitespace-pre-wrap" data-name="Title">
      <p className="absolute left-[33px] text-black top-[32px] w-[313px]">Identified Cash Shortfall Periods</p>
      <p className="absolute left-[33px] text-[rgba(0,0,0,0.44)] top-[60px] w-[528px]">AI-detected periods requires intervention</p>
    </div>
  );
}

function DateAndShortfall() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] items-start leading-[normal] left-[34px] not-italic text-[20px] text-black top-[30px] w-[185px] whitespace-pre-wrap" data-name="Date and Shortfall">
      <p className="relative shrink-0 w-full">Week of Feb 5</p>
      <p className="relative shrink-0 w-full">Shortfall $500,000</p>
    </div>
  );
}

function KeyDrivers() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[7px] items-start leading-[normal] left-[34px] not-italic text-[20px] text-black top-[197px] w-[386px] whitespace-pre-wrap" data-name="Key Drivers">
      <p className="relative shrink-0 w-full">Key Drivers</p>
      <p className="relative shrink-0 w-full">Large vendor payment due($850K)</p>
      <p className="relative shrink-0 w-full">Delayed recevables from 2 major clients</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <p className="col-1 ml-0 mt-0 relative row-1">Projected Cash</p>
      <p className="col-1 ml-0 mt-[41px] relative row-1">$2,700,000</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <p className="col-1 ml-0 mt-[41px] relative row-1">$3,200,000</p>
      <p className="col-1 ml-0 mt-0 relative row-1">Required Cash</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <p className="col-1 ml-0 mt-[41px] relative row-1">-$500,000</p>
      <p className="col-1 ml-0 mt-0 relative row-1">Gap</p>
    </div>
  );
}

function CashInsights() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[207px] items-center leading-[normal] left-[34px] not-italic text-[20px] text-black top-[102px] whitespace-pre" data-name="Cash insights">
      <Group4 />
      <Group5 />
      <Group6 />
    </div>
  );
}

function Status() {
  return (
    <div className="absolute bg-[#ff0408] content-stretch flex h-[28px] items-center justify-center left-[890px] px-[36px] py-[4px] top-[30px] w-[169px]" data-name="Status">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-pre">High Priority</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[33px] top-[29px]">
      <DateAndShortfall />
      <KeyDrivers />
      <CashInsights />
      <Status />
    </div>
  );
}

function IntervationTile() {
  return (
    <div className="absolute bg-[rgba(255,4,8,0.09)] border border-[red] border-solid h-[310px] left-[38px] overflow-clip rounded-[10px] top-[108px] w-[1092px]" data-name="Intervation Tile 1">
      <Group7 />
    </div>
  );
}

function DateAndShortfall1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] items-start leading-[normal] left-[34px] not-italic text-[20px] text-black top-[30px] w-[185px] whitespace-pre-wrap" data-name="Date and Shortfall">
      <p className="relative shrink-0 w-full">Week of Feb 12</p>
      <p className="relative shrink-0 w-full">Shortfall $500,000</p>
    </div>
  );
}

function KeyDrivers1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[7px] items-start leading-[normal] left-[34px] not-italic text-[20px] text-black top-[197px] w-[386px] whitespace-pre-wrap" data-name="Key Drivers">
      <p className="relative shrink-0 w-full">Key Drivers</p>
      <p className="relative shrink-0 w-full">Large vendor payment due($850K)</p>
      <p className="relative shrink-0 w-full">Delayed recevables from 2 major clients</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <p className="col-1 ml-0 mt-0 relative row-1">Projected Cash</p>
      <p className="col-1 ml-0 mt-[41px] relative row-1">$2,700,000</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <p className="col-1 ml-0 mt-[41px] relative row-1">$3,200,000</p>
      <p className="col-1 ml-0 mt-0 relative row-1">Required Cash</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <p className="col-1 ml-0 mt-[41px] relative row-1">-$500,000</p>
      <p className="col-1 ml-0 mt-0 relative row-1">Gap</p>
    </div>
  );
}

function CashInsights1() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[207px] items-center leading-[normal] left-[34px] not-italic text-[20px] text-black top-[102px] whitespace-pre" data-name="Cash insights">
      <Group15 />
      <Group16 />
      <Group17 />
    </div>
  );
}

function Status1() {
  return (
    <div className="absolute bg-[#ffc904] content-stretch flex h-[28px] items-center justify-center left-[890px] px-[36px] py-[4px] top-[30px] w-[169px]" data-name="Status">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-pre">Medium Priority</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[33px] top-[29px]">
      <DateAndShortfall1 />
      <KeyDrivers1 />
      <CashInsights1 />
      <Status1 />
    </div>
  );
}

function IntervationTile1() {
  return (
    <div className="absolute bg-[rgba(255,201,4,0.21)] border border-[#ffc904] border-solid h-[310px] left-[38px] overflow-clip rounded-[10px] top-[442px] w-[1092px]" data-name="Intervation Tile 2">
      <Group18 />
    </div>
  );
}

function IdentifedCashShortfallPeriods() {
  return (
    <div className="absolute bg-white h-[783px] left-[60px] overflow-clip rounded-[20px] top-[1399px] w-[1160px]" data-name="Identifed Cash Shortfall Periods">
      <Title />
      <IntervationTile />
      <IntervationTile1 />
    </div>
  );
}

export default function Forecasting() {
  return (
    <div className="bg-[#f3f3f3] relative size-full" data-name="Forecasting">
      <Navbar />
      <Pages />
      <AlertBox />
      <InsightsTiles />
      <ScenarioAnalysis />
      <Component4WeekCashFlowForecast />
      <IdentifedCashShortfallPeriods />
    </div>
  );
}