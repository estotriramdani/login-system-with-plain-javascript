const contentPage = document.querySelector('.content');

contentPage.innerHTML = `<div class="login-form authPage" style="display: none;">
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
</div>
<div class="home homePageSkeleton" style="display: none">
<div class="heading">
  <h4 class="h4-skeleton"></h4>
  <h2 class="h2-skeleton"></h2>
</div>
<div class="quotes">
  <p class="p-skeleton"></p>
  <small class="small-skeleton"></small>
</div>
<div class="btn-skeleton"></div>
</div>
<div class="home homePage" style="display: none">
<div class="heading">
  <h4>Hello!</h4>
  <h2 id="userLoggedIn">estotriramdani</h2>
</div>
<div class="quotes">
  <p id="quotes">
    Anybody can make history. Only a great man can write it.
  </p>
  <small id="authorQuotes">Oscar Wilde</small>
</div>
<button id="logout" class="btn">Logout</button>
</div>`;
