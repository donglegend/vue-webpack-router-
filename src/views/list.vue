<template>
	<div>
		<p v-for="v in list" v-text="v"></p>
	</div>
</template>

<style>
	p{
		width: 100%;
		padding: 10px 0;
		background: #ccc;
		-webkit-transition: all .3s;
		-moz-transition: all .3s;
		-ms-transition: all .3s;
		transition: all .3s;
	}
	p:hover{
		background: #f90;
	}
</style>

<script>
	var arr = ['最强厨霸','逆战仙魔', '暴风法神', '恐怖广播', '超品相师'];
	
	export default {
		data () {
			return {
				list: arr
			}
		}
	}
</script>