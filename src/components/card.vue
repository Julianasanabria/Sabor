<template>
  <div class="custom-card">
    <img class="card-img" :src="image" alt="imagen de sabor" />
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-description">{{ description }}</p>
      <p class="card-price">{{ price }}</p>
      <button class="card-btn" @click="$emit('encargar', { title, description, price, image })">
        Comprar ahora
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuCard',
  props: {
    title: String,
    description: String,
    price: String,
    image: String
  }
}
</script>

<style scoped>
.custom-card {
  background: #222;
  border-radius: 32px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.5);
  padding: 0;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 32px 32px 0 0;
  background: #111;
}

.card-content {
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.7rem;
  line-height: 1.1;
}

.card-description {
  font-size: 1.1rem;
  color: #ddd;
  margin-bottom: 2rem;
}

.card-price {
  font-size: 1.2rem;
  color: #ffc324;
  font-weight: bold;
  margin-bottom: 1rem;
}

.card-btn {
  width: 100%;
  background: #ffc324;
  color: #111;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: auto;
}

.card-btn:hover {
  background: #ffb300;
}
</style>
