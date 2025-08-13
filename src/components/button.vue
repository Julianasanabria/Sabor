<template>
  <button 
    class="custom-button" 
    :type="buttonType" 
    @click="handleClick"
  >
    <span>{{ label }}</span>   
  </button>
</template>

<script setup>
// Definir las props que recibe el componente
const props = defineProps({
  label: {
    type: String, 
    default: "Botón"
  },
  buttonType: {
    type: String,
    default: "button"
  }
})

// Definir el evento que emite el componente
const emit = defineEmits(['click'])

// Función para manejar el click
const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
.custom-button {
  padding: 12px 24px;
  font-size: 16px;
  color: white;
  background-color: #006400;
  border: 2px solid gold;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.custom-button:hover {
  background-color: #008000;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.custom-button span {
  position: relative;
  z-index: 2;
}
.custom-button::after {
  content: "";
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 60px;
  background: radial-gradient(ellipse at center, rgba(255, 215, 0, 0.5) 0%, transparent 80%);
  opacity: 1;
  filter: blur(20px);
  pointer-events: none;
  z-index: 0;
}
</style>