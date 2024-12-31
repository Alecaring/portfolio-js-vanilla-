import React, { useEffect, useRef } from 'react';

function LoveTecnologyRight() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const globeRadius = 100; // Raggio del globo
    const globeDensity = 40; // Numero di punti
    const rotationSpeed = 0.02; // Velocità di rotazione
    const regionData = {
      'North America': { xRange: [-50, 50], yRange: [-50, 100] },
      'South America': { xRange: [-50, 50], yRange: [50, 150] },
      'Europe': { xRange: [-40, 40], yRange: [-80, 50] },
      'Africa': { xRange: [-50, 50], yRange: [0, 100] },
      'Asia': { xRange: [50, 150], yRange: [-60, 100] },
      'Australia': { xRange: [50, 100], yRange: [-150, 100] },
    };

    let angleX = 0;
    let angleY = 0;

    // Funzione per generare i punti del globo
    const generateGlobePoints = () => {
      const points = [];
      for (let lat = 0; lat <= Math.PI; lat += Math.PI / globeDensity) {
        for (let lon = 0; lon <= 2 * Math.PI; lon += Math.PI / globeDensity) {
          const x = globeRadius * Math.sin(lat) * Math.cos(lon);
          const y = globeRadius * Math.cos(lat);
          const z = globeRadius * Math.sin(lat) * Math.sin(lon);

          points.push({ x, y, z });
        }
      }
      return points;
    };

    const points = generateGlobePoints();

    // Funzione per proiettare i punti
    const project = (x, y, z) => {
      const distance = 400;
      const scale = distance / (distance - z);
      const x2D = x * scale + width / 2;
      const y2D = y * scale + height / 2;
      return { x: x2D, y: y2D };
    };

    // Funzione per ruotare i punti
    const rotate = (point, angleX, angleY) => {
      const { x, y, z } = point;

      // Rotazione sull'asse Y
      const sinY = Math.sin(angleY);
      const cosY = Math.cos(angleY);
      const z1 = z * cosY - x * sinY;
      const x1 = z * sinY + x * cosY;

      // Rotazione sull'asse X
      const sinX = Math.sin(angleX);
      const cosX = Math.cos(angleX);
      const y1 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      return { x: x1, y: y1, z: z2 };
    };

    // Funzione per determinare la regione
    const getRegion = (x, y) => {
      for (const [region, range] of Object.entries(regionData)) {
        if (x > range.xRange[0] && x < range.xRange[1] && y > range.yRange[0] && y < range.yRange[1]) {
          return region;
        }
      }
      return null;
    };

    // Funzione per disegnare il globo
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let point of points) {
        const rotatedPoint = rotate(point, angleX, angleY);
        const { x, y } = project(rotatedPoint.x, rotatedPoint.y, rotatedPoint.z);

        // Assegna il carattere in base alla regione
        let char = '.';
        const region = getRegion(rotatedPoint.x, rotatedPoint.y);
        if (region === 'North America') {
          char = 'N';
        } else if (region === 'South America') {
          char = 'S';
        } else if (region === 'Europe') {
          char = 'E';
        } else if (region === 'Africa') {
          char = 'A';
        } else if (region === 'Asia') {
          char = 'I';
        } else if (region === 'Australia') {
          char = 'U';
        }

        ctx.fillStyle = '#34a853'; // Colore dei punti visibili
        ctx.font = '12px Courier New';
        ctx.fillText(char, x, y);
      }

      angleX += rotationSpeed;
      angleY += rotationSpeed;

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="container-love-technology">
      <div className="vsc-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <p>LoveTechnology.js</p>
      </div>
      <div className="vsc-editor">
        <canvas ref={canvasRef} width={600} height={400}></canvas>
      </div>
    </div>
  );
}

export default LoveTecnologyRight;
