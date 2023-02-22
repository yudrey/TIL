<template>
	<section class="confirm__wrap">
		<div class="confirm">
			<div
				class="confirm__message"
				v-html="confirmDialog.confirmOption.message || ''"
			></div>
			<footer class="btn__wrap">
				<button
					class="btn__cancel"
					type="button"
					@keydown.enter="closeConfirm(false)"
					@click="closeConfirm(false)"
				>
					{{ confirmDialog.confirmOption.cancel || '취소' }}
				</button>
				<button
					class="btn__ok"
					type="button"
					@keydown.enter="closeConfirm(true)"
					@click="closeConfirm(true)"
				>
					{{ confirmDialog.confirmOption.ok || '확인' }}
				</button>
			</footer>
		</div>
	</section>
</template>

<script setup>
import { useDialogStore } from '@/store/module/dialog';

const confirmDialog = useDialogStore();

const closeConfirm = value => {
	console.log('close confirm');
	confirmDialog.closeConfirmDialog(value);
};
</script>

<style scoped lang="scss">
.confirm {
	overflow: hidden;
	min-width: 400px;
	max-width: 800px;
	border-radius: 20px;
	box-sizing: border-box;
	background: white;

	&__wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 150;
		background-color: rgba(0, 0, 0, 0.5);
	}

	&__message {
		padding: 60px 40px;
		font-size: 18px;
		text-align: center;
	}

	.btn {
		&__wrap {
			display: flex;

			button {
				flex: 1;
				height: 80px;
				font-size: 18px;
				font-weight: 500;
			}
		}

		&__ok {
			background: black;
			color: white;
		}

		&__cancel {
			background: gray;
		}
	}
}
</style>
