<template>
  <div class="home">
    <div class="container">

      <AlimiCard title="안녕하세요" author="반갑습니다"/>
      <AlimiCard  title="결핵 예방 접종안내" author="작가 2 "/>
      <AlimiCard  title="안녕하세요" author="작가 3"/>
      <AlimiCard  title="안녕하세요" author="하위"/>
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
