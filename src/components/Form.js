import React from "react";

function FormUser(props) {
  const {
    name,
    lastname,
    git,
    email,
    phone,
    avatar,
    about,
    onSubmit,
    onChange
  } = props;

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <div className="control">
          <input name="name" className="input" type="text" placeholder="Nombre" value={name} onChange={onChange} />
        </div>
        <div className="control">
          <input name="lastname" className="input" type="text" placeholder="Apellido" value={lastname} onChange={onChange} />
        </div>
        <div className="control">
          <input name="git" className="input" type="text" placeholder="Usuario Git" value={git} onChange={onChange} />
        </div>
        <div className="control">
          <input name="email" className="input" type="email" placeholder="Email" value={email} onChange={onChange} />
        </div>
        <div className="control">
          <input name="phone" className="input" type="text" placeholder="Telefono" value={phone} onChange={onChange} />
        </div>
        <div className="control">
          <input name="avatar" className="input" type="text" placeholder="Url Avatar" value={avatar} onChange={onChange} />
        </div>
        <div className="control">
          <textarea name="about" rows="4" cols="4" className="input" type="text" placeholder="About" value={about} onChange={onChange} />
        </div>
        <div className="control">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </React.Fragment>
  )
}

export {
  FormUser
}
