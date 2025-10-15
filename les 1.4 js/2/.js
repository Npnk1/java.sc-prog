function berekenCylinderInhoud(diameter, hoogte) {
    let radius = diameter / 2;
    return radius * radius * Math.PI * hoogte;
}

let cylinderInhoud = berekenCylinderInhoud(10, 5);
console.log(cylinderInhoud);
