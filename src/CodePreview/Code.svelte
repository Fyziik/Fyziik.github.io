<script lang="ts">
  export let code: string
</script>

<main>

  <fieldset>
    <p>CODE</p>
    {code}
  </fieldset>
  
</main>

<style>

  fieldset {
    background-color: #2C2F33;
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