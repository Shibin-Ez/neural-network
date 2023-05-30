import React, { useRef, useEffect } from "react";
import "./styles.css";

var canvas, context;

const Canvas = ({setPixels, result}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    canvas = canvasRef.current;
    context = canvas.getContext("2d");

    const screenWidth = window.innerWidth;
    const canvasWidth = screenWidth / 2;

    const scale = canvasWidth / 28;

    canvas.width = 150;
    canvas.height = 150;

    context.strokeStyle = "yellow";
    context.lineWidth = 1;
    context.lineCap = "round";
    context.lineJoin = "round";

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const drawLine = (event) => {
      if (!isDrawing) return;

      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(event.offsetX, event.offsetY);
      context.stroke();

      lastX = event.offsetX;
      lastY = event.offsetY;
    };

    canvas.addEventListener("mousedown", (event) => {
      isDrawing = true;

      lastX = event.offsetX;
      lastY = event.offsetY;
    });

    canvas.addEventListener("mousemove", drawLine);
    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));
  }, []);
  
  // Get pixel data
  const getPixelData = () => {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // converting to grayscale
    const grayscale = [];
    for(let i=0; i<data.length; i+=4) {
        if(data[i] > 200){
            grayscale.push(1);
        } else {
            grayscale.push(0);
        }
    }

    // converting to 2d array
    const twoDArray = [];
    for(let i=0; i<grayscale.length; i+=150) {
        twoDArray.push(grayscale.slice(i, i+150));
    }
    // console.log(twoDArray[100][100]);

    // reducing to 25x25
    const reducedArray = [];
    for(let i=0; i<twoDArray.length; i+=6) {
        const row = [];
        for(let j=0; j<twoDArray.length; j+=6) {
            let sum = 0;
            for(let k=i; k<i+6; k++) {
                for(let l=j; l<j+6; l++) {
                    sum += twoDArray[k][l];
                }
            }
            if(sum >= 5) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        reducedArray.push(row);
    }
    // console.log(reducedArray);

    // converting to 1d array
    const oneDArray = [];
    for(let i=0; i<reducedArray.length; i++) {
        for(let j=0; j<reducedArray.length; j++) {
            oneDArray.push(reducedArray[i][j]);
        }
    }
    setPixels(oneDArray);
  };

  return (
    <div className="flex">
      <canvas ref={canvasRef} className="canvas" />
      <button onClick={getPixelData} className="canvas-btn">Submit</button>
      <button className="canvas-btn">Train</button>
      <button className="canvas-btn">Load</button>
      <div className="result-area">{result}</div>
    </div>
  );
};

export default Canvas;
