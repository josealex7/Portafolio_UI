import React, { Component } from 'react'
import {  Button, Grid, Avatar } from '@mui/material'
import {GridMenu, AvatarMenu, PFooter, BotonRedes, GridFooter, DivAFooter, AvatarFooter} from '../style/style'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <GridMenu container spacing={1}>
                    <GridFooter item md={1} sm={1}>
                        
                         <AvatarFooter alt="Remy Sharp" src="https://i.blogs.es/449eed/pc/1366_2000.jpg"/>
                         
                    </GridFooter>    
                    <GridFooter item md={8} sm={8}>
                        <PFooter>Hecho con aprecio de Alexander. Copyright 2021 - Todos los derechos reservados.</PFooter>
                    </GridFooter>
                    <GridFooter item md={3} sm={3}>
                        <BotonRedes>
                            <Button><img src="https://img.icons8.com/material-outlined/24/FFFFFF/github.png"/></Button>
                            <Button><img src="https://img.icons8.com/ios-glyphs/24/FFFFFF/instagram-new.png"/></Button>
                            <Button><img src="https://img.icons8.com/ios-glyphs/24/FFFFFF/twitter.png"/></Button>
                        </BotonRedes>
                    </GridFooter>
                </GridMenu>
            </div>
        )
    }
}
