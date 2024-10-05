<script>
import Logo from '$lib/components/Logo.svelte'
import SuperHeader from '$lib/components/SuperHeader.svelte'
</script>

<!-- Our site features two visual headers, but they should be
grouped semantically as a single header. -->
<header>
  <SuperHeader />
  <div class="border-b border-b-gray-300 px-8 py-0">
    <Logo />
    <nav class="">
      {#each [['/sale', 'Sale'], ['/new', 'New Releases'], ['/men', 'Men'], ['/women', 'Women'], ['/kids', 'Kids'], ['/collections', 'Collections']] as [href, content]}
        <a class="text-lg font-medium uppercase text-gray-900 first-of-type:text-secondary" {href}
          >{content}
        </a>
      {/each}
    </nav>
  </div>
</header>
