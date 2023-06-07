import RankRow from "./RankRow.jsx";

/**
 * This component is responsible for displaying the user's rank, as well as the level of progress to the next rank. At the moment, the data is retrieved inside the component. This function is used for this purpose.
 *
 * ``` js
 *  const getData = async () => {
 *     try {
 *       //TODO get data from server
 *       const data = await fetch('url for get data')
 *         .then(response => response.json())
 *
 *       setData(data);
 *     } catch (e) {
 *       console.error(e);
 *     }
 *   }
 * ```
 *
 * The resulting data are fed into the state, and then used to display the component.
 * They should have the following structure:
 * ```
 * {
 *         progress: (number) from 0 to 100,
 *         currentRank: {
 *           name: (string) name of current rank,
 *           image: {
 *             src: (string) url to image of current rank
 *           }
 *         },
 *         nextRank: {
 *           name: (string) name of next rank,
 *           image: {
 *             src: (string) url to image of next rank
 *           }
 *         }
 *       }
 * ```
 */
export default {
  title: "Pages/Hub/Items/Rank/Items/RankRow",
  component: RankRow,
  tags: ["autodocs"],
  argTypes: {
    withAvatar: {
      description: "Show avatar in circle chart",
      control: {
        type: 'boolean'
      },
      options: [true, false],
      defaultValue: true
    }
  }
}

const Template = (args) => <RankRow {...args} />;
export const Default = Template.bind({});
Default.args = {
  withAvatar: true
}