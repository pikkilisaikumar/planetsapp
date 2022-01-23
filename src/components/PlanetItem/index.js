import {
  FirstContainer,
  FirstHeading,
  Image,
  Paragraph,
} from './styledComponents'

// import './index.css'

const PlanetItem = props => {
  const {each} = props
  const {name, imageUrl, description} = each
  return (
    <FirstContainer>
      <Image src={imageUrl} alt={`planet${name}`} />
      <FirstHeading>{name}</FirstHeading>
      <Paragraph>{description}</Paragraph>
    </FirstContainer>
  )
}

export default PlanetItem
