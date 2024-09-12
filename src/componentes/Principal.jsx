import './styles.css'
import Navbar from "./Navbar"
import Footer from './Footer'
function Principal() {

    return (
      <>
      <Navbar/>
        <section class="info">
        <h2>¿Qué es una mala postura?</h2>
        <p>Una mala postura puede causar problemas de salud a largo plazo, como dolores de espalda, cuello y hombros. Es importante mantener una postura adecuada para evitar estos problemas.</p>
    </section>
    <section class="info">
        <h2>Escoliosis:</h2>
        <p>La escoliosis es una condición en la que la columna vertebral se curva lateralmente en forma de "S" o "C" en lugar de mantenerse recta. Usualmente, esta curvatura ocurre durante la etapa de crecimiento justo antes de la pubertad, aunque puede presentarse a cualquier edad. La escoliosis puede variar desde casos leves, hasta casos graves que pueden afectar la movilidad, la postura y la respiración.</p>
    </section>
    <section class="info">
        <h2>Cifosis:</h2>
        <p>La cifosis es una curvatura exagerada hacia adelante en la parte superior de la columna vertebral, lo que provoca una postura encorvada o jorobada. En condiciones normales, la columna tiene curvas naturales que ayudan a absorber los impactos y soportar el peso del cuerpo. Aunque, en la cifosis, esta curvatura es excesiva y puede provocar dolor, incomodidad y problemas estéticos.</p>
    </section>
    <section class="info">
        <h2>Lordosis:</h2>
        <p>La lordosis es una curvatura exagerada hacia adentro de la columna vertebral, principalmente en la región lumbar. Todas las personas tienen cierta lordosis natural en la columna, que es necesaria para mantener el equilibrio y absorber los impactos. Sin embargo, cuando esta curva se vuelve excesiva, puede generar problemas como dolor de espalda, postura anormal y complicaciones relacionadas con los nervios y músculos.</p>
    </section>
    <section class="info">
        <h2>Lumbalgia:</h2>
        <p>La lumbalgia es el término médico para referirse al dolor en la parte baja de la espalda en la zona lumbar. Es una de las causas más comunes de consulta médica y puede afectar a personas de todas las edades.</p>
    </section>
    <section class="info">
        <h2>Hiperlordosis:</h2>
        <p>La hiperlordosis es una forma pronunciada de lordosis en la que la curvatura hacia adentro de la columna lumbar es excesiva. Esta condición puede alterar la postura normal y provocar dolor y molestias en la zona lumbar. A diferencia de la lordosis normal, la hiperlordosis es una curvatura exagerada que puede tener efectos negativos en la salud.</p>
    </section>
    <Footer/>
      </>
    )
  }
  
  export default Principal