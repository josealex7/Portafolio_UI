import React, { Component } from 'react'
import { Grid, Button } from '@mui/material'
import { GridInicio, ImgInicio, TituInicio, PInicio, BotonFlecha } from '../style/style'


export default class Inicio extends Component {
    render() {
        return (
            <div>
                <GridInicio container spacing={1}>
                    <Grid item md={6} sm={6}>
                    <TituInicio>¡Hola a Todos!</TituInicio>
                    <TituInicio>¡Soy Alexander Tavera!</TituInicio>
                    <PInicio>Developer que le encanta implementar diseños que 
                    inspiran y atraen a las personas.</PInicio>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <ImgInicio src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1638551365/Alexander_Tavera_x3erik.jpg"></ImgInicio>
                    </Grid>
                    <BotonFlecha>
                        <Button><a href="#Proyectos"><img src="https://img.icons8.com/material-outlined/50/1FB423/down--v2.png"/></a></Button>
                    </BotonFlecha>
                </GridInicio>
            </div>
        )
    }
}
