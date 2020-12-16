'use-strict';

import { estados } from './estados/estados.js';
import { estadoFiltrado, obtenerFecha } from './helpers/filtrar.js';
import { todosLosEstados } from './helpers/getDatos.js';
// import { urlGeneral } from './urls/urls.js'

// ui
const rubros = document.querySelector('#rubros')

todosLosEstados().then(res => {
        const { facet_groups , records } = res
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        let texto = '';
        facet_groups.forEach(({name}) => {
            texto += `
            <div class="badge badge-info">${ name }</div>
            `
              
        })
        rubros.insertAdjacentHTML('beforebegin' , texto)
        $('.spinner-border').hide()
        // const [ estado ]  =  filtrado('')
    console.log( facet_groups )
    console.log( records )
       
        const [ hoy ] = obtenerFecha( records.map(fecha => fecha.fields.fecha_actualizacion) )
        document.querySelector('#fechaSpan').insertAdjacentHTML('beforebegin' , hoy)
        
        let Todos = '';
        const [ CAMPECHE ]  = estadoFiltrado(estados.CAMPECHE , records )
        CAMPECHE.forEach(({fields})=> {
            const { fecha_actualizacion , id_registro , sector , entidad_um , sexo , entidad_nac , entidad_res , municipio_res , tipo_paciente , fecha_ingreso , fecha_def , edad , nacionalidad , rango_edad , resultado_lab , clasificacion_final , clas_final_escrita , confirmados , sospechosos , negativos  } = fields
             
            Todos += `
                <tr>          
                  
                    <td>${entidad_um}</td>
                    <td>${fecha_actualizacion}</td>
                    <td>${id_registro}</td>
                    <td>${sector}</td>
                            
                    <td>${sexo}</td>
                    <td>${entidad_nac}</td>
                    <td>${entidad_res}</td>
                    <td>${municipio_res}</td>
                    <td>${tipo_paciente}</td>
                    <td>${fecha_ingreso}</td>
                    <td>${fecha_def }</td>
                    <td>${edad}</td>
                    <td>${nacionalidad}</td>
                    <td>${rango_edad}</td>
                    <td>${resultado_lab}</td>
                    <td>${clasificacion_final}</td>
                    <td>${clas_final_escrita}</td>
                    <td>${confirmados}</td>
                    <td>${sospechosos}</td>
                    <td>${negativos}</td>

                </tr>
                
            `
        })


        const [ CHIAPAS ]  = estadoFiltrado(estados.CHIAPAS , records )
        CHIAPAS.forEach(({fields})=> {
            const { fecha_actualizacion , id_registro , sector , entidad_um , sexo , entidad_nac , entidad_res , municipio_res , tipo_paciente , fecha_ingreso , fecha_def , edad , nacionalidad , rango_edad , resultado_lab , clasificacion_final , clas_final_escrita , confirmados , sospechosos , negativos  } = fields
             
            Todos += `
                <tr>          
                  
                    <td>${entidad_um}</td>
                    <td>${fecha_actualizacion}</td>
                    <td>${id_registro}</td>
                    <td>${sector}</td>
                            
                    <td>${sexo}</td>
                    <td>${entidad_nac}</td>
                    <td>${entidad_res}</td>
                    <td>${municipio_res}</td>
                    <td>${tipo_paciente}</td>
                    <td>${fecha_ingreso}</td>
                    <td>${fecha_def }</td>
                    <td>${edad}</td>
                    <td>${nacionalidad}</td>
                    <td>${rango_edad}</td>
                    <td>${resultado_lab}</td>
                    <td>${clasificacion_final}</td>
                    <td>${clas_final_escrita}</td>
                    <td>${confirmados}</td>
                    <td>${sospechosos}</td>
                    <td>${negativos}</td>

                </tr>
                
            `
        })

        const [ CHIHUAHUA ]  = estadoFiltrado(estados.CHIHUAHUA , records )
        CHIHUAHUA.forEach(({fields})=> {
            const { fecha_actualizacion , id_registro , sector , entidad_um , sexo , entidad_nac , entidad_res , municipio_res , tipo_paciente , fecha_ingreso , fecha_def , edad , nacionalidad , rango_edad , resultado_lab , clasificacion_final , clas_final_escrita , confirmados , sospechosos , negativos  } = fields
             
            Todos += `
                <tr>          
                  
                    <td>${entidad_um}</td>
                    <td>${fecha_actualizacion}</td>
                    <td>${id_registro}</td>
                    <td>${sector}</td>
                            
                    <td>${sexo}</td>
                    <td>${entidad_nac}</td>
                    <td>${entidad_res}</td>
                    <td>${municipio_res}</td>
                    <td>${tipo_paciente}</td>
                    <td>${fecha_ingreso}</td>
                    <td>${fecha_def }</td>
                    <td>${edad}</td>
                    <td>${nacionalidad}</td>
                    <td>${rango_edad}</td>
                    <td>${resultado_lab}</td>
                    <td>${clasificacion_final}</td>
                    <td>${clas_final_escrita}</td>
                    <td>${confirmados}</td>
                    <td>${sospechosos}</td>
                    <td>${negativos}</td>

                </tr>
                
            `
        })

        
        const [ DURANGO ]  = estadoFiltrado(estados.DURANGO , records )
        DURANGO.forEach(({fields})=> {
            const { fecha_actualizacion , id_registro , sector , entidad_um , sexo , entidad_nac , entidad_res , municipio_res , tipo_paciente , fecha_ingreso , fecha_def , edad , nacionalidad , rango_edad , resultado_lab , clasificacion_final , clas_final_escrita , confirmados , sospechosos , negativos  } = fields
             
            Todos += `
                <tr>          
                  
                    <td>${entidad_um}</td>
                    <td>${fecha_actualizacion}</td>
                    <td>${id_registro}</td>
                    <td>${sector}</td>
                            
                    <td>${sexo}</td>
                    <td>${entidad_nac}</td>
                    <td>${entidad_res}</td>
                    <td>${municipio_res}</td>
                    <td>${tipo_paciente}</td>
                    <td>${fecha_ingreso}</td>
                    <td>${fecha_def }</td>
                    <td>${edad}</td>
                    <td>${nacionalidad}</td>
                    <td>${rango_edad}</td>
                    <td>${resultado_lab}</td>
                    <td>${clasificacion_final}</td>
                    <td>${clas_final_escrita}</td>
                    <td>${confirmados}</td>
                    <td>${sospechosos}</td>
                    <td>${negativos}</td>

                </tr>
                
            `
        })


        const [ HIDALGO ]  = estadoFiltrado(estados.HIDALGO , records )
        HIDALGO.forEach(({fields})=> {
            const { fecha_actualizacion , id_registro , sector , entidad_um , sexo , entidad_nac , entidad_res , municipio_res , tipo_paciente , fecha_ingreso , fecha_def , edad , nacionalidad , rango_edad , resultado_lab , clasificacion_final , clas_final_escrita , confirmados , sospechosos , negativos  } = fields
             
            Todos += `
                <tr>          
                  
                    <td>${entidad_um}</td>
                    <td>${fecha_actualizacion}</td>
                    <td>${id_registro}</td>
                    <td>${sector}</td>
                            
                    <td>${sexo}</td>
                    <td>${entidad_nac}</td>
                    <td>${entidad_res}</td>
                    <td>${municipio_res}</td>
                    <td>${tipo_paciente}</td>
                    <td>${fecha_ingreso}</td>
                    <td>${fecha_def }</td>
                    <td>${edad}</td>
                    <td>${nacionalidad}</td>
                    <td>${rango_edad}</td>
                    <td>${resultado_lab}</td>
                    <td>${clasificacion_final}</td>
                    <td>${clas_final_escrita}</td>
                    <td>${confirmados}</td>
                    <td>${sospechosos}</td>
                    <td>${negativos}</td>

                </tr>
                
            `
        })

        const [ GUERRERO ]  = estadoFiltrado(estados.GUERRERO , records )
        GUERRERO.forEach(({fields})=> {
            const { fecha_actualizacion , id_registro , sector , entidad_um , sexo , entidad_nac , entidad_res , municipio_res , tipo_paciente , fecha_ingreso , fecha_def , edad , nacionalidad , rango_edad , resultado_lab , clasificacion_final , clas_final_escrita , confirmados , sospechosos , negativos  } = fields
             
            Todos += `
                <tr>          
                  
                    <td>${entidad_um}</td>
                    <td>${fecha_actualizacion}</td>
                    <td>${id_registro}</td>
                    <td>${sector}</td>
                            
                    <td>${sexo}</td>
                    <td>${entidad_nac}</td>
                    <td>${entidad_res}</td>
                    <td>${municipio_res}</td>
                    <td>${tipo_paciente}</td>
                    <td>${fecha_ingreso}</td>
                    <td>${fecha_def }</td>
                    <td>${edad}</td>
                    <td>${nacionalidad}</td>
                    <td>${rango_edad}</td>
                    <td>${resultado_lab}</td>
                    <td>${clasificacion_final}</td>
                    <td>${clas_final_escrita}</td>
                    <td>${confirmados}</td>
                    <td>${sospechosos}</td>
                    <td>${negativos}</td>

                </tr>
                
            `
        })


        document.querySelector('#datosCov').insertAdjacentHTML('beforebegin' , Todos)
        console.log( Todos )
})


