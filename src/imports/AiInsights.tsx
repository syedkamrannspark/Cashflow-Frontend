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
    <div className="absolute contents left-[23px] top-[61px]" data-name="Forecasted line going up">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[23px] not-italic text-[16px] text-black top-[61px] whitespace-pre">5 Active</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[23px] top-[31px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-[16px] text-black top-[31px] whitespace-pre">AI Recommendations</p>
      <ForecastedLineGoingUp />
    </div>
  );
}

function CureentCashPosition() {
  return (
    <div className="bg-white h-[112px] overflow-clip relative rounded-[20px] shrink-0 w-[370px]" data-name="Cureent Cash position">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-black top-[28px] whitespace-pre">
      <p className="absolute left-[23px] text-[16px] top-[28px]">Total Potential Impact</p>
      <p className="absolute left-[23px] text-[20px] top-[60px]">$1,447,500</p>
    </div>
  );
}

function Component30DayForecast() {
  return (
    <div className="bg-white h-[112px] overflow-clip relative rounded-[20px] shrink-0 w-[370px]" data-name="30 Day Forecast">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[23px] not-italic text-black top-[28px] whitespace-pre">
      <p className="absolute left-[23px] text-[16px] top-[28px]">High Priority Actions</p>
      <p className="absolute left-[23px] text-[20px] top-[60px]">3 Urgent</p>
    </div>
  );
}

function AtRiskInvoices() {
  return (
    <div className="bg-white h-[112px] overflow-clip relative rounded-[20px] shrink-0 w-[370px]" data-name="At-Risk Invoices">
      <Group4 />
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
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[90px] not-italic top-[35px] whitespace-pre" data-name="Title">
      <p className="absolute left-[90px] text-[20px] text-black top-[35px]">Early Payment Incentive</p>
      <p className="absolute left-[90px] text-[16px] text-[rgba(0,0,0,0.44)] top-[67px]">Offer 2% discount for early payment on high-value invoices</p>
      <p className="absolute left-[338px] text-[16px] text-[red] top-[38px]">High Priority</p>
      <p className="absolute left-[451px] text-[#04ff3a] text-[16px] top-[38px]">89% Confidence</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[22px] top-[35px]">
      <div className="absolute bg-[rgba(78,199,255,0.16)] h-[53px] left-[22px] rounded-[8px] top-[35px] w-[50px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[31.024px] leading-[normal] left-[39.71px] not-italic text-[24px] text-[rgba(0,174,255,0.71)] top-[47.63px] w-[18.571px] whitespace-pre-wrap">$</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#4e86ff] h-[41px] left-[22px] overflow-clip rounded-[10px] top-[516px] w-[282px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[64px] not-italic text-[16px] text-white top-[11px] whitespace-pre">Implement Strategy</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute border border-black border-solid h-[41px] left-[323px] overflow-clip rounded-[10px] top-[516px] w-[190px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-49px)] not-italic text-[16px] text-black top-[calc(50%-10.5px)] whitespace-pre">View Details</p>
    </div>
  );
}

function AiInsights() {
  return (
    <div className="absolute bg-white h-[581px] left-[60px] overflow-clip rounded-[20px] top-[383px] w-[1160px]" data-name="AI insights">
      <Title />
      <Group1 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[121px] whitespace-pre">Projected Impact</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[212px] whitespace-pre">Key Details</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[240px] whitespace-pre">Taregt Inoives ....</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[268px] whitespace-pre">Taregt Inoives ....</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[296px] whitespace-pre">Taregt Inoives ....</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[324px] whitespace-pre">Taregt Inoives ....</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[380px] whitespace-pre">Recommended Actions</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[408px] whitespace-pre">Send automated early payment offer emails</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[434px] whitespace-pre">Send automated early payment offer emails</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[460px] whitespace-pre">Send automated early payment offer emails</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[149px] whitespace-pre">$425,000</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[357px] not-italic text-[16px] text-black top-[149px] whitespace-pre">7-10 Days</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[357px] not-italic text-[16px] text-black top-[121px] whitespace-pre">Implementation Time</p>
      <Frame />
      <Frame1 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-33px)] not-italic text-[16px] text-black top-[calc(50%+236.5px)] whitespace-pre">Dismiss</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[90px] not-italic top-[35px] whitespace-pre" data-name="Title">
      <p className="absolute left-[90px] text-[20px] text-black top-[35px]">Early Payment Incentive</p>
      <p className="absolute left-[90px] text-[16px] text-[rgba(0,0,0,0.44)] top-[67px]">Offer 2% discount for early payment on high-value invoices</p>
      <p className="absolute left-[338px] text-[16px] text-[red] top-[38px]">High Priority</p>
      <p className="absolute left-[451px] text-[#04ff3a] text-[16px] top-[38px]">89% Confidence</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[22px] top-[35px]">
      <div className="absolute bg-[rgba(78,199,255,0.16)] h-[53px] left-[22px] rounded-[8px] top-[35px] w-[50px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[31.024px] leading-[normal] left-[39.71px] not-italic text-[24px] text-[rgba(0,174,255,0.71)] top-[47.63px] w-[18.571px] whitespace-pre-wrap">$</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#4e86ff] h-[41px] left-[22px] overflow-clip rounded-[10px] top-[516px] w-[282px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[64px] not-italic text-[16px] text-white top-[11px] whitespace-pre">Implement Strategy</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute border border-black border-solid h-[41px] left-[323px] overflow-clip rounded-[10px] top-[516px] w-[190px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-49px)] not-italic text-[16px] text-black top-[calc(50%-10.5px)] whitespace-pre">View Details</p>
    </div>
  );
}

