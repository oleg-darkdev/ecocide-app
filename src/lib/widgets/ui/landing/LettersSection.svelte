<div class="wrapper">
  <div class="intro">
    <h1>The Story of</h1>
    <p>something very spooky</p>
  </div>
  <div class="content">
    <section class="section hero"></section>
    <!-- <section class="section gradient-purple"></section>
    <section class="section gradient-blue">
      <div class="test">
    <p>In the shadowed depths of yon ancient keep, </p>
    <p>lurketh secrets darker than the night.</p>
        <p>Beware, for in the forgotten corners of this cursed realm,</p><p> doth dwell entities of eldritch horror,</p><p> their eerie whispers echoing through the corridors like the lamentations of souls long departed.</p> -->
  <!-- </div>
    </section> -->
  </div>
  <div class="image-container">
    <img class='banner-img' src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min%203.png" alt="Animation image">
  </div>
</div>


<style>
@import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Chelsea+Market&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: black;
  font-weight: 400;
  font-style: normal;
  font-family: "Chelsea Market", system-ui;
  font-size: 34px;
}

.wrapper,
.content {
  position: relative;
  width: 100%;
  z-index: 1;
}
.intro {
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #cbd5e1;
/*   margin: 0 auto; */
}

.intro h1 {
  font-size: 40px;
  font-family: "Beth Ellen", cursive;
}
.intro p  {
    font-size: 60px;
    font-family: "Chelsea Market", system-ui;
    font-weight: bolder;
}

.content {
  overflow-x: hidden;
}

.content .section {
  width: 100%;
  height: 100vh;
}
.gradient-purple, gradient-blue {
  height: 50vh;
}
.content .section.hero {
  background-image: url(https://images.unsplash.com/photo-1512747646639-ed824d861e0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: opacity 0.5s ease;
}


.image-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  perspective: 500px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  position: relative;
  z-index: 1;
}
 
</style>