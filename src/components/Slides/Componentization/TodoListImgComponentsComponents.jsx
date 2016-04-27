import React from 'react';

import { Slide } from '../../Presentation';

class TodoListImgComponentsComponents extends React.Component {
  render () {
    return (
      <Slide title="todo list">
        <div className="todolist-container">
          <div className="new-todo">
            <input placeholder="What do you have to do?" style={{border: "7px solid lime"}} />
            <div className="button" style={{border: "7px solid orange"}}>
              Add
            </div>
          </div>
          <div className="todolist">
            <ul>
              <li style={{border: "7px solid red"}}>learn about react</li>
              <li style={{border: "7px solid red", marginTop: "5px"}}>go to the grocery store</li>
            </ul>
          </div>
        </div>
      </Slide>
    );
  }
}

export default TodoListImgComponentsComponents;
