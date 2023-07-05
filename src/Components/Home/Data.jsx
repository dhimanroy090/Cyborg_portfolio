
import Testimonial from './Testimonial';

const Data = () => {
  return (
    <div>
      <h2>Testimonials</h2>
      <Testimonial
        name="John Doe"
        content="I had a great experience using this product. It solved my problem in no time!"
        avatar="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?size=626&ext=jpg"
      />
      <Testimonial
        name="Jane Smith"
        content="The customer support team was incredibly helpful and responsive. I highly recommend this company!"
        avatar="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg"
      />
    </div>
  );
};

export default Data;
