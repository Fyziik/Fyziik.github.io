<script lang="ts">
  import Code from "./Code.svelte";
  import Preview from "./Preview.svelte";
  import Input from "./Input.svelte";

  export let title: string = "Fieldset"
  export let example: string = `
  <fieldset>
    <legend>TEXT PREVIEW</legend>
    <!-- forskellige dele af text preview -->
  </fieldset>
  `

  let userInput: string;

</script>


<main>

  <Input onChange={newValue => userInput = newValue} />

  <p class="title">{'User specified'}</p>
  <div class="row">
    <div class="column">
      <Code code={userInput}/>
    </div>
    <div class="column">
      <Preview code={userInput}/>
    </div>
  </div>

  <div id="spacer">---------------------------------------------------------------------------------------</div>

  <p class="title">{title}</p>
  <div class="row">
    <div class="column">
      <Code code={example}/>
    </div>
    <div class="column">
      <Preview code={example}/>
    </div>
  </div>

</main>


<style>

  .title {
    font-size: 40px;
    margin: 0 0 1% 0;
    padding: 0;
    font-weight: bold;
    text-align: center;
  }

  #spacer {
    width: 100%;
    margin: 2% 0;
    font-size: 50px;
    font-weight: bold;
  }

  .row {
    display: flex;
  }

  .column {
    width: 40%;
    margin: 0% 5%;
  }

</style>