<script lang="ts">
  import InputField from './InputField.svelte'
  import Intro from './Intro.svelte'
  import OutputWindow from './OutputWindow.svelte'

  let pwd: string = "C:\\Users\\Fyziik:~$ ";
  let child;

  const onEnter = e => {
    child.onEnter(e)
  }
  
</script>


<div class="cover">
  <div class="frame" id="frame">
    <Intro/>
    <!--<div bind:this={container}></div>-->
    <OutputWindow {pwd} bind:this={child}/>
  </div>
  <InputField {pwd} on:enter={onEnter}/>
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

  .frameCmd {
    background-color: red;
  }

</style>