# 郵遞區號表

<dl id="zipcode-list" class="zipcode-list">
  <template v-for="(county, i) in counties">
    <dt>{{ county }}</dt>
    <dd>
	<span v-for="(district, n) in districts[i][0]">
	  {{ district }}
      {{ districts[i][1][n] }}
	</span>
	</dd>
  </template>
</dl>

<script>
  new Vue({
    el: '#zipcode-list',
    data: window.data
  });
</script>
