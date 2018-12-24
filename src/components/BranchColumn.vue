<template>
	<div class="column">
		<!-- WHAREHOUSE -->
		<div class="select-title">
			<div class="icon warehouses"></div>
			<h4>Almacenes</h4>
		</div>
		<div v-for="branch in activeItem" :key="branch.id">
			<div v-if="branch.type === 'wharehouse'" @click="selectLocation(branch.locations)">
				<ActiveItem :company="branch"/>
			</div>
		</div>
		<div v-for="branch in inactiveItem" :key="branch.id">
			<div v-if="branch.type === 'wharehouse'">
				<InactiveItem
					:company="branch"
					:showRequest="showRequest"
					:showHiddenRequest="showHiddenRequest"
					:idRequest="idRequest"
				/>
			</div>
		</div>
		<hr>

		<!-- OFFICES -->
		<div class="select-title">
			<div class="icon offices"></div>
			<h4>Oficinas</h4>
		</div>
		<div v-for="branch in activeItem" :key="branch.id">
			<div v-if="branch.type === 'office'" @click="selectLocation(branch.locations)">
				<ActiveItem :company="branch"/>
			</div>
		</div>
		<div v-for="branch in inactiveItem" :key="branch.id">
			<div v-if="branch.type === 'office'">
				<InactiveItem
					:company="branch"
					:showRequest="showRequest"
					:showHiddenRequest="showHiddenRequest"
					:idRequest="idRequest"
				/>
			</div>
		</div>

		<!-- STORES -->
		<div class="select-title">
			<div class="icon stores"></div>
			<h4>Tiendas</h4>
		</div>
		<div v-for="branch in activeItem" :key="branch.id">
			<div v-if="branch.type === 'store'" @click="selectLocation(branch.locations)">
				<ActiveItem :company="branch"/>
			</div>
		</div>
		<div v-for="branch in inactiveItem" :key="branch.id">
			<div v-if="branch.type === 'store'">
				<InactiveItem
					:company="branch"
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
		name: "branch-column",
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
			showHiddenRequest: {
				type: Function,
				required: true
			},
			showRequest: {
				type: Boolean,
				required: true
			},
			idRequest: {
				type: Number,
				required: true
			},
			selectLocation: {
				type: Function,
				required: true
			}
		}
	};
</script>
