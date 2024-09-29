<script>
import Icon from '$lib/components/Icon.svelte'
import SearchInput from '$lib/components/SearchInput.svelte'
import UnstyledButton from '$lib/components/UnstyledButton.svelte'
</script>

<div class="bg-gray-900 text-sm text-gray-300">
  <span class="text-white">Free shipping on domestic orders over $75!</span>
  <SearchInput />
  <a class="outline-offset-2 [&:not(:focus-visible)]:outline-none" href="/help">Help</a>
  <UnstyledButton>
    <Icon id="shopping-bag" stroke-width={1} />
  </UnstyledButton>
</div>
