<script>
import { Animal } from '../model/animal.entity.js';
import { AnimalService } from '../services/animal.service.js';

export default {
  name: "animals.card",
  data() {
    return {
      animals: []
    }
  },
  created() {
    const animalService = new AnimalService();
    animalService.getAllAnimals().then(response => {
      this.animals = response.data.map(animal => new Animal(animal.name, animal.image, animal.habitat, animal.description, animal.family));
    });
  }
}
</script>

<template>
  <div>
    <pv-card v-for="(animal, index) in animals" :key="index">
      <template #title>
        {{ animal.name }}
      </template>
      <template #content>
        <img :src="animal.image" alt="animal image">
        <p>Habitat: {{ animal.habitat }}</p>
        <p>Description: {{ animal.description }}</p>
        <p>Family: {{ animal.family }}</p>
      </template>
      <template #footer>
        <pv-rating v-model="animal.rating"></pv-rating>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>

</style>