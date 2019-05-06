import React from "react";
import { CreateUser } from '../../containers/CreateUser'

import './create.scss';
export function PageCreateUser(props) {
  return (
    <CreateUser {...props} />
  );
}
