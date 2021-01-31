// Breaking App into "Compound Components"
import JumboContainer from "./containers/jumbo";
import { FooterContainer } from "./containers/footer";
import Accordian from "./containers/accordian";
function App() {
  return (
    <>
      <JumboContainer />
      <Accordian />
      <FooterContainer />
    </>
  );
}

export default App;
