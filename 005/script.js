$(function() {
    var width = 1280;
    var height = 720;
    
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
    
    // set up the sphere vars
    var radius = 50,
        segments = 16,
        rings = 16;
    
    // create the sphere's material
    var sphereMaterial = new THREE.MeshLambertMaterial({
          color: 0xCC0000
    });
    
    // create a new mesh with sphere geometry
    var sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, segments, rings), sphereMaterial);
    
    // add the sphere to the scene
    scene.add(sphere);
    
    // create a point light
    var pointLight = new THREE.PointLight(0xFFFFFF);
    
    // set its position
    pointLight.position.x = -10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;
    
    // add to the scene
    scene.add(pointLight);
    
    // draw!
    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();
});