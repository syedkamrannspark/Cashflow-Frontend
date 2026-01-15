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

function Group1() {
  return (
    <div className="absolute contents left-[33px] top-[32px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[33px] not-italic text-[20px] text-black top-[32px] whitespace-pre">Active Agents</p>
    </div>
  );
}

function ActiveAgentsAllAgentsWithIcons() {
  return (
    <div className="absolute bg-white h-[187px] left-[60px] overflow-clip rounded-[20px] top-[481px] w-[1160px]" data-name="Active Agents all agents with icons">
      <Group1 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-128px)] not-italic text-[20px] text-black top-[calc(50%+18.5px)] whitespace-pre">List of all the agents in line</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[87px] not-italic top-[35px] whitespace-pre">
      <p className="absolute left-[87px] text-[20px] text-black top-[35px]">{`Workflow 3: Reporting & Audit Prepartion`}</p>
      <p className="absolute left-[87px] text-[16px] text-[rgba(0,0,0,0.44)] top-[63px]">Automated financial report generation with intelligent data validation, discrepancy detection and continous learning</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[19px] top-[32px]">
      <Group2 />
      <div className="absolute bg-[#5b7eff] h-[52px] left-[19px] rounded-[20px] top-[32px] w-[53px]" />
    </div>
  );
}

function Workflow3Agent() {
  return (
    <div className="absolute bg-white h-[116px] left-[60px] overflow-clip rounded-[20px] top-[340px] w-[1160px]" data-name="Workflow 3 Agent">
      <Group4 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[33px] top-[32px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[33px] not-italic text-[20px] text-black top-[32px] whitespace-pre">Workflow Execution Log</p>
    </div>
  );
}

function Status() {
  return (
    <div className="absolute bg-[#04ff3a] content-stretch flex h-[28px] items-center justify-center left-[944px] px-[36px] py-[4px] top-[32px] w-[169px]" data-name="Status">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#00450f] text-[16px] whitespace-pre">Completed</p>
    </div>
  );
}

function Component4WeekCashFlowForecast() {
  return (
    <div className="absolute bg-white h-[314px] left-[60px] overflow-clip rounded-[20px] top-[693px] w-[1160px]" data-name="4-Week Cash Flow Forecast">
      <Group3 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-547px)] not-italic text-[20px] text-black top-[calc(50%-49px)] whitespace-pre">Finance Mangaer</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-547px)] not-italic text-[20px] text-black top-[calc(50%+1px)] w-[1080px] whitespace-pre-wrap">Hi team, I need the monthly financial report for October, including reconciled payments, receiptsm audit logs. Please prepare it for review.</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-547px)] not-italic text-[20px] text-black top-[calc(50%+82px)] whitespace-pre">Then the flow of agents on what they were thinking while solving it</p>
      <Status />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[33px] not-italic text-[20px] top-[32px] whitespace-pre-wrap" data-name="Title">
      <p className="absolute left-[33px] text-black top-[32px] w-[313px]">Next Steps</p>
      <p className="absolute left-[33px] text-[rgba(0,0,0,0.44)] top-[60px] w-[528px]">What would you liked to do next?</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute border border-black border-solid h-[41px] left-[calc(50%-39.5px)] overflow-clip rounded-[10px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[217px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-79.5px)] not-italic text-[20px] text-black top-[calc(50%-12.5px)] whitespace-pre">View Full Report</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute border border-black border-solid h-[41px] left-[calc(50%+196.5px)] overflow-clip rounded-[10px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[217px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-68.5px)] not-italic text-[20px] text-black top-[calc(50%-12.5px)] whitespace-pre">Email to Team</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#4e86ff] h-[41px] left-[calc(50%+431.5px)] overflow-clip rounded-[10px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[217px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-93.5px)] not-italic text-[20px] text-white top-[calc(50%-11.5px)] whitespace-pre">Schedule Follow up</p>
    </div>
  );
}

function IdentifedCashShortfallPeriods() {
  return (
    <div className="absolute bg-white h-[116px] left-[60px] overflow-clip rounded-[20px] top-[1035px] w-[1160px]" data-name="Identifed Cash Shortfall Periods">
      <Title />
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function WorkflowDemo() {
  return (
    <div className="bg-[#f3f3f3] relative size-full" data-name="Workflow Demo">
      <Navbar />
      <Pages />
      <ActiveAgentsAllAgentsWithIcons />
      <Workflow3Agent />
      <Component4WeekCashFlowForecast />
      <IdentifedCashShortfallPeriods />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[60px] not-italic text-[24px] text-black top-[249px] whitespace-pre">Agentic AI Workflow Demonstration</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[60px] not-italic text-[20px] text-[rgba(77,77,77,0.7)] top-[288px] whitespace-pre">Multi-agent collaboration for financial reporting and audit preparation</p>
    </div>
  );
}