<template>
	<view v-if="!loaded" class="use-loading pos-tl-c" :class="[mode]"></view>
</template>

<script>
export default {
	props: {
		loaded: {
			type: Boolean,
			default: false
		},
		mode: {
			type: String,
			default: 'pos-a'
		}
	},
	data() {
		return {
			
		};
	},
	computed: {
		
	},
	methods: {
		
	}
};
</script>

<style lang="scss"></style>
