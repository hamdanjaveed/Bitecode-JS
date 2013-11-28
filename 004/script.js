var gl = null;

// returns the context that's used for rendering
function getGLContext() {
    var canvas = document.getElementById("canvas");
    if (canvas == null) {
        alert("Canvas not found");
        return;
    }
    
    var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    for (var i = 0; i < names.length; i++) {
        try {
            gl = canvas.getContext(names[i]);
        } catch(e) {
            
        }
        
        if (gl) {
            break;
        }
    }
    
    if (gl == null) {
        alert("WebGL is not available");
    } else {
        alert("You have WebGL");
    }
    
    return gl;
}