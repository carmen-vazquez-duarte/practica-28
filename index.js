let objeto = {
    nombre: 'carlos',
    apellido: 'martin',
    curso:'web'
}

objeto.address = 'Mi casa'
console.log (objeto)


const alumno = {nombre : 'carlos' , apellido : 'martin' , curso: 'web' }
const { nombre , apellido , curso} = alumno;



objeto.to_string = function() {
    console.log(this.name + " " + this.last_name + " " + this.address)
}

objeto.to_string()