<template>
    <div :class="['item-without-props', 'separated-by-borders']">
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<style>
.item-without-props {
    margin: 8px;
    border-color: red;
    border-style: solid;
    border-width: 0px;
}

.separated-by-borders:not(:first-of-type) {
    border-top-width: 1px;
}

.separated-by-borders:not(:last-of-type) {
    border-bottom-width: 1px;
}
</style>
