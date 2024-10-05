<script>
import Logo from '$lib/components/Logo.svelte'
import SuperHeader from '$lib/components/SuperHeader.svelte'
</script>

<!-- Our site features two visual headers, but they should be
grouped semantically as a single header. -->
<header>
  <SuperHeader />
  <div class="align-center relative flex w-full items-center border-b border-b-gray-300 px-8 py-8">
    <Logo class="absolute top-1/2 -translate-y-1/2" />

    <nav class="flex w-full justify-center gap-8">
      {#each [['/sale', 'Sale'], ['/new', 'New Releases'], ['/men', 'Men'], ['/women', 'Women'], ['/kids', 'Kids'], ['/collections', 'Collections']] as [href, content]}
        <a class="text-lg font-medium uppercase text-gray-900 first-of-type:text-secondary" {href}
          >{content}
        </a>
      {/each}
    </nav>
  </div>
</header>
