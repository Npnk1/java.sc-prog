
const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");



function drawSkibidiTree(skibidiX, skibidiY) {

    
    let grad = g.createLinearGradient(0, skibidiY, 0, skibidiY + 240);
    grad.addColorStop(0, "#2e8b57");
    grad.addColorStop(1, "#800080");
    g.fillStyle = grad;

    
    const layers = [
        { w: 120, h: 90, offsetY: 0 },     
        { w: 170, h: 95, offsetY: 70 },    
        { w: 230, h: 105, offsetY: 150 }   
    ];

   
    layers.forEach(layer => {
        let x = skibidiX + (230 - layer.w) / 2; 
        let y = skibidiY + layer.offsetY;

        g.beginPath();
        g.moveTo(x + layer.w / 2, y);        
        g.lineTo(x, y + layer.h);            
        g.lineTo(x + layer.w, y + layer.h);  
        g.closePath();
        g.fill();
    });

    
    g.fillStyle = "#8b4513";
    g.fillRect(skibidiX + 230/2 - 18, skibidiY + 260, 36, 45);

    
    g.fillStyle = "yellow";
    g.beginPath();
    g.moveTo(skibidiX + 115, skibidiY - 20);
    g.lineTo(skibidiX + 130, skibidiY + 5);
    g.lineTo(skibidiX + 100, skibidiY + 5);
    g.closePath();
    g.fill();

    
    for (let i = 0; i < 10; i++) {
        let layer = layers[Math.floor(Math.random() * layers.length)];

        let layerX = skibidiX + (230 - layer.w) / 2;
        let layerY = skibidiY + layer.offsetY;

        let ballX = layerX + 15 + Math.random() * (layer.w - 30);
        let ballY = layerY + 15 + Math.random() * (layer.h - 30);

        g.beginPath();
        g.arc(ballX, ballY, 7, 0, Math.PI * 2);
        g.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        g.fill();
    }
}




function drawSkibidiHouse(skibidiX, skibidiY) {

   
    g.fillStyle = "#c46c2b";
    g.fillRect(skibidiX, skibidiY, 120, 90);

   
    g.beginPath();
    g.moveTo(skibidiX - 10, skibidiY);
    g.lineTo(skibidiX + 60, skibidiY - 50);
    g.lineTo(skibidiX + 130, skibidiY);
    g.closePath();
    g.fillStyle = "#8b0000";
    g.fill();

  
    let skibidiHour = new Date().getHours();
    let skibidiLight = skibidiHour >= 18; 

    g.fillStyle = skibidiLight ? "yellow" : "#1e1e1e";
    g.fillRect(skibidiX + 40, skibidiY + 30, 40, 30);
}





drawSkibidiTree(300, 150);


for (let i = 0; i < 4; i++) {
    let skibidiRandomX = Math.random() * 650;
    let skibidiRandomY = 350 + Math.random() * 150;

    drawSkibidiHouse(skibidiRandomX, skibidiRandomY);
}


g.font = "48px Arial";
g.fillStyle = "red";
g.fillText("Merry Christmas!", 240, 580);
