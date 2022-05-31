<script lang="ts">
  import InputField from './InputField.svelte'
  import Intro from './Intro.svelte'

  let pwd: string = "C:\\Users\\Fyziik:~$ "
  let container;

  const onEnter = e => {
    const lastCmd = pwd + ' ' + e.detail.cmd
    //Create element & append
    const tmp = document.createElement('p')
    tmp.textContent = lastCmd
    container.appendChild(tmp)

    //Force scroll
    let frame = document.getElementById('frame')
    frame.scrollTop = frame.scrollHeight
  }

  
</script>


<div class="cover">
  <div class="frame" id="frame">
    <Intro/>
    <div class="container" bind:this={container}></div>
  </div>
  <InputField on:enter={onEnter} {pwd}/>
</div>

  
<style>

  .frame {
    height: fit-content;
    max-height: 80vh;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    color: #5f9980;
    text-align: left;
    overflow-y: scroll;
    padding: 2%;
  }

  .frame::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }

  .cover {
    position: relative;
    height: 100vh;
    background-color: #211c1b;
    background-size: cover;
    background-position: bottom right;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .cursor {
    font-size: 12px;
    height: 3em;
    width: 10px;
    display: inline-block;
    background-color: #5f9980;
    animation: blinker 1s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

</style>