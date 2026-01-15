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

function ForecastedLineGoingUp() {
  return (
    <div className="absolute contents left-[23px] top-[99px]" data-name="Forecasted line going up">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[23px] not-italic text-[16px] text-black top-[99px] whitespace-pre">Across 7 active invoices</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[23px] top-[30px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-pre">Total Receivables</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[20px] text-black top-[62px] whitespace-pre">$847,500</p>
      <ForecastedLineGoingUp />
    </div>
  );
}

function CureentCashPosition() {
  return (
    <div className="bg-white h-[140px] overflow-clip relative rounded-[20px] shrink-0 w-[370px]" data-name="Cureent Cash position">
      <Group1 />
    </div>
  );
}

function ForecastedLineGoingUp1() {
  return (
    <div className="absolute contents left-[23px] top-[99px]" data-name="Forecasted line going up">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[#ffc904] text-[16px] top-[99px] whitespace-pre">5 invoices require attention</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[23px] top-[30px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-pre">AI-Risk Amount</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[20px] text-black top-[62px] whitespace-pre">$731,000</p>
      <ForecastedLineGoingUp1 />
    </div>
  );
}

function Component30DayForecast() {
  return (
    <div className="bg-white h-[140px] overflow-clip relative rounded-[20px] shrink-0 w-[370px]" data-name="30 Day Forecast">
      <Group2 />
    </div>
  );
}

function ForecastedLineGoingUp2() {
  return (
    <div className="absolute contents left-[23px] top-[98px]" data-name="Forecasted line going up">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[#04ff3a] text-[16px] top-[98px] whitespace-pre">+3.2% vs last month</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[23px] top-[30px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-pre">Collection Rate</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[20px] text-black top-[62px] whitespace-pre">87.3%</p>
      <ForecastedLineGoingUp2 />
    </div>
  );
}

function AtRiskInvoices() {
  return (
    <div className="bg-white h-[140px] overflow-clip relative rounded-[20px] shrink-0 w-[370px]" data-name="At-Risk Invoices">
      <Group3 />
    </div>
  );
}

function InsightsTiles() {
  return (
    <div className="absolute content-stretch flex gap-[25px] items-center left-[60px] top-[246px]" data-name="Insights Tiles">
      <CureentCashPosition />
      <Component30DayForecast />
      <AtRiskInvoices />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[33px] not-italic text-[20px] top-[32px] whitespace-pre" data-name="Title">
      <p className="absolute left-[33px] text-black top-[32px]">Invoice Tracking</p>
      <p className="absolute left-[33px] text-[rgba(0,0,0,0.44)] top-[60px]">AI-powered risk assessment and predictions</p>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[51px] left-[36px] overflow-clip rounded-[10px] top-[108px] w-[854px]" data-name="Search bar">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[34px] not-italic text-[20px] text-[rgba(0,0,0,0.3)] top-[14px] whitespace-pre">Search by customer or invoice ID...</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-[#f2f2f2] h-[51px] overflow-clip relative rounded-[10px] w-[212px]" data-name="Dropdown">
      <div className="absolute flex items-center justify-center left-[154px] top-[14px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[20px] text-[rgba(0,0,0,0.3)] whitespace-pre">{`All `}</p>
        </div>
      </div>
      <div className="absolute flex h-[14px] items-center justify-center left-[16px] top-[19px] w-[24px]" style={{ "--transform-inner-width": "9.765625", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[20px] text-[rgba(0,0,0,0.3)] whitespace-pre">{`>`}</p>
        </div>
      </div>
    </div>
  );
}

function FiltersBar() {
  return (
    <div className="absolute contents left-[36px] top-[108px]" data-name="Filters bar">
      <SearchBar />
      <div className="absolute flex h-[51px] items-center justify-center left-[909px] top-[108px] w-[212px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

function Columns() {
  return (
    <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-pre" data-name="Columns">
      <p className="col-1 ml-0 mt-0 relative row-1">Invoice ID</p>
      <p className="col-1 ml-[141px] mt-0 relative row-1">Customer</p>
      <p className="col-1 ml-[283px] mt-0 relative row-1">Amount</p>
      <p className="col-1 ml-[410px] mt-0 relative row-1">Due Date</p>
      <p className="col-1 ml-[547px] mt-0 relative row-1">Status</p>
      <p className="col-1 ml-[663px] mt-0 relative row-1">Risk Score</p>
      <p className="col-1 ml-[780px] mt-0 relative row-1">AI Prediction</p>
      <p className="col-1 ml-[994px] mt-0 relative row-1">Actions</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e4e4e4] col-1 h-[40px] ml-[969px] mt-0 overflow-clip relative rounded-[10px] row-1 w-[103px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-37.5px)] not-italic text-[16px] text-black top-[calc(50%-10px)] whitespace-pre">Follow Up</p>
    </div>
  );
}

function Row() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Row">
      <p className="col-1 font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-[10px] not-italic relative row-1 text-[16px] text-black whitespace-pre">INV-2024-001</p>
      <p className="col-1 font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[138px] mt-[10px] not-italic relative row-1 text-[16px] text-black whitespace-pre">TechStart Inc</p>
      <p className="col-1 font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[280px] mt-[10px] not-italic relative row-1 text-[16px] text-black whitespace-pre">897,500</p>
      <p className="col-1 font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[407px] mt-[10px] not-italic relative row-1 text-[16px] text-black whitespace-pre">2024-01-15</p>
      <p className="col-1 font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[544px] mt-[10px] not-italic relative row-1 text-[#ff0408] text-[16px] whitespace-pre">Overdue</p>
      <p className="col-1 font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[660px] mt-[10px] not-italic relative row-1 text-[#ff0408] text-[16px] whitespace-pre">88</p>
      <p className="col-1 font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[777px] mt-[10px] not-italic relative row-1 text-[16px] text-black whitespace-pre">High Risk - Customer..</p>
      <Button />
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start leading-[0] relative shrink-0 w-[1072px]" data-name="Rows">
      {[...Array(6).keys()].map((_, i) => (
        <Row key={i} />
      ))}
    </div>
  );
}

function Table() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[36px] top-[203px] w-[1089px]" data-name="Table">
      <Columns />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1089 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="1089" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Rows />
    </div>
  );
}

function InvoiceTrackingTable() {
  return (
    <div className="absolute bg-white h-[559px] left-[60px] overflow-clip rounded-[20px] top-[411px] w-[1160px]" data-name="Invoice Tracking Table">
      <Title />
      <FiltersBar />
      <Table />
    </div>
  );
}

export default function Invoices() {
  return (
    <div className="bg-[#f3f3f3] relative size-full" data-name="Invoices">
      <Navbar />
      <Pages />
      <InsightsTiles />
      <InvoiceTrackingTable />
    </div>
  );
}