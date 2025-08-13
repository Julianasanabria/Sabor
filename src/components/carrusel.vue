<template>
  <div class="carrusel-full">
    <q-option-group
      v-model="controlType"
      :options="controlTypeOptions"
      color="purple"
      inline
      class="q-mb-md"
    />
    <q-carousel
      v-model="slide"
      swipeable
      animated
      navigation
      :navigation-position="controlType"
      control-color="white"
      padding
      arrows
      height="100%"
      class="while"
    >
      <q-carousel-slide
        name="burger"
        img-src="../img/hamburguesa.jpg"
      >
        <div class="text-container">
          <div class="text-content">
            <div class="text-h4 text-weight-bold titulo-amarillo">Hamburguesas</div>
            <div class="text-h5 text-weight-bold titulo-amarillo">Comidas rapidas</div>
            <div class="text-subtitle1 centrado">Las mas deliciosas hamburguesas jamas antes vistas</div>
            <div class="text-precio titulo-amarillo centrado">$20.000 - 50.000</div>
          </div>
        </div>
        <div class="boton-container">
          <q-btn label="Ver Hamburguesas" @click="$emit('seleccionarTipo', 'hamburguesa')" />
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide
        name="hotdog"
        img-src="../img/perro.png"
      >
        <div class="text-container">
          <div class="text-content">
            <div class="text-h4 text-weight-bold titulo-amarillo">Perros Calientes</div>
            <div class="text-h5 text-weight-bold titulo-amarillo">Gourmet</div>
            <div class="text-subtitle1 centrado">Salchichas premium con toppings especiales</div>
            <div class="text-precio titulo-amarillo centrado">$15.000 - 25.000</div>
          </div>
        </div>
        <div class="boton-container">
          <q-btn label="Ver Perros" @click="$emit('seleccionarTipo', 'perro')" />
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide
        name="salchipapa"
        img-src="../img/salchipapa.png"
      >
        <div class="text-container">
          <div class="text-content">
            <div class="text-h4 text-weight-bold titulo-amarillo">Salchipapas</div>
            <div class="text-h5 text-weight-bold titulo-amarillo">Deliciosas</div>
            <div class="text-subtitle1 centrado">Papas fritas con salchichas y salsas especiales</div>
            <div class="text-precio titulo-amarillo centrado">$18.000 - 30.000</div>
          </div>
        </div>
        <div class="boton-container">
          <q-btn label="Ver Salchipapas" @click="$emit('seleccionarTipo', 'salchipapa')" />
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide
        name="bebidas"
        img-src="../img/bebidas.png"
      >
        <div class="text-container">
          <div class="text-content">
            <div class="text-h4 text-weight-bold titulo-amarillo">Bebidas</div>
            <div class="text-h5 text-weight-bold titulo-amarillo">Refrescantes</div>
            <div class="text-subtitle1 centrado">Refrescos, jugos y bebidas especiales</div>
            <div class="text-precio titulo-amarillo centrado">$8.000 - 15.000</div>
          </div>
        </div>
        <div class="boton-container">
          <q-btn label="Ver Bebidas" @click="$emit('seleccionarTipo', 'bebidas')" />
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide
        name="especiales"
        img-src="../img/fuego.jpg"
      >
        <div class="text-container">
          <div class="text-content">
            <div class="text-h4 text-weight-bold titulo-amarillo">Platos Especiales</div>
            <div class="text-h5 text-weight-bold titulo-amarillo">Exclusivos</div>
            <div class="text-subtitle1 centrado">Nuestras creaciones más exclusivas</div>
            <div class="text-precio titulo-amarillo centrado">$25.000 - 200.000</div>
          </div>
        </div>
        <div class="boton-container">
          <q-btn label="Ver Especiales" @click="$emit('seleccionarTipo', 'especiales')" />
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide
        name="postres"
        img-src="../img/prueba.jpg"
      >
        <div class="text-container">
          <div class="text-content">
            <div class="text-h4 text-weight-bold titulo-amarillo">Postres</div>
            <div class="text-h5 text-weight-bold titulo-amarillo">Artesanales</div>
            <div class="text-subtitle1 centrado">Dulces y postres caseros</div>
            <div class="text-precio titulo-amarillo centrado">$12.000 - 35.000</div>
          </div>
        </div>
        <div class="boton-container">
          <q-btn label="Ver Postres" @click="$emit('seleccionarTipo', 'postres')" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 'burger',
      controlType: 'bottom',
      controlTypeOptions: [
        { label: 'Abajo', value: 'bottom' },
        { label: 'Arriba', value: 'top' },
        { label: 'Izquierda', value: 'left' },
        { label: 'Derecha', value: 'right' }
      ]
    }
  }
}
</script>

<style scoped>
.centrado{
    text-align: center;
    gap: 4px;
    padding: 2%;
    color: white;
}
.titulo-amarillo {
  color: yellow;
  text-align: center;
}
.carrusel-full {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.q-carousel {
  width: 100%;
  height: 100%;
  min-height: 0;
  background: #111;
}

/* ← AGREGADO: Contenedor de texto mejorado */
.text-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(rgba(0,0,0,0.8), transparent);
  padding: 2rem 1rem 1rem 1rem;
  color: white;
}

.text-content {
  text-align: center;
}

.text-precio {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

/* ← AGREGADO: Contenedor del botón abajo */
.boton-container {
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

/* ← NUEVO: Estilo de botón elegante */
.boton-container .q-btn {
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%) !important;
  color: #1a1a1a !important;
  font-weight: 700 !important;
  font-size: 0.85rem !important;
  padding: 0.4rem 1.3rem !important;
  border-radius: 50px !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  transition: all 0.2s ease !important;
  position: relative !important;
}

.boton-container .q-btn:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.5) !important;
}

.boton-container .q-btn:active {
  transform: translateY(0) !important;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4) !important;
}

/* ← MEJORADO: Botón más transparente */
.card-btn {
  width: 100%;
  background: linear-gradient(135deg, rgba(255, 195, 36, 0.8) 0%, rgba(255, 179, 0, 0.8) 100%);
  color: #111;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  padding: 1rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(255, 195, 36, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
  backdrop-filter: blur(10px);
}

.card-btn:hover {
  background: linear-gradient(135deg, rgba(255, 179, 0, 0.9) 0%, rgba(255, 160, 0, 0.9) 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 195, 36, 0.5);
}

.card-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(255, 195, 36, 0.3);
}
</style>
