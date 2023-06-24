import css from './Loader.module.css';
import { ThreeCircles } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <ThreeCircles
        height="100"
        width="100"
        color="#66ccff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};
export default Loader;
