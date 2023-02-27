# vue-boilerplate

<!-- Commands -->

## Commands

```
# Project setup
$ yarn install

# Compiles and hot-reloads for development
$ yarn serve

# Compiles and minifies for production
$ yarn build

# Lints and fixes files
$ yarn lint

# Install yarn global
$ npm i -g yarn@1.22.19

# Check yarn version
$ yarn -v

# Switch back to a specific Yarn release
$ yarn set version <version>

# Check node list
$ nvm ls

# Use another version
$ nvm use <version>
```

<!-- Version -->

## Version

- Node 16.18.0
- yarn 1.22.19
- Vue 3x
- ESLint 7.x

<!-- Tech Stack -->

## Tech Stack

- **Front-end Framework:** Vue.js 3.x
- **Standard Tooling for Development:** @vue/cli
- **State Management Library:** Pinia
- **Pluggable JavaScript linter:** ESLint
- **Opinionated Code Formatter:** Pretier
- **JavaScript Version:** ES6
- **CSS Preprocessor:** SCSS

<!-- Library -->

## Library

- [sass](https://github.com/sass/dart-sass)
- [sass-loader](https://github.com/webpack-contrib/sass-loader)
- [prettier](https://github.com/prettier/prettier)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [pinia](https://github.com/vuejs/pinia)
- [axios](https://github.com/axios/axios)
- [vue-router](https://github.com/vuejs/router)

<!-- Reference -->

## Reference

- [Vue CLI Configuration](https://cli.vuejs.org/config/)

<!-- Component -->

## Component

### ◼ Modal

#### useModalStore

| Function name | Params | Type    | Default | Description          |
| ------------- | ------ | ------- | ------- | -------------------- |
| openModal     |
|               | value  | Boolean | false   | 레이어팝업 노출 여부 |

```
<template>
    <button type="button" class="btn" @click="openPopup()">MODAL</button>
    <modalLayer v-if="modal.visibleModal">
        <h2 class="modal__title">Title</h2>
        <div class="modal__container">MODAL LAYER CONTAINER</div>
    </modalLayer>
</template>

<script setup>
import { useModalStore } from '@/store/module/modal';
import modalLayer from '@/component/layer/modalLayer.vue';
const modal = useModalStore();

const openPopup = () => {
	modal.openModal(true);
};
</script>
```

### ◼ Alert

#### useDialogStore

| Function name   | Params     | Type     | Default | Description                          |
| --------------- | ---------- | -------- | ------- | ------------------------------------ |
| openAlertDialog |
|                 | message    | String   | ''      | 얼렛 메세지                          |
|                 | buttonText | String   | ''      | 얼럿 버튼명                          |
|                 | callback   | Function | null    | 얼럿 버튼 선택 시 실행되는 콜백 함수 |

```
<template>
    <button type="button" class="btn" @click="openAlert()">
        ALERT
    </button>
</template>

<script setup>
import { useDialogStore } from '@/store/module/dialog';
const dialog = useDialogStore();

const openAlert = () => {
	dialog.openAlertDialog({
        message: '얼럿 메세지를 입력해주세요',
        buttonText: '확인',
    });
};
</script>
```

### ◼ Confirm

#### useDialogStore

| Function name     | Params   | Type     | Default | Description                          |
| ----------------- | -------- | -------- | ------- | ------------------------------------ |
| openConfirmDialog |
|                   | message  | String   | ''      | 컨펌 메세지                          |
|                   | ok       | String   | ''      | 컨펌 확인 버튼명                     |
|                   | cancel   | String   | ''      | 컨펌 취소 버튼명                     |
|                   | callback | Function | null    | 컨펌 버튼 선택 시 실행되는 콜백 함수 |

```
<template>
    <button type="button" class="btn" @click="openConfirm()">
        CONFIRM
    </button>
</template>

<script setup>
import { useDialogStore } from '@/store/module/dialog';
const dialog = useDialogStore();

const checkConfirm = payload => {
	console.log('payload ===', payload);
	if (payload) {
		console.log('define function when click ok btn');
	} else {
		console.log('define function when click cancel btn');
	}
};
const openConfirm = () => {
    dialog.openConfirmDialog({
        message: '컨펌 메세지를 입력해주세요',
        cancel: '닫기',
        ok: '확인',
        callback: checkConfirm,
    });
};
</script>
```

### ◼ Selectbox

#### Props

| Key              | Type    | Default                          | Required | Description                   |
| ---------------- | ------- | -------------------------------- | -------- | ----------------------------- |
| options          | Array   | []                               | true     | 셀렉박스 옵션리스트           |
| disableSelectbox | Boolean | false                            | false    | 셀렉박스 활성/비활성          |
| defaultSelected  | String  | '선택'                           | false    | 선택한 옵션값                 |
| boxStyle         | Object  | {width: '160px', height: '40px'} | false    | 셀렉박스 스타일(width/height) |

#### Emits

| Event listener  | Event handler        | Description          |
| --------------- | -------------------- | -------------------- |
| update-selected | handlSelectedeOption | 선택한 옵션 업데이트 |

```
<template>
    <selectbox
        @update-selected="handlSelectedeOption"
        :options="selectOoptions"
        :boxStyle="selectboxStyle"
    />
</template>

<script setup>
import { reactive } from 'vue';
const selectOoptions = reactive([
	'option1',
	'option2',
	'option3',
	'option4',
	'option5',
	'option6',
	'option7',
]);
const selectboxStyle = reactive({
	width: '200px',
	height: '40px',
});
const handlSelectedeOption = option => {
	console.log('Emit event handlSelectedeOption', option);
	selectedValue.value = option;
};
</script>
```

## Pinia

### ◼ State

| Key (Level1)  | Key (Level2) | Type     | Default | Description                          |
| ------------- | ------------ | -------- | ------- | ------------------------------------ |
| visibleModal  |              | Boolean  | false   | 레이어팝업 노출 여부                 |
| alertOption   |              | Object   | {}      |
|               | open         | Boolean  | false   | 얼럿 노출 여부                       |
|               | message      | String   | ''      | 얼렛 메세지                          |
|               | buttonText   | String   | ''      | 얼럿 버튼명                          |
|               | callback     | Function | null    | 얼럿 버튼 선택 시 실행되는 콜백 함수 |
| confirmOption |              | Object   | {}      |
|               | open         | Boolean  | false   | 컨펌 노출 여부                       |
|               | message      | String   | ''      | 컨펌 메세지                          |
|               | ok           | String   | ''      | 컴펌 확인 버튼명                     |
|               | cancel       | String   | ''      | 컨펌 취소 버튼명                     |
|               | callback     | Function | null    | 컨펌 버튼 선택 시 실행되는 콜백 함수 |

### ◼ Actions

| Function name      | Params | Description     |
| ------------------ | ------ | --------------- |
| openModal          | value  | 레이어팝업 노출 |
| openAlertDialog    | value  | 얼럿 노출       |
| closeAlertDialog   | value  | 얼럿 비노출     |
| openConfirmDialog  | value  | 컨펌 노출       |
| closeConfirmDialog | value  | 컨펌 비노출     |
