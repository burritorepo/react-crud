import React from "react";

import { DetailUser } from '../../containers/DetailUser'
import './detail-user.scss';

export function PageDetailUser(props) {
  console.log('props', props)
  return (
    <DetailUser {...props} />
  );
}

