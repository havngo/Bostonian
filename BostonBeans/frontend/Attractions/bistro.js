import bistro from "../../assets/bistro.jpeg";
import Attraction from "../Attraction";

const Bistro = ({}) => {
  return (
    <Attraction
      imgSource={bistro}
      name="Station Bistro &amp; KTV"
      distance={1.8}
      hours={[
        "3PM–2AM",
        "3PM–2AM",
        "3PM–2AM",
        "3PM–2AM",
        "3PM–2AM",
        "3PM–2AM",
        "3PM–2AM",
      ]}
      cost="$3.20-$9 per person per hour"
      timeCommitment="5 to 6 hours"
      partySize="2-25"
      website="https://www.stationktv.com"
    />
  );
};

export default Bistro;
