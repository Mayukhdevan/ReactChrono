import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {cardDetails} = props

  return (
    <div className="card-item">
      <img className="project-img" src={cardDetails.imageUrl} alt="project" />
      <div className="project-title-duration-container">
        <h1 className="project-title">{cardDetails.projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="icon" />
          <p className="duration-text">{cardDetails.duration}</p>
        </div>
      </div>
      <p className="description">{cardDetails.description}</p>
      <a className="visit-link" href={cardDetails.projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
