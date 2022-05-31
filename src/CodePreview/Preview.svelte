<script lang="ts">
  export let code: string;
</script>

<main>

  <fieldset>
    <p>PREVIEW</p>
    {@html code}
  </fieldset>

</main>

<style>
  
  fieldset {
    background-color: #2C2F33;
    border: none;
    margin: 0;
    color: green;
    text-align: left;
  }

  fieldset p {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }

</style>