<template>
    <div style="width: 100%;height: 60px; position: fixed">
        <Menu mode="horizontal" active-name="">
            <MenuItem name="path">
                <h1>{{ titleValue }}</h1>
            </MenuItem>
            <MenuItem name="1">
                <Icon type="ios-paper"></Icon>
                今日课程
            </MenuItem>


        </Menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props:['titleValue']
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>