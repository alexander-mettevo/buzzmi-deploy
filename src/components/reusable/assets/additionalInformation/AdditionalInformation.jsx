import React from 'react';
import AdditionalInformationPlan from "./items/additionalInformationPlan/AdditionalInformationPlan.jsx";
import HubWallet from "../../../pages/hub/hubMain/items/hubWallet/HubWallet.jsx";
import Button from "../../btns/buttons/Button.jsx";
import {Link} from "react-router-dom";

const AdditionalInformation = ({onPresetBtn, onMyTaskBtn}) => {
    return (
        <div>
            <AdditionalInformationPlan/>
            <HubWallet/>
            {onPresetBtn && <div className="additional-information__btn mt-3">
                <Button className="button_primary w-100 button_m double-secondary px-6 px-lg-7">
                  <Link to='/hub/add-preset'>
                    Add My Own Preset
                  </Link>
                </Button>
            </div>}
            {onMyTaskBtn && <div className="additional-information__btn mt-3">
                <Button className="button_primary w-100 button_m double-secondary px-6 px-lg-7">
                    Add My Own Task
                </Button>
            </div>}
        </div>
    );
};

export default AdditionalInformation;