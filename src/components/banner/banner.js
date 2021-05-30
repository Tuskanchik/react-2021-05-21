import styles from './banner.module.css';
import PropTypes from 'prop-types';
import banner from './banner.jpg';

const Banner = ({ heading, description, children }) => (
  <div className={styles.banner}>
    <img src={banner} className={styles.img} alt="banner" />
    <div className={styles.caption}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
      <div>{children}</div>
    </div>
  </div>
);

Banner.propTypes = {
  heading: PropTypes.string,
}
// не понятно откуда приходят и что за пропы desription и children

export default Banner;