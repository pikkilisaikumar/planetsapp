// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="planets-headingone">PLANETS</h1>

      <ul className="unorderlist-one">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem each={each} key={each.id} />
          ))}
        </Slider>
      </ul>
    </div>
  )
}

export default PlanetsSlider
