<template>
	<div class="column" style="border: 2px solid blue;">
		<div class="select-title">
			<div class="icon warehouses"></div>
			<h4>Almacenes</h4>
		</div>
		<div v-for="warehouse in wareHouseList" :key="warehouse.key">
			<ListItem :company="warehouse" :handleCompanySelect="handleCompanySelect"/>
		</div>
		<div class="select-title">
			<div class="icon offices"></div>
			<h4>Oficinas</h4>
		</div>
		<div v-for="office in officeList" :key="office.key">
			<ListItem :company="office" :handleCompanySelect="handleCompanySelect"/>
		</div>

		<div class="select-title">
			<div class="icon stores"></div>
			<h4>Tiendas</h4>
		</div>
		<div v-for="store in storesList" :key="store.key">
			<ListItem :company="store" :handleCompanySelect="handleCompanySelect"/>
		</div>
	</div>
</template>
<script>
	import ListItem from "./ListItem";

	export default {
		name: "StorePicker",
		props: {
			storeList: {
				type: Array,
				required: true
			},
			handleCompanySelect: {
				type: Function,
				required: true
			}
		},
		computed: {
			wareHouseList() {
				return this.storeList.filter(store => {
					return store.type === "warehouse";
				});
			},
			officeList() {
				return this.storeList.filter(store => {
					return store.type === "office";
				});
			},
			storesList() {
				return this.storeList.filter(store => {
					return store.type === "store";
				});
			}
		},
		components: {
			ListItem
		}
	};
</script>
