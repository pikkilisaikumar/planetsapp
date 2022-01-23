// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

import {ContainerOne, Heading} from './styledComponents'

import PlanetItem from '../PlanetItem'

// import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  //   const settings = {
  //     dots: false,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   }

  return (
    <ContainerOne data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem each={each} key={each.id} />
        ))}
      </Slider>
    </ContainerOne>
  )
}

export default PlanetsSlider
