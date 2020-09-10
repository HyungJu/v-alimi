<template>
  <div class="home">
    <div class="container">
      <AlimiCard />
      <AlimiCard />
      <AlimiCard />
      <AlimiCard />
    </div>
  </div>
</template>

<style scoped>
  .home{
    display: flex;
    justify-content: center;
  }
  .container{
    width: 95vw;
    max-width: 1024px;
    color: white;
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-shrink: 1;
  }
</style>
<script>
import AlimiCard from '../components/AlimiCard';
export default {
  name: 'Home',
  components: {
    AlimiCard
  }
}
</script>
