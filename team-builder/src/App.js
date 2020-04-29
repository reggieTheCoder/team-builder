//  Import the useState hook 
import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';
import './App.css';

function App() {
// set up a state property for your team members list
const [teamMembers, setTeamMembers] = useState([
  // Give the state variable you just declared a default value. You will need to keep track of a 
  // list of team members and each team member will have several key/value pairs associated with them.
  {
    id: 0,
    name:'Reginald Alford',
    email: 'reginaldalford@alfordtech.com',
    role: 'Full Stack/CEO'
  }
]);
                  
console.log(teamMembers);

const [memberToEdit, setMemberToEdit] = useState(null);

  const addTeamMember = teamMember => {
    if (teamMembers.findIndex(member => member.email === teamMember.email) === -1) {
      teamMember.id = teamMembers.length;
      setTeamMembers([...teamMembers, teamMember]);
    }
  }

  const enableEditMode = (member) => {
    setMemberToEdit(member);
  }

  const editTeamMember = member => {
    const id = teamMembers.findIndex(person => person.id === member.id);
    const newTeamMembers = teamMembers.slice();
    newTeamMembers[id] = member;
    setTeamMembers(newTeamMembers);
    setMemberToEdit(null);
  }

  const deleteTeamMember = id => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  }

  return (
    <div className="app">
      <label className="block">
        Team Builder App
      <Form addTeamMember={addTeamMember} editTeamMember={editTeamMember} memberToEdit={memberToEdit} />
      <div className="card-container">
        {teamMembers.map((member, idx) => (
          <Card key={idx} id={member.id} name={member.name} email={member.email} role={member.role} enableEditMode={enableEditMode} deleteTeamMember={deleteTeamMember} />
        ))}
      </div>
      </label>
    </div>
  );
}

export default App;