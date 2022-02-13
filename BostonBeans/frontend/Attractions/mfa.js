import museum from "../../assets/museum.jpeg";
import Attraction from "../Attraction";

const mfa = ({}) => {
  return (
    <Attraction
      imgSource={museum}
      name="Boston Museum of Fine Arts"
      distance={4.8}
      hours={[
        "10AM–5PM",
        "10AM–5PM",
        "Closed",
        "Closed",
        "10AM–5PM",
        "10AM–5PM",
        "10AM–5PM",
      ]}
      cost="Free! (if you're a student)"
      timeCommitment="4 hours"
      partySize="1+"
      website="https://www.mfa.org"
    />
  );
};

export default mfa;
