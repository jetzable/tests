<template>
	<div class="column">
		<div class="select-title">
			<div class="icon companies"></div>
			<h4>Empresas</h4>
		</div>
		<div v-for="item in activeItem" :key="item.id">
			<div @click.prevent="onClick(item.id)">
				<ActiveItem :company="item"/>
			</div>
		</div>
		<div v-for="item in inactiveItem" :key="item.id">
			<div>
				<InactiveItem
					:company="item"
					:questionState="requestState"
					:activeRequest="showRequest"
					:idRequest="idRequest"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import ActiveItem from "@/components/ActiveItem.vue";
	import InactiveItem from "@/components/InactiveItem.vue";

	export default {
		name: "company-column",
		components: {
			ActiveItem,
			InactiveItem
		},
		props: {
			activeItem: {
				type: Array,
				required: true
			},
			inactiveItem: {
				type: Array,
				required: true
			},
			onClick: {
				type: Function,
				required: true
			},
			showRequest: {
				type: Function,
				required: true
			},
			requestState: {
				type: Boolean,
				required: true
			},
			idRequest: {
				type: Number,
				required: true
			}
		}
	};
</script>

<style>
	.popover_content.up {
		right: -140px !important;
	}
</style>
