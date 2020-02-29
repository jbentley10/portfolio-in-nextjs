import Link from 'next/link';
import VizSensor from 'react-visibility-sensor';
import '../styles/styles.css';
import { Component } from 'react';

/* Component Layout */
class ThreeColumnIcons extends Component {
  state = {
    imgIsVisible: false
  }

  render() {
    return (
      
      <div className="three-column-icons bg-dark-background sm:block md:inline-block text-white w-full sm:text-center">
        <VizSensor
          onChange={(isVisible) => {
            this.setState({imgViz: isVisible})
          }}
        >
          <Link href={this.props.Block1Link}>
            <div 
              style={{
                opacity: this.state.imgViz ? 1 : 0,
                transform: 'translateY(' + this.state.imgViz ? 0 : '20px' + ')',
                transition: 'all 2s linear'
              }}
              className={this.props.Block1ClassName}>
              <div className="bg-cool-green three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg pb-8 margin-0-auto opacity-100 border-8 border-cool-green--reduced-opacity">
                <img alt="Pueblo Unido website mockups on phone, tablet, and desktop" className="opacity-100 px-4 py-6" src={this.props.Block1ImageSource} />
                <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-0">{this.props.Block1Copy}</h3>
              </div>
            </div>
          </Link>
        </VizSensor>
        <VizSensor
          partialVisibility
          onChange={(isVisible) => {
            this.setState({imgViz: isVisible})
          }}
        >
          <Link href={this.props.Block2Link}>
            <div 
              style={{
                opacity: this.state.imgViz ? 1 : 0.25,
                transition: 'opacity 500ms linear'
              }}
              className={this.props.Block2ClassName}>
              <div className="bg-cool-blue three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg margin-0-auto opacity-100 border-8 border-cool-blue--reduced-opacity">
                <img alt="Pueblo Unido website mockups on phone, tablet, and desktop" className="opacity-100 px-4 py-6" src={this.props.Block2ImageSource} />
                <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-8">{this.props.Block2Copy}</h3>
              </div>
            </div>
          </Link>
        </VizSensor>
      
        <VizSensor
          partialVisibility
          onChange={(isVisible) => {
            this.setState({imgViz: isVisible})
          }}
        >
          <Link href={this.props.Block3Link}>
            <div 
              style={{
                opacity: this.state.imgViz ? 1 : 0.25,
                transition: 'opacity 500ms linear'
              }}
              className={this.props.Block3ClassName}>
              <div className="bg-cool-purple three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg pb-8 margin-0-auto opacity-100 border-8 border-cool-purple--reduced-opacity">
                <img alt="Pueblo Unido website mockups on phone, tablet, and desktop" className="opacity-100 px-4 py-6" src={this.props.Block3ImageSource} />
                <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-0">{this.props.Block3Copy}</h3>
              </div>
            </div>
          </Link>
        </VizSensor>
      </div>
    )
  }
}

export default ThreeColumnIcons;