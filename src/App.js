// Breaking App into "Compound Components"
import Jumbotron from "./components/jumbotron";
// Data
import jumboData from "./fixtures/jumbo.json";

function App() {
  return (
    <div>
      <Jumbotron.Container>
        {jumboData.map((jumbo) => {
          return (
            <Jumbotron direction={jumbo.direction} key={jumbo.id}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{jumbo.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image src={jumbo.image} alt={jumbo.alt} />
              </Jumbotron.Pane>
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
    </div>
  );
}

export default App;
