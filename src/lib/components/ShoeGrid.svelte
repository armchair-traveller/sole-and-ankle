<script>
import ShoeCard from '$lib/components/ShoeCard.svelte'
import SHOES from '$lib/data'
</script>

<div class="">
  {#each SHOES as shoe (shoe.slug)}
    <ShoeCard {...shoe} />
  {/each}
</div>
