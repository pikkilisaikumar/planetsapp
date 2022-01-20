import './index.css'

const PlanetItem = props => {
  const {each} = props
  const {name, imageUrl, description} = each
  return (
    <li className="list-items-one">
      <img src={imageUrl} alt={`planet${name}`} className="image-url-styling" />
      <h1 className="name-heading-one">{name}</h1>
      <p className="description-pargraph-one">{description}</p>
    </li>
  )
}

export default PlanetItem
