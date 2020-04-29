import React, {useState, useEffect} from 'react';
const Form = (props) => {

    const [inputs, setInputs] = useState({
      name: '',
      email: '',
      role: ''
    });
  
    useEffect(() => {
      if (props.memberToEdit) {
        setInputs({
          name: props.memberToEdit.name,
          email: props.memberToEdit.email,
          role: props.memberToEdit.role
        })
      }
    }, [props.memberToEdit])
  
    const handleChange = e => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
  
    const submitForm = e => {
      e.preventDefault();
  
      if (props.memberToEdit) {
        props.editTeamMember({ id: props.memberToEdit.id, name: e.target[0].value, email: e.target[1].value, role: e.target[2].value })
      } else {
        props.addTeamMember({ name: e.target[0].value, email: e.target[1].value, role: e.target[2].value });
      }
  
      setInputs({ name: '', email: '', role: '' });
    }
  
    return (
      <form onSubmit={submitForm} >
        <input className="input-block padded" type="text" name="name" id="name" placeholder="Your Name Here" onChange={handleChange} value={inputs.name} required />
        <input className="input-block padded" type="text" name="email" id="email" placeholder="Your email address here" onChange={handleChange} value={inputs.email} required />
        <input className="input-block padded" type="text" name="role" id="role" placeholder="Front-End Engineer" onChange={handleChange} value={inputs.role} required />
        <button className="button-block padded" type="submit">{props.memberToEdit ? 'Edit Member' : 'Add New Member'}</button>
      </form>
    )
  }
  export default Form;