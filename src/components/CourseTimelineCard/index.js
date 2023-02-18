import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {cardDetails} = props
  console.log(cardDetails)

  return (
    <div className="card-item">
      <div className="card-header">
        <h1 className="card-title">{cardDetails.courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="icon" />
          <p className="duration-text">{cardDetails.duration}</p>
        </div>
      </div>
      <p className="description">{cardDetails.description}</p>
      <ul className="tags-list-container">
        {cardDetails.tagsList.map(eachTag => (
          <li key={eachTag.id} className="tags">
            <p className="tag-text">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
