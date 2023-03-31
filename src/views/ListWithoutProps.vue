<template>
    <div>
        <pre>src\views\ListWithoutProps.vue</pre>

        <ItemWithoutProps v-for="item in items" :key="item.key">
            {{ item.text }}
        </ItemWithoutProps>
    </div>
</template>

<script setup lang="ts">
import ItemWithoutProps from '../components/ItemWithoutProps.vue';

const items = new Array(4096).fill(0).map((item, index) => ({
    text: Math.random().toString(36).slice(2, 7),
    key: index
}));
</script>
