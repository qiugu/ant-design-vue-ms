<template>
    <div class="pattern">
        <h1>11111111</h1>
        <p>{{info}}</p>
        <a-button type="primary" @click="changeHandler">Click ME!</a-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            singleton: null,
            singletonPattern: null,
            single: null
        }
    },
    computed: {
        info () {
            console.log(this.singleton)
            return this.singleton
        }
    },
    methods: {
        changeHandler () {
            this.singleton.publicProperty++
        }
    },
    mounted () {
        this.singletonPattern = (function(){
            let instance;
            let privateVariable = 0;
            let privateRandomNumber = Math.random;
            function init() {
                function privateMethod () {
                    console.log('i am a private');
                }
                return {
                    publicMethod: function(){
                        console.log('The public can see me');
                    },
                    publicProperty: privateVariable,
                    getRandomNumber: function(){
                        return privateRandomNumber;
                    }
                }
            }
            return {
                getInstance: function(){
                    if (!instance) {
                        instance = init();
                    }
                    return instance;
                }
            }
        }());
        this.singleton = this.singletonPattern.getInstance();
    }
}
</script>

<style lang="scss" scoped>

</style>
