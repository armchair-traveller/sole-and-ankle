<script>
import ShoeCard from '$lib/components/ShoeCard.svelte'
import SHOES from '$lib/data'
</script>

<div class="flex flex-wrap justify-between gap-y-5">
  {#each SHOES as shoe (shoe.slug)}
    <ShoeCard {...shoe} />
  {/each}
</div>
