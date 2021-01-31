import faqsData from "../fixtures/faqs.json";
import { Accordian } from "../components";

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
    </Accordian>
  );
};

export default AccordianWrapper;
