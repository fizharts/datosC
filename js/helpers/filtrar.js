export const estadoFiltrado = ( estado , datos ) => {
    let paqueteEstados = datos.filter(dato => dato.fields.entidad_um === estado )
    return [
        paqueteEstados
    ]
}


export const obtenerFecha = (arrayFecha) => {
    let fecha = Array.from(new Set(arrayFecha))
    let fechaRegistro = fecha[0]
    return  [
        fechaRegistro
    ]
}