<template>
	<section class="modal__wrap" v-if="modal.visibleModal">
		<div class="modal">
			<button
				class="btn__close"
				type="button"
				@keydown.enter="closeModal($event)"
				@click="closeModal($event)"
			>
				<span>닫기</span>
			</button>
			<slot></slot>
		</div>
	</section>
</template>

<script setup>
import { useModalStore } from '@/store/module/modal';

const modal = useModalStore();

const closeModal = () => {
	console.log('close modal layer');
	modal.openModal(false);
};
</script>

<style scoped lang="scss">
.modal {
	position: relative;
	min-width: 600px;
	max-width: 50%;
	height: 500px;
	padding: 24px 24px 60px 24px;
	background: $white;
	border-radius: 20px;

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

	::v-deep &__title {
		position: relative;
		width: 100%;
		padding-bottom: 20px;
		border-bottom: 1px solid $gray_500;
		font-size: 20px;
		font-weight: bold;
		text-align: left;
	}

	::v-deep &__container {
		overflow-y: auto;
		width: 100%;
		height: calc(100% - 40px);
		padding: 40px 20px;
	}

	.btn {
		&__close {
			position: absolute;
			top: 24px;
			right: 24px;
			z-index: 2;
			width: 24px;
			height: 24px;

			span {
				@include hide-text;
			}

			&:before,
			&:after {
				position: absolute;
				top: 0;
				right: 12px;
				z-index: 5;
				content: ' ';
				height: 24px;
				width: 2px;
				background-color: $gray_700;
			}

			&:before {
				transform: rotate(45deg);
			}

			&:after {
				transform: rotate(-45deg);
			}
		}
	}
}
</style>
