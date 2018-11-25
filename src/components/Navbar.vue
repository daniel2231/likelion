<template>
    <div>
        <h2>Nav Bar</h2>
        <nav>
            <router-link class="spacing"
                         v-for="routes in links" 
                         v-bind:key="routes.id"
                         :to="`${routes.page}`">{{routes.text}}</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    data() { 
        return { 
            links: [ 
                { 
                    id: 0,
                    text: 'Home', 
                    page: '/Home' 
                },
                { 
                    id: 1,
                    text: 'Notice', 
                    page: '/Notice' 
                },
                { 
                    id: 2,
                    text: 'Projects', 
                    page: '/Projects' 
                },
                { 
                    id: 3,
                    text: 'Gallery', 
                    page: '/Gallery' 
                },
                { 
                    id: 4,
                    text: 'QNA', 
                    page: '/QNA' 
                }
                
            ] 
        } 
    }
}
</script>

<style>
.spacing {
    margin-right: 50px;
}
</style>
