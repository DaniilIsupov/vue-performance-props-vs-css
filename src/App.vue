<template>
    <div>
        <ul>
            <li>
                <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>

            <li>
                <router-link :to="{ name: 'ListWithProps' }"
                    >ListWithProps</router-link
                >
            </li>

            <li>
                <router-link :to="{ name: 'ListWithoutProps' }"
                    >ListWithoutProps</router-link
                >
            </li>
        </ul>

        <RouterView v-slot="{ Component }">
            <Suspense>
                <template #default>
                    <component :is="Component" />
                </template>
                <template #fallback> Loading... </template>
            </Suspense>
        </RouterView>
    </div>
</template>
