const authToken = localStorage.getItem('token');

export const organizationConfig = {
  headers: {
    Authorization: authToken,
  }
}
