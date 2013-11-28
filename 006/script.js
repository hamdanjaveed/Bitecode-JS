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
    var radius = 0,
        segments = 16,
        rings = 16;
    
    // create the sphere's material
    var sphereMaterial = new THREE.MeshLambertMaterial({
          color: 0xF56015
    });
    
    // create a new mesh with sphere geometry
    var sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, segments, rings), sphereMaterial);
  
    // add the sphere to the scene
    scene.add(sphere);
   
    // create a point light
    var pointLight = new THREE.PointLight(0xFFFFFF);
   
    // set its position
    pointLight.position.x = -200;
    pointLight.position.y = 60;
    pointLight.position.z = 100;
    
    // add to the scene
    scene.add(pointLight);
    
    var as = 1;
 
    // draw!
    function render() {
        requestAnimationFrame(render);
        if (as == 1) {
            pointLight.position.x += 5;
            if (pointLight.position.x > 200) {
                as = 2;
            }
        } else {
            pointLight.position.x -= 5;
            if (pointLight.position.x < -200) {
                as = 1;
            }
        }
        renderer.render(scene, camera);
    }
    render();
});