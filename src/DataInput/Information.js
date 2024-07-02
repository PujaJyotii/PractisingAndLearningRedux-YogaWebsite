import { Card } from "react-bootstrap";
import yogaImage from "../Image/yogaImage.jpeg";
import classes from "./Information.module.css";

function Information() {
  return (
    <Card className={classes.decoration}>
      <Card.Header className={classes.header}>
        The Transformative Power of Yoga: A Holistic Approach to Well-Being
      </Card.Header>
      <Card.Body>
        <Card.Img
          className={classes.img}
          src={yogaImage}
          alt="posture of yoga"
        />
        <Card.Text>
          Yoga, a practice rooted in ancient Indian tradition, has transcended
          cultural boundaries to become a global phenomenon, cherished for its
          profound benefits on physical, mental, and spiritual health. Embracing
          yoga as a daily practice offers a holistic approach to well-being that
          addresses the multifaceted nature of human existence. Physically, yoga
          enhances flexibility, strength, and balance through a series of
          postures and movements that challenge and rejuvenate the body. These
          physical benefits are complemented by improved circulation, digestion,
          and a stronger immune system. Mentally, yoga serves as a powerful tool
          for stress reduction and mental clarity. The integration of mindful
          breathing techniques and meditation fosters a sense of calm and focus,
          reducing anxiety and promoting emotional stability. Spiritually, yoga
          encourages self-awareness and inner peace, guiding practitioners on a
          journey of self-discovery and growth. The practice of yoga cultivates
          mindfulness, allowing individuals to live more consciously and in
          harmony with their surroundings. It bridges the gap between the mind
          and body, fostering a deeper connection with oneself and the world. In
          essence, yoga is not merely a form of exercise but a comprehensive
          lifestyle that promotes harmony and balance in all aspects of life. By
          incorporating yoga into daily routines, one can experience a
          transformative journey towards a healthier, more balanced, and
          fulfilled existence, embodying the true essence of well-being.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Information;
