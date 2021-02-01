import faqsData from "../fixtures/faqs.json";
import { Accordian, OptForm } from "../components";

// Accordian = Accordion.. Woops!

const AccordianWrapper = () => {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      <Accordian.Frame>
        {faqsData.map((faq) => {
          return (
            <Accordian.Item key={faq.id}>
              <Accordian.Header>{faq.header}</Accordian.Header>
              <Accordian.Body>{faq.body}</Accordian.Body>
            </Accordian.Item>
          );
        })}
      </Accordian.Frame>
      <OptForm>
        <OptForm.Input
          placeholder={
            "Dont worry: Just a Placeholder, This isnt the real Netflix"
          }
        />

        <OptForm.Button>Try It out</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Don't Be Fooled! Find the real Netflix @ Netflix.com
        </OptForm.Text>
      </OptForm>
    </Accordian>
  );
};

export default AccordianWrapper;
