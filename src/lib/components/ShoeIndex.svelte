<script>
import * as Breadcrumbs from '$lib/components/Breadcrumbs'
import Select from '$lib/components/Select.svelte'
import ShoeGrid from '$lib/components/ShoeGrid.svelte'
import ShoeSidebar from '$lib/components/ShoeSidebar.svelte'
import Spacer from '$lib/components/Spacer.svelte'

let { sortId = $bindable('newest') } = $props()
</script>

<div class="">
  <div class="">
    <header class="">
      <h2 class="text-2xl font-medium">Running</h2>
      <Select label="Sort" bind:value={sortId}>
        <option value="newest">Newest Releases</option>
        <option value="price">Price</option>
      </Select>
    </header>
    <Spacer size={34} />
    <ShoeGrid />
  </div>
  <aside class="">
    <Breadcrumbs.Root>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs.Root>
    <Spacer size={42} />
    <ShoeSidebar />
  </aside>
</div>
