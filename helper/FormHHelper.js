class FormHelper {
    setToken(token){
        localStorage.setItem("token",token)
    }
    getToken() {
        // return localStorage.getItem('token')
          if (typeof window !== 'undefined') {
              return localStorage.getItem('token')
          }
      }
    logOut() {
        localStorage.removeItem('token');
        window.location.href = '/'
      }
}

export const {
    setToken,
    getToken,
    logOut
} = new FormHelper();