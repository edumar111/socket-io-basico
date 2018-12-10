const {io} = require('../server');

io.on('connection', (client) =>{
	console.log("usuario conectado");

	client.emit('enviarMensaje', {
		usuario: 'Administrador' ,
		mensaje: 'bienvenido al sistema'
	});

	client.on('disconnect', function(){
	   console.log("usuario desconectado")
	});

	//escuchar mensaje
	client.on('enviarMensaje', (mensaje, callback) => {
		console.log(mensaje);

		//nota si quieres emitir a todos los usuarios el mensaje recibido		
		//client.broadcast.emit("enviarMensaje", mensaje);

		if (mensaje.usuario){
			callback({
				error: false,
				mensaje: 'todo se actualizó ok'
			});
		}else{
			callback({
				error: true,
				mensaje: 'error no hay nombre de usuario'
			});
		}
		
	});

});