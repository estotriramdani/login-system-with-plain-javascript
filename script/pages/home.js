const home = () => `<div class="home">
<div class="heading">
  <h4>Hello!</h4>
  <h2>estotriramdani</h2>
</div>
<div class="quotes">
  <p>Anybody can make history. Only a great man can write it.</p>
  <small>Oscar Wilde</small>
</div>
<button id="logout" class="btn">Logout</button>
</div>`;

const homeSkeleton = () => `<div class="home">
<div class="heading">
  <h4 class="h4-skeleton"></h4>
  <h2 class="h2-skeleton"></h2>
</div>
<div class="quotes">
  <p class="p-skeleton"></p>
  <small class="small-skeleton"></small>
</div>
<div class="btn-skeleton"></div>
</div>`;

export { homeSkeleton, home };