function AiInsights1() {
  return (
    <div className="absolute bg-white h-[581px] left-[60px] overflow-clip rounded-[20px] top-[989px] w-[1160px]" data-name="AI insights">
      <Title1 />
      <Group5 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[121px] whitespace-pre">Projected Impact</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[212px] whitespace-pre">Key Details</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[240px] whitespace-pre">Taregt Inoives ....</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[268px] whitespace-pre">Taregt Inoives ....</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[296px] whitespace-pre">Taregt Inoives ....</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[324px] whitespace-pre">Taregt Inoives ....</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[380px] whitespace-pre">Recommended Actions</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[408px] whitespace-pre">Send automated early payment offer emails</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[434px] whitespace-pre">Send automated early payment offer emails</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[460px] whitespace-pre">Send automated early payment offer emails</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[149px] whitespace-pre">$425,000</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[357px] not-italic text-[16px] text-black top-[149px] whitespace-pre">7-10 Days</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[357px] not-italic text-[16px] text-black top-[121px] whitespace-pre">Implementation Time</p>
      <Frame2 />
      <Frame3 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-33px)] not-italic text-[16px] text-black top-[calc(50%+236.5px)] whitespace-pre">Dismiss</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[90px] not-italic top-[31px] whitespace-pre" data-name="Title">
      <p className="absolute left-[90px] text-[20px] text-black top-[31px]">Early Payment Incentive</p>
      <p className="absolute left-[90px] text-[16px] text-[rgba(0,0,0,0.44)] top-[63px]">Offer 2% discount for early payment on high-value invoices</p>
      <p className="absolute left-[338px] text-[16px] text-[red] top-[34px]">High Priority</p>
      <p className="absolute left-[451px] text-[#04ff3a] text-[16px] top-[34px]">89% Confidence</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[22px] top-[30px]">
      <div className="absolute bg-[rgba(78,199,255,0.16)] h-[53px] left-[22px] rounded-[8px] top-[30px] w-[50px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[31.024px] leading-[normal] left-[39.71px] not-italic text-[24px] text-[rgba(0,174,255,0.71)] top-[42.63px] w-[18.571px] whitespace-pre-wrap">$</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[22px] top-[30px]">
      <Title2 />
      <Group6 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[207px] whitespace-pre">
      <p className="absolute left-[120px] top-[207px]">Key Details</p>
      <p className="absolute left-[120px] top-[235px]">Taregt Inoives ....</p>
      <p className="absolute left-[120px] top-[263px]">Taregt Inoives ....</p>
      <p className="absolute left-[120px] top-[291px]">Taregt Inoives ....</p>
      <p className="absolute left-[120px] top-[319px]">Taregt Inoives ....</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[375px] whitespace-pre">
      <p className="absolute left-[120px] top-[375px]">Recommended Actions</p>
      <p className="absolute left-[120px] top-[403px]">Send automated early payment offer emails</p>
      <p className="absolute left-[120px] top-[429px]">Send automated early payment offer emails</p>
      <p className="absolute left-[120px] top-[455px]">Send automated early payment offer emails</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[120px] not-italic text-[16px] text-black top-[116px] whitespace-pre">
      <p className="absolute left-[120px] top-[116px]">Projected Impact</p>
      <p className="absolute left-[120px] top-[144px]">$425,000</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[357px] not-italic text-[16px] text-black top-[116px] whitespace-pre">
      <p className="absolute left-[357px] top-[144px]">7-10 Days</p>
      <p className="absolute left-[357px] top-[116px]">Implementation Time</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#4e86ff] h-[41px] left-[22px] overflow-clip rounded-[10px] top-[511px] w-[282px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[64px] not-italic text-[16px] text-white top-[11px] whitespace-pre">Implement Strategy</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute border border-black border-solid h-[41px] left-[323px] overflow-clip rounded-[10px] top-[511px] w-[190px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-49px)] not-italic text-[16px] text-black top-[calc(50%-10.5px)] whitespace-pre">View Details</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[22px] top-[calc(50%+0.5px)] translate-y-[-50%]">
      <Group11 />
      <Group9 />
      <Group10 />
      <Group8 />
      <Group7 />
      <Button />
      <Button1 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-33px)] not-italic text-[16px] text-black top-[calc(50%+231.5px)] whitespace-pre">Dismiss</p>
    </div>
  );
}

function AiInsights2() {
  return (
    <div className="absolute bg-white h-[581px] left-[60px] overflow-clip rounded-[20px] top-[1595px] w-[1160px]" data-name="AI insights">
      <Group12 />
    </div>
  );
}

export default function AiInsights3() {
  return (
    <div className="bg-[#f3f3f3] relative size-full" data-name="AI Insights">
      <Navbar />
      <Pages />
      <InsightsTiles />
      <AiInsights />
      <AiInsights1 />
      <AiInsights2 />
    </div>
  );
}