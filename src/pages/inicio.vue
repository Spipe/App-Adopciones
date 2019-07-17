<template>
  <div>
    <header>
      <navbar></navbar>
    </header>
    <main>
      <video-cover>
        <h1>Emulating background-size: cover for HTML5 video</h1>
              
        <p>Simply forcing the video to have a <code>min-width</code> and <code>min-height</code> of <code>100%</code> will stretch it to fill! Set <code>width</code> and <code>height</code> to <code>auto</code> to keep the video's aspect ratio. No need for Javascript!</p>
        
        <p>Original pen with Javascript solution: <a href="https://codepen.io/blucube/pen/BNMxvO/">Emulating background-size: cover for HTML5 video</a>.</p>
        
        <p>Example video: <a href="https://vimeo.com/channels/beeple/87099002">Pink Vynil by Beeple</a></p>
      </video-cover>
    </main>
    <pie></pie>
  </div>
</template>

<script>
  import VideoCover from '../components/video-cover.vue'
  import Navbar from '../components/navbar.vue'
  import Pie from '../components/pie.vue'

  export default {
    name: 'inicio',
    components: {
      VideoCover,
      Navbar,
      Pie
    }
  }
</script>

<style>
  .grid {
    display: grid;
    margin: 0.2;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-gap: 10px;
  }

  #catalogo {
      display: grid;
      grid-column-start: 2;
      margin: 0.25em;
      grid-template-columns: auto auto auto;
      grid-gap: 10px;
  }

  aside {
      grid-column-start: 1;
      margin: 0px;
      width: 250px;
      background-color: brown;
  }

  @media only screen and (max-width: 800px) {
      #catalogo {
          grid-template-columns: auto auto auto;
          grid-column-start: 1;
          grid-row-start: 2;
      }

      aside {
          grid-row-start: 1;
          width: 100%;
          height: 250px;
      }
  }

  @media only screen and (max-width: 500px) {
      #catalogo{
          grid-template-columns: auto auto;
          grid-column-start: 1;
          grid-row-start: 2;
      }
      aside{
          grid-row-start: 1;
          width: 100%;
          height: 250px;
      }
  }

  @media only screen and (max-width: 250px) {
      #catalogo {
          grid-template-columns: auto;
          grid-column-start: 1;
          grid-row-start: 2;
      }

      aside {
          grid-row-start: 1;
          width: 100%;
          height: 250px;
      }
  }
</style>