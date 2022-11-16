import axios from 'axios'


const Register = () => {
  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    const response = await axios.post(`${process.env.BACKEND_URL}/users/create`, {
      email: form.email.value,
      username: form.userna
    })
  }
  
  return (
    <form onSubmit={register}>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" />
      </div>
      <input type="submit" value="Register" />
    </form>
  )
}

export default Register