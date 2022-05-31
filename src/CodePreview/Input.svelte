<script lang="ts">
  export let value: string = 'Insert code here'
  export let onChange
  $: onChange(value)
</script>

<main>

  <textarea cols="30" rows="10" bind:value />

</main>

<style>
  textarea {
    width: 25%;
    height: 25%;
  }
</style>