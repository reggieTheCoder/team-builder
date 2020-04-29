import React from 'react'

const Card = props => {
    return (
      <div className="card">
        <ul className="team-member padded">
          <li>Name: {props.name}</li>
          <li>Email: {props.email}</li>
          <li>Role: {props.role}</li>
        </ul>
        <button className="edit button-block" onClick={() => props.enableEditMode({ id: props.id, name: props.name, email: props.email, role: props.role })}>Edit</button>
        <button className="delete button-block" onClick={() => props.deleteTeamMember(props.id)}>Delete</button>
      </div>
    )
  }
  
  export default Card