import React from 'react';
import TaskReel from "../parts/taskReel";
import '../../styles/outgoing.css'

const pendingTaskReelURL = 'performanceReview/outgoing/pending';
const inProgressTaskReelURL = 'performanceReview/outgoing/inProgress';
const completedTaskReelURL = 'performanceReview/outgoing/completed';

const Outgoing = (props) => {
    return (
        <div className='outgoing d-flex bg-dark ml-3 mr-3 mb-2 mt-2 flex-column justify-content-center'>
            <h1 className="text-white ml-5 pt-1">Outgoing</h1>
            {/* these endpoints are passed to components where we will fetch data from the API later on*/}
            <div className='task-reel-container d-flex bg-dark m-2 align-items-end justify-content-center h-95'>
                <TaskReel source='outgoing' type={props.type} name={props.reelItems[0]} endpoint={pendingTaskReelURL} user={props.user}/>
                <TaskReel source='outgoing' type={props.type} name={props.reelItems[1]} endpoint={inProgressTaskReelURL} user={props.user}/>
                <TaskReel source='outgoing' type={props.type} name={props.reelItems[2]} endpoint={completedTaskReelURL} user={props.user}/>
            </div>
        </div>
    )
}

  export default Outgoing;
