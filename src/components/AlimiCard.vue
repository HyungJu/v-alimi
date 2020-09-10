<template>
    <div class="card">
        <h3 class="author">손순</h3>
        <h1 class="title">결핵 검진 안내</h1>
    </div>
</template>

<script>
  export default {
    name: 'AlimiCard',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .card{
        background: #1C1C24;
        border-radius: 15px;
        width: 13vw;
        height: 15vh;
        background: linear-gradient(359.52deg, #1C1C24 0.44%, rgba(28, 28, 36, 0.66) 99.61%);
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        padding: 1.3rem;
        .author{
            font-weight: lighter;
            margin-bottom: 8px;
            font-size: 1rem;
        }
        .title{
            font-family: GmarketSansMedium;
            font-size: 1.5rem;
        }
    }
</style>
