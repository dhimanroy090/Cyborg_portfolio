
import PropTypes from 'prop-types';

const Testimonial = ({ name, content, avatar }) => {
  return (
    <div className="testimonial">
      <img src={avatar} alt={`${name}'s avatar`} className="testimonial-avatar" />
      <p className="testimonial-content">{content}</p>
      <p className="testimonial-name">{name}</p>
    </div>
  );
};

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Testimonial;
