import { Service } from './Service';

class UserService extends Service {
  deleteUser(id) {
    return this.request({
      url: `users/${id}`,
      method: 'DELETE'
    })
  }

  getUser(id) {
    return this.request({
      url: `users/${id}`
    })
  }

  saveUser({id, body, headers}) {
    return this.request({
      url: `users/${id}`,
      method: 'PUT',
      body,
      headers
    })
  }

  getAllUser() {
    return this.request({
      url: `users`
    })
  }
}

export default new UserService();

