import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./components/pages/auth/login/Login.jsx"
import OtherServices from "./components/pages/auth/otherServices/OtherServices.jsx"
import Support from "./components/pages/support/Support.jsx"
import BaseLayout from "./components/layouts/baseLayout/BaseLayout.jsx"
import Dashboard from "./components/pages/dashboard/Dashboard.jsx"
import Modal from "./components/modal/Modal.jsx"
import Registration from "./components/pages/auth/registration/Registration.jsx"
import ForgotPassword from "./components/pages/auth/forgotPassword/ForgotPassword.jsx"
import ForgotCode from "./components/pages/auth/forgotCode/ForgotCode.jsx"
import ResetPassword from "./components/pages/auth/resetPassword/ResetPassword.jsx"
import Test from "./components/pages/test/Test.jsx"
import Subscription from "./components/pages/sales/subscription/Subscription.jsx"
import SubscriptionV2 from "./components/pages/sales/subscription/SubscriptionV2.jsx"
import Pay from "./components/pages/sales/pay/Pay.jsx"
import MobilePay from "./components/pages/sales/pay/MobilePay.jsx"
import ChoseRole from "./components/pages/profile/choseRole/ChoseRole.jsx"
import AddCreators from "./components/pages/profile/addCreactors/AddCreators.jsx"
import Interest from "./components/pages/profile/interest/Interest.jsx"
import AddContacts from "./components/pages/profile/addUsers/AddContacts.jsx"
import AddFriends from "./components/pages/profile/addUsers/AddFriends.jsx"
import AddPeople from "./components/pages/profile/addUsers/AddPeople.jsx"
import AuthLayout from "./components/layouts/authLayout/AuthLayout.jsx"
import ProvidePhone from "./components/pages/auth/provideContact/ProvidePhone.jsx"
import ProvidePhoneCode from "./components/pages/auth/provideContact/ProvidePhoneCode.jsx"
import ProvideEmailCode from "./components/pages/auth/provideContact/ProvideEmailCode.jsx"
import ProvideEmail from "./components/pages/auth/provideContact/ProvideEmail.jsx"
import BioPage from "./components/pages/auth/bioPage/BioPage.jsx"
import CreatePassword from "./components/pages/auth/createPassword/CreatePassword.jsx"
import FinishRegistration from "./components/pages/auth/finishRegistration/FinishRegistration.jsx"
import HubMain from "./components/pages/hub/hubMain/HubMain.jsx"
import MainLayout from "./components/layouts/mainLayout/MainLayout.jsx"
import ThemeLayout from "./components/layouts/themeLayout/ThemeLayout.jsx"
import HubAddActivity from "./components/pages/hub/hubAddActivity/HubAddActivity.jsx"
import HubTasks from "./components/pages/hub/hubTasks/HubTasks.jsx"
import HubAddPreset from "./components/pages/hub/hubPresetForm/hubAddPreset/HubAddPreset.jsx"
import HubStats from "./components/pages/hub/hubStats/HubStats.jsx"
import HubPresetPreview from "./components/pages/hub/hubPresetPreview/HubPresetPreview.jsx"
import HubTread from "./components/pages/hub/hubTread/HubTread.jsx"
import HubLeaderBoard from "./components/pages/hub/hubLeaderBoard/HubLeaderBoard.jsx"
import HubEditPreset from "./components/pages/hub/hubPresetForm/hubEditPreset/HubEditPreset.jsx"
import HubLeaders from "./components/pages/hub/hubLeaders/HubLeaders.jsx"
import HubSubscription from "./components/pages/hub/hubUpgrade/HubSubscription.jsx"
import HubCreateTask from "./components/pages/hub/hubCreateTask/HubCreateTask.jsx"
import HubTaskInfo from "./components/pages/hub/hubTaskInfo/HubTaskInfo.jsx"
import HubEditTask from "./components/pages/hub/hubEditTask/HubEditTask.jsx"

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<ThemeLayout />}>
          <Route element={<AuthLayout />}>
            <Route element={<MainLayout />}>
              <Route path="/hub">
                <Route path="" element={<HubMain />} />
                <Route path="add-activity" element={<HubAddActivity />} />
                <Route path="tasks" element={<HubTasks />} />
                <Route path="create-task" element={<HubCreateTask />} />
                <Route path="edit-task/:id" element={<HubEditTask />} />
                <Route path="stats" element={<HubStats />} />
                <Route path="leaderboard" element={<HubLeaderBoard />} />
                <Route path="leaders/:type" element={<HubLeaders />} />
                <Route path="add-preset" element={<HubAddPreset />} />
                <Route path="edit-preset" element={<HubEditPreset />} />
                <Route path="tread" element={<HubTread />} />
                <Route path="task-info/:id" element={<HubTaskInfo />} />
                <Route path="preset-preview" element={<HubPresetPreview />} />
                <Route path="upgrade" element={<HubSubscription />} />
              </Route>
              <Route path="/notifications" element={<HubMain />} />
              <Route path="/messages" element={<HubMain />} />
              <Route path="/" element={<HubMain />} />
              <Route path="/space" element={<HubMain />} />
              <Route path="/subscription" element={<HubMain />} />
              <Route path="/challenges" element={<HubMain />} />
              <Route path="/cale ndar" element={<HubMain />} />
              <Route path="/wallet" element={<HubMain />} />
              <Route path="/profile" element={<HubMain />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="/support" element={<Support />} />
          <Route path="/auth/finish" element={<FinishRegistration />} />
          <Route element={<BaseLayout bigDesk />}>
            <Route path="/sales/pay" element={<Pay />} />
          </Route>
          <Route element={<BaseLayout />}>
            <Route path="/auth/forgot-code" element={<ForgotCode />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route path="/test" element={<Test />} />

            <Route path="/auth/provide-email" element={<ProvideEmail />} />
            <Route path="/auth/provide-email-code" element={<ProvideEmailCode />} />
            <Route path="/auth/provide-phone" element={<ProvidePhone />} />
            <Route path="/auth/provide-phone-code" element={<ProvidePhoneCode />} />

            <Route path="/auth/bio" element={<BioPage />} />
            <Route path="/auth/create-password" element={<CreatePassword />} />

            <Route path="/profile/chose-role" element={<ChoseRole />} />
            <Route path="/profile/add-creators" element={<AddCreators />} />
            <Route path="/profile/add-interest" element={<Interest />} />
            <Route path="/profile/add-contacts" element={<AddContacts />} />
            <Route path="/profile/add-friends" element={<AddFriends />} />
            <Route path="/profile/add-people" element={<AddPeople />} />
            <Route path="/sales" element={<Subscription />} />
            <Route path="/sales/v2" element={<SubscriptionV2 />} />
            <Route path="/sales/mobile-pay" element={<MobilePay />} />
          </Route>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
      <Modal />
    </>
  )
}

export default App
