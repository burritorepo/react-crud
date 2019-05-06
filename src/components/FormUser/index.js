import React from "react";

export default function FormUser(props) {
  console.log('props', props)
  return (
    <React.Fragment>
      <form onSubmit={props.onSubmit}>
        <div className="control">
          <input name="name" className="input" type="text" placeholder="Nombre" value={props.name} onChange={props.handleChange} />
        </div>
        <div className="control">
          <input name="lastname" className="input" type="text" placeholder="Apellido" value={props.lastname} onChange={props.handleChange} />
        </div>
        <div className="control">
          <input name="git" className="input" type="text" placeholder="Usuario Git" value={props.git} onChange={props.handleChange} />
        </div>
        <div className="control">
          <input name="email" className="input" type="email" placeholder="Email" value={props.email} onChange={props.handleChange} />
        </div>
        <div className="control">
          <input name="phone" className="input" type="text" placeholder="Telefono" value={props.phone} onChange={props.handleChange} />
        </div>
        <div className="control">
          <input name="avatar" className="input" type="text" placeholder="Url Avatar" value={props.avatar} onChange={props.handleChange} />
        </div>
        <div className="control">
          <textarea name="about" rows="4" cols="4" className="input" type="text" placeholder="About" value={props.about} onChange={props.handleChange} />
        </div>
        <div className="control">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </React.Fragment>
  )
}
