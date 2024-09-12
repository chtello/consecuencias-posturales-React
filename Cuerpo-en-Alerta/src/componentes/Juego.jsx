import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from './Footer';
import './styles.css';

function Juego() {
  const [buenas, setBuenas] = useState(0);
const [malas, setMalas] = useState(0);
const [aux, setAux] = useState(0);
const [images, setImages] = useState([]);
const [texts, setTexts] = useState([]);

useEffect(() => {
    const imgArray = [
    { id: 'img1', src: 'Escoliosis.png', alt: 'Escoliosis', value: 1 },
    { id: 'img2', src: 'Cifosis.jfif', alt: 'Cifosis', value: 2 },
    { id: 'img3', src: 'Lordosis.jpg', alt: 'Lordosis', value: 3 },
    { id: 'img4', src: 'Lumbalgia.jfif', alt: 'Lumbalgia', value: 4 },
    { id: 'img5', src: 'Hiperlordosis.png', alt: 'Hiperlordosis', value: 5 }
    ];

    const txtArray = [
    { id: 'text1', text: 'Escoliosis', value: 1 },
    { id: 'text2', text: 'Cifosis', value: 2 },
    { id: 'text3', text: 'Lordosis', value: 3 },
    { id: 'text4', text: 'Lumbalgia', value: 4 },
    { id: 'text5', text: 'Hiperlordosis', value: 5 }
    ];

    shuffleArray(imgArray);
    shuffleArray(txtArray);

    setImages(imgArray);
    setTexts(txtArray);
}, []);

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
};

const handleClickImage = (value) => {
    setAux(aux + value);
};

const handleClickText = (value, imgId, textId) => {
    const newAux = aux + value;
    if (newAux === value * 2) {
    document.getElementById(imgId).style.visibility = 'hidden';
    document.getElementById(textId).style.visibility = 'hidden';
    setBuenas(buenas + 1);
    alert('¡Bien hecho!');
    } else {
    setMalas(malas + 1);
    alert('Respuesta incorrecta, intenta de nuevo');
    }
    setAux(0);
};

return (
    <>
    <Navbar />
    <div className="game-container">
        <div className="images">
        {images.map((img) => (
            <img
            key={img.id}
            id={img.id}
            src={img.src}
            alt={img.alt}
            onClick={() => handleClickImage(img.value)}
            />
        ))}
        </div>
        <div className="texts">
        {texts.map((text) => (
            <div
            key={text.id}
            id={text.id}
            onClick={() => handleClickText(text.value, `img${text.value}`, text.id)}
            >
            {text.text}
            </div>
        ))}
        </div>
        <div className="counters">
        <p>Buenas: {buenas}</p>
        <p>Malas: {malas}</p>
        </div>
    </div>
    <Footer />
    </>
);
}
 
export default Juego;
