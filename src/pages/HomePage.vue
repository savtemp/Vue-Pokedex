<template>
  <div class="row m-4">

    <!-- SECTION LEFT SIDE POKE-API POKEMON LIST -->
    <div class="col-md-3 text-center p-2">
      <button class="btn btn-primary w-75">Wild Pokemon</button>
    </div>
  
    <!-- SECTION ACTIVE POKEMON -->
    <div class="col-md-6">
      <div class="row justify-content-center">
        <div class="col-md-9">
          <img class="img-fluid" src="https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9rZW1vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="">
          <p><b>Pokemon Name</b></p>
          <p>Pokemon Abilities:</p>
        </div>
      </div>
    </div>
  
    <!-- SECTION SANDBOX POKEMON -->
    <div class="col-md-3 text-center p-2">
      <button class="btn btn-primary w-75">Caught Pokemon</button>
    </div>

  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
