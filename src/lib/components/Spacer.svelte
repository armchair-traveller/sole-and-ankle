<script>
/** @type {{axis?:'horizontal'|'vertical', size:number}} */
let { axis, size } = $props(),
  [height, width] = $derived([axis === 'horizontal' ? 1 : size, axis === 'vertical' ? 1 : size])
</script>

<span
  class="block"
  style="width: {width}px;
  min-width: {width}px;
  height: {height}px;
  min-height: {height}px;"
></span>
