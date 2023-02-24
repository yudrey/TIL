import { defineStore } from 'pinia';

export const useDialogStore = defineStore('dialog', {
	state: () => ({
		alertOption: {
			open: false,
			message: '',
			buttonText: '',
			callback: () => {},
		},
		confirmOption: {
			open: false,
			message: '',
			ok: '',
			cancel: '',
			callback: () => {},
		},
	}),
	actions: {
		openAlertDialog(value) {
			this.alertOption = {
				open: true,
				message: value.message,
				buttonText: value.buttonText,
				callback: value.callback
					? value.callback
					: (this.alertOption.open = false),
			};
			console.log('[Pinia] openAlertDialog ===', this.alertOption);
		},
		closeAlertDialog(value) {
			this.alertOption = {
				open: false,
				message: '',
				buttonText: '',
				callback: this.alertOption.callback
					? this.alertOption.callback(value)
					: (this.alertOption.open = false),
			};
			console.log('[Pinia] closeAlertDialog ===', this.alertOption);
		},
		openConfirmDialog(value) {
			this.confirmOption = {
				open: true,
				message: value.message,
				cancel: value.cancel,
				ok: value.ok,
				callback: value.callback
					? value.callback
					: console.error(
							'[Pinia] openConfirmDialog ::: callback 함수가 정의되지 않았습니다.'
					  ),
			};
			console.log('[Pinia] openConfirmDialog ===', this.confirmOption);
		},
		closeConfirmDialog(value) {
			this.confirmOption = {
				open: false,
				message: '',
				cancel: '',
				ok: '',
				callback: this.confirmOption.callback
					? this.confirmOption.callback(value)
					: console.error(
							'[Pinia] closeConfirmDialog ::: callback 함수가 정의되지 않았습니다.'
					  ),
			};
			console.log('[Pinia] closeConfirmDialog ===', this.confirmOption);
		},
	},
});
