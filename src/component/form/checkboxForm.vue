<template>
	<div class="checkbox">
		<label v-for="(option, index) in props.options" :key="`option${index}`">
			<input
				:type="props.checkType"
				:value="option"
				:name="props.checkType === 'radio'"
				v-model="checkedValue"
				@change="setCheckedValue(index)"
			/>
			<span>{{ option }}</span>
		</label>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['updateCheckted']);
const props = defineProps({
	options: {
		type: Array,
		required: true,
	},
	checkType: {
		type: String,
		required: true,
	},
});

const checkedValue = ref(props.checkType === 'checkbox' ? [] : '');
const setCheckedValue = index => {
	console.log('setCheckedValue');
	console.log('checkbox input type ===', props.checkType);
	if (props.checkType === 'checkbox') {
		const checkArea = document.querySelectorAll('.checkbox')[0];
		const inputAll = checkArea.querySelectorAll('input[value=전체]')[0];
		const inputs = checkArea.querySelectorAll('input[type=checkbox]');
		let result = [];
		// If 'All' checkbox
		if (index === 0) {
			if (inputAll.checked) {
				inputs.forEach(element => {
					element.checked = true;
					result.push(element.value);
				});
			} else {
				inputs.forEach(element => {
					element.checked = false;
				});
			}
			// If the others
		} else {
			let valueArr = [];
			inputs.forEach(element => {
				if (element.value !== '전체') {
					valueArr.push(element.checked);
					element.checked ? result.push(element.value) : '';
				}
			});
			// If any of the checkbox is unchecked
			if (valueArr.includes(false)) {
				inputAll.checked = false;
			} else {
				inputAll.checked = true;
				result.push(inputAll.value);
			}
		}
		checkedValue.value = result;
	}

	emit('updateChecked', checkedValue, props.checkType);
};
</script>

<style lang="sass" scoped></style>
