import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderChrono = () => {
    const items = timelineItemsList.map(eachTitle => ({
      title: eachTitle.title,
    }))
    return (
      <Chrono mode="VERTICAL_ALTERNATING" items={items}>
        {timelineItemsList.map(eachCard =>
          eachCard.categoryId === 'COURSE' ? (
            <CourseTimelineCard key={eachCard.id} cardDetails={eachCard} />
          ) : (
            <ProjectTimelineCard key={eachCard.id} cardDetails={eachCard} />
          ),
        )}
      </Chrono>
    )
  }

  return (
    <div className="bg-container">
      <h1 className="heading-100">
        MY JOURNEY OF <span className="heading-200">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">{renderChrono()}</div>
    </div>
  )
}

export default TimelineView
