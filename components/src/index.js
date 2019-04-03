import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApproveCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
       <ApproveCard>
      <CommentDetails 
       author="hari" 
       timeAgo="Today at 2:30pm"
       content="something"  
       avatar={faker.image.avatar()}/>
       </ApproveCard>
       <ApproveCard>
      <CommentDetails
       author="Krishna"
       timeAgo="Today at 5:30pm"
       content="new something" 
       avatar={faker.image.avatar()}/>
       </ApproveCard>
       <ApproveCard>
      <CommentDetails
       author="Govinda"
       timeAgo="Today at 8:30am"
       content="old something"
       avatar={faker.image.avatar()}/>
      </ApproveCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
