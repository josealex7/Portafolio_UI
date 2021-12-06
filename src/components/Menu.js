import React, { Component } from 'react'
import {  Button, Grid } from '@mui/material'
import {LiMenu, GridMenu, AvatarMenu, SpanM, GridAvatar, GridBoton} from '../style/style'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <GridMenu container spacing={1}>
                    <Grid item md={0.5} sm={0.5}>
                        <SpanM>
                            <Button><img src="https://img.icons8.com/ios-filled/30/008f39/menu--v1.png"/></Button> 
                        </SpanM>
                    </Grid> 
                    <GridAvatar item md={1.5} sm={1.5}>
                         <AvatarMenu alt="Remy Sharp" src="https://i.blogs.es/449eed/pc/1366_2000.jpg"/>
                    </GridAvatar>    
                    <Grid item md={7} sm={7}>
                        <ul>
                            <LiMenu ><a href={'#Inicio'} style={{textDecoration:'none',color:'white'}}>Hola</a></LiMenu>
                            <LiMenu><a href='#Proyectos' style={{textDecoration:'none',color:'white'}}>Proyectos</a></LiMenu>
                            <LiMenu><a href="#Testimonios" style={{textDecoration:'none',color:'white'}}>Testimonios</a></LiMenu>
                            <LiMenu><a href="#Contacto" style={{textDecoration:'none',color:'white'}}>Contacto</a></LiMenu>
                        </ul>
                    </Grid>
                    <Grid item md={3} sm={3}>
                        <Button variant="contained" color="success"><a href="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1638749906/Hoja_de_vida_-_Developer_jr_wlqvzn.png" download="Hoja_De_Vida_Alexander_Tavera" style={{textDecoration:'none',color:'white'}}>Descargar Currículum</a></Button>
                    </Grid>
                </GridMenu>
            </div>
        )
    }
}
