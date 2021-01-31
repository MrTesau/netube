// Jumbo Render Container
// Data
import jumboData from "../fixtures/jumbo.json";
// jumbo Component
// The Method of setting an index reference file allows you to access whatever component you want in a single statement
import { Jumbotron } from "../components";

const Jumbo = () => {
  return (
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
  );
};

export default Jumbo;
