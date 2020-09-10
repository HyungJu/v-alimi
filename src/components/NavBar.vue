<template>
    <nav>
        <div class="wrapper">
            <div class="brand">
                <p>E알리미</p>
            </div>
            <div class="right">
                <div class="select">
                    받은 알리미
                </div>
                <div class="select selected">
                    학급 알리미
                </div>
                <div class="select">
                    도움말
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    nav{
        display: flex;
        width: 100vw;
        height: 60px;
        background-color: #1C1C24;
        border-bottom: 2px solid #3b3b4b;
        justify-content: center;
    }
    .wrapper{
        width: 95vw;
        max-width: 1024px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .brand{
        p{
            font-family: GmarketSansBold,sans-serif;
            font-weight: bold;
            color: white;
            font-size: 1rem;
        }
    }
    .select{
        color: #5F5F6E;
        font-family: GmarketSansMedium,sans-serif;
        font-weight: normal;
        margin-left: 15px;
    }
    .selected{
        color: white;
    }
    .right{
        display: flex;
        justify-content: space-evenly;
    }
</style>
