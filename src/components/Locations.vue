<template>
	<div class="column">
		<div class="select-title">
			<div class="icon location"></div>
			<h4>Ubicación</h4>
		</div>
		<div v-for="location in activeItem" :key="location.id">
			<div v-if="location.active">
				<ActiveItem :company="location"/>
			</div>
		</div>
		<div v-for="location in inactiveItem" :key="location.id">
			<div v-if="location.active">
				<InactiveItem
					:company="location"
					:showRequest="showRequest"
					:showHiddenRequest="showHiddenRequest"
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
		name: "locations",
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
			idRequest: {
				type: Number,
				required: true
			},
			showHiddenRequest: {
				type: Function,
				required: true
			},
			showRequest: {
				type: Boolean,
				required: true
			}
		}
	};
</script>

