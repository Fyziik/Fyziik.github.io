<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  
  const dispatch = createEventDispatcher()

  let value: string;
  export let pwd: string;
  let cmdHistory: string[] = [];
  let cmdHistoryCurrentIndex: number = -100;

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      cmdHistory.push(value)
      dispatch('enter', {cmd: value})
      value = ''
      cmdHistoryCurrentIndex = cmdHistory.length
    }

    if (e.key === 'ArrowUp') {
      if (cmdHistoryCurrentIndex > 0) cmdHistoryCurrentIndex--
      value = cmdHistory[cmdHistoryCurrentIndex]
    }

    if (e.key === 'ArrowDown') {
      if (cmdHistoryCurrentIndex < cmdHistory.length) cmdHistoryCurrentIndex++
      value = cmdHistory[cmdHistoryCurrentIndex]
    }
  }

</script>

<div class="pwd">
  <p>{pwd}</p>
  <input bind:value on:keydown={onKeyPress}/>
</div>
  
  
  

<style>

  .pwd {
    padding: 2%;
    color: #5f9980;
    position: fixed;
    bottom: 0;
    margin: 1.4% 0 0 0;
    font-size: 20px;
    display: inline-block;
  }

  input {
    border: none;
    background-color: #211c1b;
    width: 80vw;
    color: #5f9980;
    caret-color: #5f9980;
  }

  input:focus {
    outline: none
  } 

  p {
    display: inline;
  }

</style>