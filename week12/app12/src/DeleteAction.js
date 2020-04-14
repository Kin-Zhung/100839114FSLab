import React from "react";
import axios from "axios";

const DeleteAction = props => {
    const delSelection = event => {
      event.preventDefault();
      console.log("ID selected for deletion : " + props.id)
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${props.id}`)
        .catch(err => {
          console.log(err);
        });
    };
    return (
      <>
        <button type="submit" onClick={delSelection}>
          Delete
        </button>
      </>
    );
  };
export default DeleteAction;
