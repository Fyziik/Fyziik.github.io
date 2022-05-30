<script lang="ts">
  import Code from "./Code.svelte";
  import Preview from "./Preview.svelte";

  export let title: string = "Fieldset"
  export let code: string = `
  <fieldset>
    <legend>TEXT PREVIEW</legend>
    <!-- forskellige dele af text preview -->
  </fieldset>
  `
</script>


<main>

  <p id="title">{title}</p>
  <div class="row">
    <div class="column">
      <Code {code}/>
    </div>
    <div class="column">
      <Preview/>
    </div>
  </div>

</main>


<style>

  #title {
    font-size: 40px;
    margin: 0 0 0 5%;
    padding: 0;
    font-weight: bold;
    text-align: left;
  }

  .row {
    display: flex;
  }

  .column {
    flex: 50%;
  }

</style>