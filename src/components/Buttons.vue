<template>
	<div>
		<div>
			<a class="button is-report" @click.prevent="openMenu">
				<span class="icon">
					<i class="fas fa-ban"></i>
				</span>
				<span>Menu</span>
			</a>
			<a class="button is-income is-outlined" @click="!menuOpened" :class="{'disabled': isDisabled}">
				<span class="icon">
					<i class="fas fa-check"></i>
				</span>
				<span>Enviar</span>
			</a>
		</div>
		<div v-if="menuOpened">
			<SelectBranch/>
		</div>
	</div>
</template>
<script>
	import SelectBranch from "@/components/SelectBranch.vue";

	export default {
		name: "SomeComponent",
		components: {
			SelectBranch
		},
		data() {
			return {
				isDisabled: true,
				menuOpened: false
			};
		},
		methods: {
			openAlert() {
				if (!this.isDisabled) {
					alert("si");
				}
			},
			openMenu() {
				this.menuOpened = !this.menuOpened;
			}
		},
		mounted() {
			this.$root.$on("validButton", validation => {
				if (validation > 0) {
					this.isDisabled = false;
				} else if (validation < 1) {
					this.isDisabled = true;
				}
			});
		}
	};
</script>

<style>
	.select-branch {
		position: inherit;
	}
</style>
