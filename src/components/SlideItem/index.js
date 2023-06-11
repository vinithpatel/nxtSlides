import './index.css'

const SlideItem = props => {
  const {isActive, slideDetails, slideNumber, updateCurrentSlide} = props
  const {id, heading, description} = slideDetails

  const activeSlideClassName = isActive ? 'active-slide' : ''

  const onClickSlideItem = () => {
    updateCurrentSlide(id)
  }

  return (
    <button className="slide-button" onClick={onClickSlideItem}>
      <li className={`slide-item ${activeSlideClassName}`}>
        <p className="slide-number">{slideNumber}</p>
        <div className="slide-item-card">
          <h1 className="slide-item-heading">{heading}</h1>
          <p className="slide-item-desc">{description}</p>
        </div>
      </li>
    </button>
  )
}

export default SlideItem
