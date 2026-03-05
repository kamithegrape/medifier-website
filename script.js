// Animated counters

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
counter.innerText = "0";

const updateCounter = () => {
const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = target / 200;

if(count < target){
counter.innerText = `${Math.ceil(count + increment)}`;
setTimeout(updateCounter,10);
}else{
counter.innerText = target;
}
}

updateCounter();
});



// 3D DNA animation

const canvas = document.getElementById("dnaCanvas");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas:canvas,
alpha:true
});

renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.TorusGeometry(2,0.2,16,100);

const material = new THREE.MeshBasicMaterial({
color:0x3ddc97,
wireframe:true
});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

camera.position.z = 5;

function animate(){

requestAnimationFrame(animate);

torus.rotation.x += 0.01;
torus.rotation.y += 0.01;

renderer.render(scene,camera);

}

animate();
