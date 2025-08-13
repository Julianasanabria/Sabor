<template>
  <div class="Presentacion" v-if="!mostrarMenu && !mostrarSabores">
    <div class="textos">
      <div class="logo-container">
        <h1>SABOR URBANO</h1>
      </div>
      <div class="contenedor_chiquito">
        <h2>DONDE LO RAPIDO SE <br>ENCUENTRA CON LO EXQUISITO</h2>
        <ButtonComponent 
          label="VER NUESTRO MENÚ"
          @click="mostrarMenu = true"
        />
      </div>
    </div>
  </div>

  <!-- Menú principal -->
  <div class="Menu" v-if="mostrarMenu && !mostrarSabores">
    <div class="menu-container">
      <div class="derecha">
        <div class="contenido-derecha">
          <h1>SABOR URBANO</h1>
          <h3>DONDE LO RAPIDO SE ENCUENTRA CON LO ESQUISITO 🔥</h3>
          <div class="botones-container">
            <ButtonComponent 
              label="VOLVER" 
              @click="mostrarMenu = false"
            />
          </div>
        </div>
      </div>
      <div class="izquierda">
        <Carrusel @seleccionarTipo="mostrarSaboresEspecificos" />
      </div>
    </div>
  </div>

  <!-- Pantalla de Sabores -->
  <div class="Sabores" v-if="mostrarSabores">
    <div class="sabores-header">
      <h1>{{ tituloSabores }}</h1>
      <p class="subtitle">{{ subtituloSabores }}</p>
    </div>
    
    <div class="sabores-grid">
      <cardComponent
        v-for="(item, index) in saboresFiltrados"
        :key="index"
        :title="item.title"
        :description="item.description"
        :price="item.price"
        :image="item.image"
        @encargar="encargarPlato"
      />
    </div>

    <div class="sabores-footer">
      <ButtonComponent 
        label="VOLVER AL MENÚ" 
        @click="mostrarSabores = false"
      />
      <ButtonComponent 
        label="VER TODOS" 
        @click="mostrarTodosSabores"
        v-if="tipoSeleccionado !== 'todos'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ButtonComponent from '../components/button.vue'
import Carrusel from '../components/carrusel.vue'
import cardComponent from '../components/card.vue'

const mostrarMenu = ref(false)
const mostrarSabores = ref(false)
const tipoSeleccionado = ref('todos')

// Base de datos de sabores
const sabores = [
  {
    title: 'Hamburguesa Clásica',
    description: 'Carne 100% res, queso, lechuga y tomate.',
    price: '$20.000',
    image: Ham,
    tipo: '../src/img/hamburguesa.jpg'
  },
  {
    title: 'Hamburguesa Doble',
    description: 'Doble carne, doble queso, bacon y salsa especial.',
    price: '$35.000',
    image: '../src/img/hamburguesaDoble.png',
    tipo: 'hamburguesa'
  },
  {
    title: 'Hamburguesa Vegetariana',
    description: 'Proteína vegetal, queso vegano y vegetales frescos.',
    price: '$25.000',
    image: '../src/img/hamburguesa.jpg',
    tipo: 'hamburguesa'
  },
  {
    title: 'Perro Caliente Clásico',
    description: 'Salchicha premium, pan artesanal y salsas.',
    price: '$15.000',
    image: '../src/img/perro.png',
    tipo: 'perro'
  },
  {
    title: 'Perro Caliente Gourmet',
    description: 'Salchicha alemana, cebolla caramelizada y mostaza.',
    price: '$22.000',
    image: '../img/perro.png',
    tipo: 'perro'
  },
  {
    title: 'Salchipapa Clásica',
    description: 'Papas fritas con salchichas y salsas.',
    price: '$18.000',
    image: '../img/salchipapa.png',
    tipo: 'salchipapa'
  },
  {
    title:'Salchipapa Especial',
    description:'Papas fritas, salchichas, pollo y salsas premium.',
    price:'$28.000',
    image:'../img/salchipapa.png',
    tipo:'salchipapa'
  },
  {
    title:'Bebida Refrescante',
    description:'Refresco, jugo natural o limonada.',
    price:'$8.000',
    image:'../img/bebidas.png',
    tipo:'bebidas'
  },
  {
    title:'Bebida Especial',
    description:'Bebida artesanal con frutas frescas.',
    price:'$15.000',
    image:'../img/bebidas.png',
    tipo:'bebidas'
  },
  {
    title:'Plato Especial del Chef',
    description:'Nuestra creación más exclusiva del día.',
    price:'$150.000',
    image:'./img/fuego.jpg',
    tipo:'especiales'
  },
  {
    title:'Postre Artesanal',
    description:'Dulce casero preparado con amor.',
    price:'$12.000',
    image:'./img/prueba.jpg',
    tipo:'postres'
  }
]

