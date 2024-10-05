<script>
import Icon from '$lib/components/Icon.svelte'
import SearchInput from '$lib/components/SearchInput.svelte'
import UnstyledButton from '$lib/components/UnstyledButton.svelte'
</script>

<div class="flex justify-between gap-4 bg-gray-900 px-8 py-2 text-sm text-gray-300">
  <span class="mr-auto text-white">Free shipping on domestic orders over $75!</span>
  <SearchInput />
  <a class="outline-offset-2 [&:not(:focus-visible)]:outline-none" href="/help">Help</a>
  <UnstyledButton>
    <Icon id="shopping-bag" stroke-width={1} />
  </UnstyledButton>
</div>
