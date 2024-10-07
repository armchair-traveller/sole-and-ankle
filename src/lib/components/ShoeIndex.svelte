<script>
import * as Breadcrumbs from '$lib/components/Breadcrumbs'
import Select from '$lib/components/Select.svelte'
import ShoeGrid from '$lib/components/ShoeGrid.svelte'
import ShoeSidebar from '$lib/components/ShoeSidebar.svelte'
import Spacer from '$lib/components/Spacer.svelte'

let { sortId = $bindable('newest') } = $props()
</script>

<div class="flex flex-row-reverse items-baseline">
  <div class="flex-1">
    <header class="flex items-baseline">
      <h2 class="mr-auto text-2xl font-medium">Running</h2>
      <Select label="Sort" bind:value={sortId}>
        <option value="newest">Newest Releases</option>
        <option value="price">Price</option>
      </Select>
    </header>
    <Spacer size={34} />
    <ShoeGrid />
  </div>
  <aside class="basis-[300px]">
    <Breadcrumbs.Root>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs.Root>
    <Spacer size={42} />
    <ShoeSidebar />
  </aside>
</div>
