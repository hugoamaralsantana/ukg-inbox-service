import { Link } from "react-router-dom";
import TaskBox from "../parts/taskBox"
import '../../styles/taskReel.css'

// TODO: fetch data from API using props.endpoint later on

const TaskReel = (props) => {
  const data = props.data; // arr of objects
  console.log(data);
  let color;
  let action;
  if (props.reelTitle === 'Pending') {
    color = 'title gray';
    action = 'Start';
  }
  else if (props.reelTitle === 'In Progress') {
    color = 'title yellow';
    action = 'Continue';
  }
  else if (props.reelTitle === 'Completed') {
    color = 'title green';
    action = 'Review';
  }
  return (
    <div className="task-reel ml-3 mr-3 mb-1 text-white bg-darkest">
      <div className={color}>
        <h4 className="text-primary pl-2">{props.reelTitle}</h4>
      </div>
      <div className="task-box-container">
        {data.map((task) =>
          <TaskBox 
            key={task.task_id}
            data={task}
            source={props.source}
            type={props.type}
            reelTitle={props.reelTitle}
            showModal={props.showModal}
            closeModal={props.closeModal}
            action={action}
            userType={props.user}
          />)
        }
      </div>
    </div>
  )
}

export default TaskReel;