import MainLayoutSidebar from "./MainLayoutSidebar.jsx";
import {withRouter} from "storybook-addon-react-router-v6";

/**
 * A sidebar to display the application menu in Main Layout. On tablets and cell phones, it moves to the bottom of the screen.
 *
 * Contains an array with menu items to output it. This array has the following appearance:
 * ```
 * const items = [
 *   {
 *     iconSrc: '/images/layout/main-layout/notifications.svg',
 *     activeIconSrc: '/images/layout/main-layout/active-link/notifications.svg',
 *     name: 'Notifications',
 *     to: '/notifications'
 *   },
 *   {
 *     iconSrc: '/images/layout/main-layout/messages.svg',
 *     activeIconSrc: '/images/layout/main-layout/active-link/messages.svg',
 *     name: 'Messages',
 *     to: '/messages'
 *   },
 *   {
 *     iconSrc: '/images/layout/main-layout/home.svg',
 *     activeIconSrc: '/images/layout/main-layout/active-link/home.svg',
 *     name: 'Home',
 *     to: '/',
 *     showOnMobile: true
 *   },
 *   {
 *     iconSrc: '/images/layout/main-layout/space.svg',
 *     activeIconSrc: '/images/layout/main-layout/active-link/space.svg',
 *     name: 'Space',
 *     to: '/space',
 *     showOnMobile: true
 *   },
 *   {
 *     iconSrc: '/images/layout/main-layout/subscription.svg',
 *     activeIconSrc: '/images/layout/main-layout/active-link/subscription.svg',
 *     name: 'Subscription',
 *     to: '/subscription',
 *     showOnMobile: true
 *   },
 *   {
 *     iconSrc: '/images/layout/main-layout/challenges.svg',
 *     activeIconSrc: '/images/layout/main-layout/active-link/challenges.svg',
 *     name: 'Challenges',
 *     to: '/challenges',
 *     showOnMobile: true
 *   },
 *   {
 *     iconSrc: '/images/layout/main-layout/hub.svg',
 *     activeIconSrc: '/images/layout/main-layout/active-link/hub.svg',
 *     name: 'Hub',
 *     to: '/hub',
 *     showOnMobile: true
 *   },
 *   {
 *     iconSrc: '/images/layout/main-layout/calendar.svg',
 *     activeIconSrc: '/images/layout/main-layout/active-link/calendar.svg',
 *     name: 'Calendar',
 *     to: '/calendar'
 *   },
 *   {
 *     iconSrc: '/images/layout/main-layout/wallet.svg',
 *     activeIconSrc: '/images/layout/main-layout/active-link/wallet.svg',
 *     name: 'Wallet',
 *     to: '/wallet'
 *   },
 * ]
 * ```
 *
 * Also, the client's avatar and a link to his profile must be loaded into this component. For this, it has a function __handleGetAvatar__. Which has the following form:
 *
 * ``` js
 *   const handleGetAvatar = async () => {
 *     try {
 *       //TODO: get avatar from server
 *       const avatar = '/images/moc/avatar.png'
 *       setAvatar(avatar)
 *     } catch (e) {
 *       console.error(e)
 *     }
 *   }
 * ```
 */
export default {
  title: 'Components/Layouts/MainLayout/MainLayoutSidebar',
  component: MainLayoutSidebar,
  tags: ['autodocs'],
  decorators: [withRouter],
}

const Template = (args) => <MainLayoutSidebar {...args} />;
export const Default = Template.bind({});