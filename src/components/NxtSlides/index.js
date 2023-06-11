import {Component} from 'react'
import NavBar from '../NavBar'
import CurrentSlide from '../CurrentSlide'
import SlideItem from '../SlideItem'

import './index.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlides extends Component {
  state = {
    slideId: initialSlidesList[0].id,
    slidesList: initialSlidesList,
  }

  getCurrentSlideObj = () => {
    const {slideId, slidesList} = this.state

    return slidesList.find(each => each.id === slideId)
  }

  updateCurrentSlide = id => {
    this.setState(prevState => {
      const {slidesList} = prevState

      const slideObj = slidesList.find(each => each.id === id)

      return {slideId: slideObj.id}
    })
  }

  renderCurrentSlide = () => {
    const slideObj = this.getCurrentSlideObj()

    const {heading, description} = slideObj

    return (
      <div className="current-slid-bg">
        <div className="current-slide-bg-card">
          <h1 className="current-slide-heading">{heading}</h1>
          <p className="current-slide-desc">{description}</p>
        </div>
      </div>
    )
  }

  renderSlidesBar = () => {
    const {slideId, slidesList} = this.state

    let slideNumber = 0

    return (
      <ul className="slides-bar-list-container">
        {slidesList.map(each => {
          slideNumber += 1
          return (
            <SlideItem
              key={each.id}
              slideNumber={slideNumber}
              slideDetails={each}
              isActive={slideId === each.id}
              updateCurrentSlide={this.updateCurrentSlide}
            />
          )
        })}
      </ul>
    )
  }

  render() {
    const {slideId} = this.state

    return (
      <div className="bg-container">
        <NavBar />

        <div className="nxt-slides-container">
          <div className="new-button-card">
            <button className="new-button">
              <img
                className="plus-icon"
                src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
                alt="new plus icon"
              />
              <p className="new-button-text">New</p>
            </button>
          </div>
          <div className="nxt-slides-main-container">
            {this.renderSlidesBar()}
            {this.renderCurrentSlide()}
          </div>
        </div>
      </div>
    )
  }
}

export default NxtSlides
