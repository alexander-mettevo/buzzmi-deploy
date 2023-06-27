import AdditionalInformationPlan from "./items/additionalInformationPlan/AdditionalInformationPlan.jsx"
import HubWallet from "../../../pages/hub/hubMain/items/hubWallet/HubWallet.jsx"
import PrimaryLink from "../../btns/links/PrimaryLink.jsx"

const AdditionalInformation = ({ onPresetBtn = false, onMyTaskBtn = false }) => {
  return (
    <div>
      <AdditionalInformationPlan />
      <HubWallet />
      {onPresetBtn && (
        <div className="additional-information__btn mt-3">
          <PrimaryLink className="w-100 button_m double-secondary" to="/hub/add-preset">
            Add My Own Preset
          </PrimaryLink>
        </div>
      )}
      {onMyTaskBtn && (
        <div className="additional-information__btn mt-3">
          <PrimaryLink className="w-100 button_m double-secondary" to="/hub/add-preset-suggested">
            Add My Own Task
          </PrimaryLink>
        </div>
      )}
    </div>
  )
}

export default AdditionalInformation
