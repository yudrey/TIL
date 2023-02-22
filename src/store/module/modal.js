import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
	state: () => ({
		visibleModal: false,
	}),
	actions: {
		openModal(value) {
			this.visibleModal = value;
			console.log('[Pinia] openModal ===', this.visibleModal);
		},
	},
});