// Computed para filtrar sabores
const saboresFiltrados = computed(() => {
  if (tipoSeleccionado.value === 'todos') {
    return sabores
  }
  return sabores.filter(sabor => sabor.tipo === tipoSeleccionado.value)
})

// Computed para título y subtítulo
const tituloSabores = computed(() => {
  const titulos = {
    'hamburguesa':'HAMBURGUESAS',
    'perro':'PERROS CALIENTES',
    'salchipapa':'SALCHIPAPAS',
    'bebidas':'BEBIDAS',
    'especiales':'PLATOS ESPECIALES',
    'postres':'POSTRES',
    'todos':'SABORES'
  }
  return titulos[tipoSeleccionado.value] || 'SABORES'
})

const subtituloSabores = computed(() => {
  const subtitulos = {
    'hamburguesa':'Las más deliciosas hamburguesas jamás antes vistas',
    'perro':'Salchichas premium con toppings especiales',
    'salchipapa':'Papas fritas con salchichas y salsas especiales',
    'bebidas':'Refrescos, jugos y bebidas especiales',
    'especiales':'Nuestras creaciones más exclusivas',
    'postres':'Dulces y postres artesanales',
    'todos':'Descubre nuestra deliciosa selección'
  }
  return subtitulos[tipoSeleccionado.value]||'Descubre nuestra deliciosa selección'
})

// Funciones
function mostrarSaboresEspecificos(tipo) {
  tipoSeleccionado.value = tipo
  mostrarSabores.value = true
}

function mostrarTodosSabores() {
  tipoSeleccionado.value = 'todos'
}

function encargarPlato(plato) {
  console.log('Plato encargado:', plato)
  alert(`¡Pedido recibido! ${plato.title} - ${plato.price}`)
}

console.log('App.vue montado correctamente')
</script>

<style>
body {
  background-image: url('./img/prueba.jpg'); 
  background-size:cover;
  background-position:center 65%; 
  background-repeat: no-repeat;
  background-attachment:fixed;
  min-height: 90vh;
  width:100vw;
  margin: 0;
  padding:0;
  background-color:#000;
  overflow-x: hidden;
}

.izquierdo{
    background-image: url('./img/izquierdo.jpg');
}

/* ← AGREGADO: Variables CSS para responsive */
:root {
  --header-height: 80px;
  --container-padding: 2rem;
  --border-radius:15px;
  --transition-speed:0.3s;
}

/* ← AGREGADO: Scrollbar personalizada */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background:rgba(0,0,0,0.3);
}

::-webkit-scrollbar-thumb {
  background:rgba(255,215,0,0.6);
  border-radius:4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255,215,0,0.8);
}
</style>

<style scoped>

.Presentacion {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/img/prueba.jpg'); /* Ruta correcta a la imagen */
  background-size: cover;
  background-position: center;
}

.textos {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: var(--container-padding);
  z-index: 10;
}

.logo-container {
  margin-top: 2rem;
  text-align: left;
}

.contenedor_chiquito {
  color: white;
  max-width: 600px;
  margin: 0;
  margin-top: 15vh;
  text-align: left;
}

h1 {
  font-size: clamp(2rem, 8vw, 4rem);
  font-family: 'Allura', cursive;
  color: azure;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  line-height: 1.2;
  text-align: left;
}

h2 {
  color: white;
  font-size: clamp(1.5rem, 6vw, 2.5rem);
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  text-align: left;
}


.Menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: #000;
  padding: 1rem;
}

.menu-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 100%;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  overflow: hidden;
  gap: 0;
}

.izquierda, .derecha {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}

.izquierda {
  background: #111;
}

.derecha {
  background: #000000;
  padding: var(--container-padding);
}

.contenido-derecha {
  max-width: 500px;
  text-align: center;
}

.derecha h1 {
  font-size: clamp(2rem, 6vw, 3.5rem);
  margin-bottom: 1rem;
  text-align: center;
}

.derecha h3 {
  color: white;
  font-size: clamp(0.8rem, 3vw, 1.2rem);
  font-weight: normal;
  line-height: 1.4;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  max-width: 100%;
}

.botones-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

