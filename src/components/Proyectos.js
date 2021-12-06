import React, { Component } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { GridProyecto, BotonVer, GridServicio, Pproyecto, TypoServi, GridSer,  TituloProyec, ContenedorImg, ImgProyect, TituServicios } from '../style/style'


export default class Proyectos extends Component {
    render() {
        return (
            <div>
                <GridProyecto container id={"Proyectos"}>
                    <Grid item md={6} sm={6}>
                        <TituloProyec variant="h3">Parece magia, funciona con código.</TituloProyec>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <Pproyecto>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</Pproyecto>
                    </Grid>
                </GridProyecto>
                <GridProyecto container>
                    <Grid item md={12} sm={12}>
                        <ContenedorImg>
                            <ImgProyect src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1638634758/Venta_iehvpu.png"></ImgProyect>
                        </ContenedorImg>
                    </Grid>
                </GridProyecto>
                <GridProyecto container>
                    <Grid item md={6} sm={6}>
                        <ContenedorImg>
                            <ImgProyect src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1638635981/Venta_iob8ew.png"></ImgProyect>
                        </ContenedorImg>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <ContenedorImg>
                            <ImgProyect src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1638636235/Venta_ocqmip.png"></ImgProyect>
                        </ContenedorImg>
                    </Grid>  
                </GridProyecto>
                <GridServicio container>
                    <TituServicios variant="h2">Servicios</TituServicios>  
                </GridServicio>
                
                <GridServicio container>
                    <GridSer item md={4} sm={4}>
                        <TypoServi variant="h4">Diseño</TypoServi>
                        <TypoServi variant="h5">Experiencia de usuario</TypoServi>
                        <TypoServi variant="h5">Interfaz de usuario</TypoServi>
                        <TypoServi variant="h5">Aplicaciones web</TypoServi>
                        <TypoServi variant="h5">Prueba de concepto</TypoServi>
                        <BotonVer>
                            <Button variant="contained" color="success">Ver servicios de diseño</Button>
                        </BotonVer>
                    </GridSer>
                    <GridSer item md={4} sm={4}>
                        <TypoServi variant="h4">Desarrollo</TypoServi>
                        <TypoServi variant="h5">Aplicaciones móviles</TypoServi>
                        <TypoServi variant="h5">Sitios web</TypoServi>
                        <TypoServi variant="h5">Aplicaciones web progresivas</TypoServi>
                        <BotonVer>
                            <Button variant="contained" color="success">Ver servicios de desarrollo</Button>
                        </BotonVer>
                    </GridSer>  
                    <GridSer item md={4} sm={4}>
                        <TypoServi variant="h4">Marca</TypoServi>
                        <TypoServi variant="h5">Identidad de la marca</TypoServi>
                        <TypoServi variant="h5">Estrategia de marca</TypoServi>
                        <BotonVer>
                            <Button variant="contained" color="success">Ver servicios de marca</Button>
                        </BotonVer>
                    </GridSer>   
                </GridServicio>
            </div>
        )
    }
}
