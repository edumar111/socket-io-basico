var socket = io();

    	socket.on('connect', function(){
    		console.log("conectado al servidor")
    	});

    	socket.on('disconnect', function(){
    		console.log("perdimos conexión con el servidor")
    	});

    	//escuchar mensaje
    	socket.on('enviarMensaje', function(mensaje){
				console.log("servidor: " , mensaje)
    	})
    	// se envia mensaje al servidor
    	socket.emit('enviarMensaje', {
    		usuario:'eduardo',
    		mensaje:'hola mundo'
    	}, function(response){
    		if (response.error){
    			console.log(response.mensaje);
    		}else{
    			console.log(response.mensaje);
    		}
    		
    	});