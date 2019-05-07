import React from "react";
import { Link } from "react-router-dom";

function CardUser(props) {
  const {
    id,
    name,
    lastname,
    git,
    email,
    telefono,
    avatar,
    about,
    handleDeleteUser
  } = props;
 
  console.log('props', props)
  return (
    <article>
      <Link to={`/users/edit/${id}`}>Edit</Link>
      <span onClick={() => { handleDeleteUser(id) }}>Delete</span>
      <Link to={`/users/${id}`} className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img style={{ width: '100%' }} src={avatar} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={avatar} alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{name} {lastname}</p>
              <p className="subtitle is-6">{git}</p>
            </div>
          </div>
          <div className="content">
            {about}
          </div>
        </div>
      </Link>
    </article>
  )
}

export {
  CardUser
}
