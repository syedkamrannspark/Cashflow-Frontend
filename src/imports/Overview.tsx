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
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[34px] not-italic text-[16px] text-black top-[calc(50%-9px)] whitespace-pre">Cash shortfall predicted week of feb 5, Current runaway: 45 days, Review AI recommendations to optimize cash position</p>
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

function Group4() {
  return (
    <div className="absolute contents left-[218px] top-[24px]">
      <div className="absolute bg-[rgba(78,199,255,0.16)] h-[41px] left-[218px] rounded-[8px] top-[24px] w-[35px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[18px] top-[24px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-pre">30 Day Forecast</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[20px] text-black top-[62px] whitespace-pre">$2,400,000</p>
      <ForecastedLineGoingUp1 />
      <Group4 />
    </div>
  );
}

function Component30DayForecast() {
  return (
    <div className="bg-white h-[140px] overflow-clip relative rounded-[20px] shrink-0 w-[271px]" data-name="30 Day Forecast">
      <Group5 />
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

function Group6() {
  return (
    <div className="absolute contents left-[218px] top-[24px]">
      <div className="absolute bg-[rgba(78,199,255,0.16)] h-[41px] left-[218px] rounded-[8px] top-[24px] w-[35px]" />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[23px] top-[24px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-pre">At-Risk Invoices</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[20px] text-black top-[62px] whitespace-pre">$847,500</p>
      <ForecastedLineGoingUp2 />
      <Group6 />
    </div>
  );
}

function AtRiskInvoices() {
  return (
    <div className="bg-white h-[140px] overflow-clip relative rounded-[20px] shrink-0 w-[271px]" data-name="At-Risk Invoices">
      <Group7 />
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

function Group8() {
  return (
    <div className="absolute contents left-[218px] top-[24px]">
      <div className="absolute bg-[rgba(78,199,255,0.16)] h-[41px] left-[218px] rounded-[8px] top-[24px] w-[35px]" />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[23px] top-[24px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-pre">Cash Runaway</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[20px] text-black top-[62px] whitespace-pre">45 Days</p>
      <ForecastedLineGoingUp3 />
      <Group8 />
    </div>
  );
}

function CashRunaway() {
  return (
    <div className="bg-white h-[140px] overflow-clip relative rounded-[20px] shrink-0 w-[271px]" data-name="Cash runaway">
      <Group9 />
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
      <p className="absolute left-[33px] text-black top-[32px]">Cash Position Forecast</p>
      <p className="absolute left-[33px] text-[rgba(0,0,0,0.44)] top-[60px]">8 week projection with actual vs predicted values</p>
    </div>
  );
}

function CashPositionForecastGraph() {
  return (
    <div className="absolute bg-white font-['Inter:Semi_Bold',sans-serif] font-semibold h-[438px] leading-[normal] left-[60px] not-italic overflow-clip rounded-[20px] text-[20px] top-[473px] w-[1160px] whitespace-pre" data-name="Cash Position Forecast Graph">
      <Group3 />
      <p className="absolute left-[294px] text-black top-[207px]">Place for a forecast Plot of Actual Cash vs Forecasted Cash</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[33px] top-[32px]">
      <p className="absolute left-[33px] text-black top-[32px]">Cash Inflows vs Outflows</p>
      <p className="absolute left-[33px] text-[rgba(0,0,0,0.44)] top-[60px]">Weekly comparison and trend analysis</p>
    </div>
  );
}

function CashInflowsVsOutflows() {
  return (
    <div className="absolute bg-white font-['Inter:Semi_Bold',sans-serif] font-semibold h-[438px] leading-[normal] left-[60px] not-italic overflow-clip rounded-[20px] text-[20px] top-[936px] w-[1160px] whitespace-pre" data-name="Cash Inflows vs Outflows">
      <Group10 />
      <p className="absolute left-[294px] text-black top-[207px]">Place for plot of cash inflows vs cash outflows</p>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="bg-[#f3f3f3] relative size-full" data-name="Overview">
      <Navbar />
      <Pages />
      <AlertBox />
      <InsightsTiles />
      <CashPositionForecastGraph />
      <CashInflowsVsOutflows />
    </div>
  );
}