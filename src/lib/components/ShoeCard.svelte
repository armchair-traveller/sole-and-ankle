<script>
import Spacer from '$lib/components/Spacer.svelte'
import { formatPrice, isNewShoe, pluralize } from '$lib/utils'

let { slug, name, imageSrc, price, salePrice, releaseDate, numOfColors } = $props()
// There are 3 variants possible, based on the props:
//   - new-release
//   - on-sale
//   - default
//
// Any shoe released in the last month will be considered
// `new-release`. Any shoe with a `salePrice` will be
// on-sale. In theory, it is possible for a shoe to be
// both on-sale and new-release, but in this case, `on-sale`
// will triumph and be the variant used.
// prettier-ignore
const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'
</script>

<a class="basis-[32%]" href="/shoe/{slug}">
  <article class="">
    <div class="relative">
      <img class="" alt="" src={imageSrc} />
      <!-- Flag -->
      <small
        class:hidden={variant == 'default'}
        class="absolute -right-1 top-3 rounded-sm font-medium {variant == 'on-sale'
          ? 'bg-primary'
          : 'bg-secondary'} px-2 py-1.5 text-sm text-white"
        >{variant == 'new-release' ? 'Just released!' : 'Sale'}
      </small>
    </div>
    <Spacer size={12} />
    <div>
      <h3 class="inline font-medium text-gray-900">{name}</h3>
      <span class="float-right" class:line-through={variant == 'on-sale'}>
        {formatPrice(price)}
      </span>
    </div>
    <div>
      <p class="inline text-gray-700">{pluralize('Color', numOfColors)}</p>
      <span class="float-right font-medium text-primary" class:hidden={variant != 'on-sale'}>
        {formatPrice(salePrice)}
      </span>
    </div>
  </article>
</a>
