import React, {useEffect, useState} from 'react';
import MainLayoutMenu from "./MainLayoutMenu.jsx";
import MainLayoutMenuItem from "./mainLyoutMenuItem/MainLayoutMenuItem.jsx";
import Logo from "../../reusable/assets/logo/Logo.jsx";
import MainLayoutMenuItemProfile from "./mainLyoutMenuItem/MainLayoutMenuItemProfile.jsx";

const items = [
  {
    iconSrc: '/images/layout/main-layout/notifications.svg',
    activeIconSrc: '/images/layout/main-layout/active-link/notifications.svg',
    name: 'Notifications',
    to: '/notifications'
  },
  {
    iconSrc: '/images/layout/main-layout/messages.svg',
    activeIconSrc: '/images/layout/main-layout/active-link/messages.svg',
    name: 'Messages',
    to: '/messages'
  },
  {
    iconSrc: '/images/layout/main-layout/home.svg',
    activeIconSrc: '/images/layout/main-layout/active-link/home.svg',
    name: 'Home',
    to: '/',
    showOnMobile: true
  },
  {
    iconSrc: '/images/layout/main-layout/space.svg',
    activeIconSrc: '/images/layout/main-layout/active-link/space.svg',
    name: 'Space',
    to: '/space',
    showOnMobile: true
  },
  {
    iconSrc: '/images/layout/main-layout/subscription.svg',
    activeIconSrc: '/images/layout/main-layout/active-link/subscription.svg',
    name: 'Subscription',
    to: '/subscription',
    showOnMobile: true
  },
  {
    iconSrc: '/images/layout/main-layout/challenges.svg',
    activeIconSrc: '/images/layout/main-layout/active-link/challenges.svg',
    name: 'Challenges',
    to: '/challenges',
    showOnMobile: true
  },
  {
    iconSrc: '/images/layout/main-layout/hub.svg',
    activeIconSrc: '/images/layout/main-layout/active-link/hub.svg',
    name: 'Hub',
    to: '/hub',
    showOnMobile: true
  },
  {
    iconSrc: '/images/layout/main-layout/calendar.svg',
    activeIconSrc: '/images/layout/main-layout/active-link/calendar.svg',
    name: 'Calendar',
    to: '/calendar'
  },
  {
    iconSrc: '/images/layout/main-layout/wallet.svg',
    activeIconSrc: '/images/layout/main-layout/active-link/wallet.svg',
    name: 'Wallet',
    to: '/wallet'
  },
]

const MainLayoutSidebar = () => {
  const [avatar, setAvatar] = useState(null)

  const handleGetAvatar = async () => {
    try {
      //TODO: get avatar from server
      const avatar = '/images/moc/avatar.png'
      setAvatar(avatar)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    handleGetAvatar()
  }, [])

  return (
    <div className="main-layout__sidebar">
      <div className="main-layout__logo">
        <Logo/>
      </div>
      <MainLayoutMenu>
        <MainLayoutMenuItemProfile src={avatar}/>
        {
          items.map((item) => (
            <MainLayoutMenuItem iconSrc={item.iconSrc} activeIconSrc={item.activeIconSrc} name={item.name} to={item.to}
                                key={item.to} showOnMobile={item?.showOnMobile}/>
          ))
        }
      </MainLayoutMenu>
    </div>
  );
};

export default MainLayoutSidebar;