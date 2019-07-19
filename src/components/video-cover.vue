<template>
    <div id="video-cover">
        <div class="wrapper">
            <div class="video-container">
        
                <video autoplay muted loop width="1280" height="720" id="cover">
                    <source type="video/mp4" src="../assets/videos/michi.webm">
                    <source type="video/webm" src="../assets/videos/michi.webm">
                </video>
                
                <div class="overlay">
                    <slot></slot>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['video'],
    name: 'video-cover'
  }
</script>

<style>
    #video-cover .wrapper {
        display: flex;
        flex-direction: column;
        min-height: calc(100vh - 48px);
    }

    @media (min-width: 960px) {
        #video-cover .wrapper {
            min-height: calc(100vh - 64px);
        }
    }

    #video-cover .video-container {
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    #video-cover .video-container video {
        /* Make video to at least 100% wide and tall */
        min-width: 100%;
        min-height: 100%;
        /* Setting width & height to auto prevents the browser from stretching or squishing the video */
        width: auto;
        height: auto;
        /* Center the video */
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
    }
    
    #video-cover .overlay {
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        margin: auto auto;
        box-sizing: border-box;
        padding: 2em;
        line-height: 1.5;
        text-align: center;
    }
    
    #video-cover .overlay :last-child {
        margin-bottom: 0;
    }
    
    #video-cover .overlay h1 {
        font-size: 14pt;
        font-weight: normal;
        text-shadow: 0 0 0.3em #000;
        margin: 0 0 1em;
    }
    
    #video-cover .overlay p {
        font-size: 11pt;
        text-shadow: 0 0 0.3em #000;
        margin: 1em 0;
    }
    
    #video-cover .overlay a {
        color: #fff;
    }
</style>