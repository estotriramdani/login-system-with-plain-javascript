const authPage = () => `<div class="login-form">
<div class="form loginAccount">
  <h1>Login</h1>
  <div class="input-text">
    <i class="bi bi-at"></i>
    <label for="Username" class="label">Username</label>
    <input type="text" class="input loginForm" id="usernameLogin" />
  </div>
  <div class="input-text">
    <i class="bi bi-key"></i>
    <label for="Password" class="label">Password</label>
    <input type="password" class="input loginForm" id="passwordLogin" />
  </div>
  <button class="btn" id="login">Login</button>
  <a href="#" class="cta swipeToRegister">Create account?</a>
</div>
<!-- register -->
<div class="form registerAccount">
  <h1>Register</h1>
  <div class="input-text">
    <i class="bi bi-at"></i>
    <label for="Username" class="label">Username</label>
    <input
      type="text"
      id="usernameRegister"
      class="input registerForm"
    />
  </div>
  <div class="input-text">
    <i class="bi bi-key"></i>
    <label for="Password" class="label">Password</label>
    <input
      type="password"
      id="passwordRegister"
      class="input registerForm"
    />
  </div>
  <div class="input-text">
    <i class="bi bi-key"></i>
    <label for="Password" class="label">Repeat Password</label>
    <input
      type="password"
      id="passwordRegisterVerify"
      class="input registerForm"
    />
  </div>
  <button class="btn" id="register">Register</button>
  <a href="#" class="cta swipeToLogin">Have an Account?</a>
</div>
</div>`;

export default authPage;
