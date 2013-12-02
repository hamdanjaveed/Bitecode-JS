$(function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    // camera parameters
    var viewAngle = 45;
    var aspect = width / height;
    var near = 0.1;
    var far = 10000;
  
    // create a renderer and scene
    var renderer = new THREE.WebGLRenderer();
    var camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);
  
    var scene = new THREE.Scene();
    scene.add(camera);
  
    camera.position.z = 300;
    
    // start the renderer
    renderer.setSize(width, height);
 
    // attach the render-supplied DOM element
    document.body.appendChild(renderer.domElement);
    
    var numberOfParticles = 500;
    var particleGeometry = new THREE.Geometry();
    var particleMaterial = new THREE.ParticleBasicMaterial({
        color:"#F56015",
        size:16,
        map:THREE.ImageUtils.loadTexture("particle.png"),
        blending:THREE.AdditiveBlending,
        transparent:true
    });
    
    var spread = 1000;
    
    for (var i = 0; i < numberOfParticles; i++) {
        var x = Math.random() * spread - spread / 2;
        var y = Math.random() * spread - spread / 2;
        var z = Math.random() * spread - spread / 2;
        var particle = new THREE.Vector3(x, y, z);
        particleGeometry.vertices.push(particle);
    }
    
    var particleSystem = new THREE.ParticleSystem(particleGeometry, particleMaterial);
    particleSystem.sortParticles = true;
    
    scene.add(particleSystem);
    
    // draw!
    function render() {
        particleSystem.rotation.y += 0.002;
        
        renderer.render(scene, camera);
        
        requestAnimationFrame(render);
    }
    
    render();
});