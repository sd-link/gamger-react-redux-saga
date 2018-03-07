import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import config from 'config';
import Logo from 'components/Logo';
import { login } from 'actions/index';
import Slider from 'react-animated-slider';

export class Home extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  handleClickLogin = (e) => {
    e.preventDefault();

    this.props.dispatch(login());
  };

  render() {
    const { user } = this.props;

    const content = [
      {
        title: 'Title1',
        description:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        button: 'Read More',
        image: 'media/banner/banner0.png',
 
      },
      {
        title: 'Title2',
        description:
        'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Discover',
        image: 'media/banner/banner1.png',
 
      },
      {
        title: 'Title3',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        button: 'Buy now',
        image: 'media/banner/banner2.png',
 
      }
    ];
    //<img src={item.image} />
    return (
      <div key="Home" className="app__home app__route" >
      
        
        <Slider className="slider-wrapper" duration="1000">
          {content.map((item, index) => (
            <div key={index} className="slider-content" style={{ background: `url('${item.image}') no-repeat center ` }}>
              
              <div className="inner r-flex-rows r-flex r-flex-left"> 
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>

            </div>
          ))}
        </Slider>
        <div className="app__container">
           
          <div className="r-align-center r-mt-30">
            <img src='/media/banner/banner_special.png'/>
          </div>
          <div className="r-mt-50 r-flex r-flex-center r-flex-rows">
            <div className="r-size-h3 r-font-nexa r-align-center">
              TV AS IT SHOULD BE,
            </div>
            <div className="r-size-h1 r-font-nexa r-color-primary r-align-center">
              FREE!!! 
            </div>
            <div className="r-mt-30 r-mb-20 r-size-h4 r-font-nexa r-align-center">
              EXPLORE OUR NETWORK AND BINGE FOR A GOOD CAUSE.
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Home);
