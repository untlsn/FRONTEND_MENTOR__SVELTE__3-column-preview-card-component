<script lang="ts">
import Column from '~/components/organisms/Column.svelte';
import luxury from '~/assets/icon-luxury.svg';
import sedans from '~/assets/icon-sedans.svg';
import suvs from '~/assets/icon-suvs.svg';
</script>

<main class="flex items-center justify-center min-h-screen">
  <div class="flex rounded-xl overflow-hidden">
    <Column
      color="#E28525"
      name="sedans"
      text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
    >
      <img slot="img" src={sedans} alt="sedans car">
    </Column>
    <Column
      color="#016972"
      name="suvs"
      text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
    >
      <img slot="img" src={suvs} alt="suvs car">
    </Column>
    <Column
      color="#00403F"
      name="luxury"
      text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
    >
      <img slot="img" src={luxury} alt="luxury car">
    </Column>
  </div>
</main>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
  main {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
  }
</style>
