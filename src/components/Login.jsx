

function Login({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome!</h1> : <h1>Please log in.</h1>}
    </div>
  );
}

export default Login;
