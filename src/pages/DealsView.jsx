import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deals } from './Deals';
import BackNavigation from '../features/deals/BackNavigation';
import DealHeader from '../features/deals/DealHeader';
import ActionButtons from '../features/deals/ActionButtons';
import AboutDeal from '../features/deals/AboutDeal';
import DealViewSearchbar from '../features/deals/DealViewSearchbar';
import TabNavigation from '../features/deals/TabNavigation';
import TabContent from '../features/deals/TabContent';
import AIDealSummary from '../features/deals/AIDealSummary';
import Attachments from '../features/deals/Attachments';



export default function DealsView() {
  const [activeTab, setActiveTab] = React.useState("Activity");
  const { id } = useParams();
  const navigate = useNavigate();
  const deal = deals.find((d) => String(d.id) === String(id));

  if (!deal) return <div className="p-5 text-center">Deal not found</div>;

  return (
    <div className="container-fluid py-3 bg-white rounded-4 m-1">
      <div className="row my-3 ms-3 me-1 align-items-start">
        <div className="col-lg-3 bg-white mt-3">
          <BackNavigation onBack={() => navigate("/deals")} />
          <DealHeader deal={deal} />
          <ActionButtons />
          <AboutDeal deal={deal} />
        </div>
        <div className="col-lg-7 bg-white p-3">
          <DealViewSearchbar />
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabContent activeTab={activeTab} />
        </div>
        <div className="col-lg-2">
          <AIDealSummary />
          <Attachments />
        </div>
      </div>
    </div>
  );
}