/* sabor */
.Sabores {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  background: url('https://images.unsplash.com/photo-1684503830677-d1ce5ab1663e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  padding: var(--container-padding);
  overflow-y: auto;
}

.sabores-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 800px;
}

.sabores-header h1 {
  font-size: clamp(3rem, 12vw, 6rem);
  font-family: 'serif', Arial, Helvetica, sans-serif;
  color: azure;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  line-height: 1.1;
  align-self: center;
}

.sabores-header .subtitle {
  font-size: clamp(1rem, 4vw, 1.5rem);
  color: white;
  margin-top: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  line-height: 1.4;
}

.sabores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 3rem;
  padding: 0 1rem;
}

.sabores-footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}



@media (min-width: 1200px) {
  .sabores-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
  
  .menu-container {
    max-width: 1400px;
  }
}


@media (max-width: 1199px) and (min-width: 992px) {
  .sabores-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .contenedor_chiquito {
    margin-top: 20vh;
  }
}


@media (max-width: 991px) and (min-width: 768px) {
  .sabores-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .menu-container {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }
  
  .izquierda, .derecha {
    flex: none;
    height: auto;
    min-height: 50vh;
  }
  
  .derecha {
    padding: 2rem 1rem;
  }
  
  .contenedor_chiquito {
    margin-top: 15vh;
  }
  
  .sabores-header h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
  }
}

@media (max-width: 767px) and (min-width: 576px) {
  .sabores-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
  
  .menu-container {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    padding: 0.5rem;
  }
  
  .izquierda, .derecha {
    flex: none;
    height: auto;
    min-height: 50vh;
  }
  
  .derecha {
    padding: 1.5rem 1rem;
  }
  
  .contenedor_chiquito {
    margin-top: 12vh;
    padding: 0 1rem;
  }
  
  .textos {
    padding: 1rem;
  }
  
  .sabores-header {
    margin-bottom: 2rem;
  }
  
  .sabores-header h1 {
    font-size: clamp(2rem, 6vw, 3rem);
  }
  
  .sabores-header .subtitle {
    font-size: clamp(0.9rem, 3.5vw, 1.2rem);
  }
  
  .botones-container {
    max-width: 250px;
  }
}


@media (max-width: 575px) and (min-width: 375px) {
  .sabores-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
  
  .menu-container {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    padding: 0.5rem;
  }
  
  .izquierda, .derecha {
    flex: none;
    height: auto;
    min-height: 45vh;
  }
  
  .derecha {
    padding: 1rem 0.5rem;
  }
  
  .contenedor_chiquito {
    margin-top: 10vh;
    padding: 0 0.5rem;
  }
  
  .textos {
    padding: 0.5rem;
  }
  
  .sabores-header {
    margin-bottom: 1.5rem;
  }
  
  .sabores-header h1 {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
  }
  
  .sabores-header .subtitle {
    font-size: clamp(0.8rem, 3vw, 1rem);
  }
  
  .botones-container {
    max-width: 200px;
    gap: 0.8rem;
  }
  
  .sabores-footer {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
}

@media (max-width: 374px) {
  .sabores-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 0 0.3rem;
  }
  
  .menu-container {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    padding: 0.3rem;
  }
  
  .izquierda, .derecha {
    flex: none;
    height: auto;
    min-height: 40vh;
  }
  
  .derecha {
    padding: 0.8rem 0.3rem;
  }
  
  .contenedor_chiquito {
    margin-top: 8vh;
    padding: 0 0.3rem;
  }
  
  .textos {
    padding: 0.3rem;
  }
  
  .sabores-header {
    margin-bottom: 1rem;
  }
  
  .sabores-header h1 {
    font-size: clamp(1.5rem, 4.5vw, 2rem);
  }
  
  .sabores-header .subtitle {
    font-size: clamp(0.7rem, 2.5vw, 0.9rem);
  }
  
  .botones-container {
    max-width: 180px;
    gap: 0.6rem;
  }
  
  .sabores-footer {
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
  }
}

@media (max-height: 500px) and (orientation: landscape) {
  .Presentacion .contenedor_chiquito {
    margin-top: 10vh;
  }
  
  .sabores-header {
    margin-bottom: 1rem;
  }
  
  .sabores-header h1 {
    font-size: clamp(2rem, 4vw, 3rem);
  }
  
  .sabores-header .subtitle {
    font-size: clamp(0.8rem, 2.5vw, 1rem);
  }
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .sabores-grid {
    gap: 1.5rem;
  }
  
  .card-image img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}


@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>

