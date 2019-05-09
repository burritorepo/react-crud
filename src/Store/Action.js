const saveUser = (response) => {
  return {
    type: 'SAVE_USER',
    payload: {
      response
    }
  }
}

const saveAllUser = (response) => {
  return {
    type: 'SAVE_ALL_USER',
    payload: {
      response
    }
  }
}

export {
  saveUser,
  saveAllUser
}
