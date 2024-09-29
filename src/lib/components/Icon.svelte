<script module>
import ChevronDown from '~icons/lucide/chevron-down'
import Menu from '~icons/lucide/menu'
import Search from '~icons/lucide/search'
import ShoppingBag from '~icons/lucide/shopping-bag'
import { twMerge } from 'tailwind-merge'

const icons = {
  search: Search,
  menu: Menu,
  'shopping-bag': ShoppingBag,
  'chevron-down': ChevronDown,
}
</script>

<script>
let {
  id,
  color,
  size = 24,
  width,
  height,
  'stroke-width': strokeWidth,
  style,
  class: className,
  ...delegated
} = $props()
const Component = icons[id]
if (!Component) throw new Error(`No icon found for ID: ${id}`)
</script>

<Component
  class={twMerge(`[&>g]:[stroke-width:inherit]`, className)}
  {color}
  {size}
  width={width ?? size}
  stroke-width={strokeWidth}
  height={height ?? size}
  {...delegated}
/>
