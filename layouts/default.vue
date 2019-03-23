<template>
  <div>
    <nav class="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
      	<a class="navbar-brand" href="/"><strong>Der Geographische Blick</strong></a>
      	<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      	<span class="navbar-toggler-icon"></span>
      	</button>
      	<div class="navbar-collapse collapse" id="navbarColor02" style="">
      		<ul class="navbar-nav mr-auto d-flex align-items-center">
      			<li class="nav-item">
      			<a class="nav-link" href="./index.html">Intro <span class="sr-only">(current)</span></a>
      			</li>
      			<li class="nav-item">
      			<a class="nav-link" href="./article.html">Culture</a>
      			</li>
      			<li class="nav-item">
      			<a class="nav-link" href="./article.html">Tech</a>
      			</li>
      			<li class="nav-item">
      			<a class="nav-link" href="./article.html">Politics</a>
      			</li>
      			<li class="nav-item">
      			<a class="nav-link" href="./article.html">Health</a>
      			</li>
      			<li class="nav-item">
      			<a class="nav-link" href="./article.html">Collections</a>
      			</li>
      			<li class="nav-item">
      			<a class="nav-link" href="./about.html">About</a>
      			</li>
      			<li class="nav-item">
      			<a class="nav-link" href="./docs.html">Template <span class="badge badge-secondary">docs</span></a>
      			</li>
      		</ul>
      		<ul class="navbar-nav ml-auto d-flex align-items-center">
      			<li class="nav-item highlight">

      			</li>
      		</ul>
      	</div>
      </div>
    </nav>
      <!-- End Navbar -->
    <nuxt/>

    <div class="container mt-5">
    	<footer class="bg-white border-top p-3 text-muted small">
    	<div class="row align-items-center justify-content-between">
    		<div>
          <span class="navbar-brand mr-2"><strong>Der Geographische Blick</strong></span>
    		</div>
        <div>Copyright &copy;
          <script>document.write(new Date().getFullYear())</script>
           . All rights reserved.
         </div>
    		<!-- <div>
    			Made with <a target="_blank" class="text-secondary font-weight-bold" href="https://www.wowthemes.net/mundana-free-html-bootstrap-template/">Mundana Theme</a> by WowThemes.net.
    		</div> -->
    	</div>
    	</footer>
    </div>
  </div>
</template>

<script>
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
</script>

<style>

</style>
