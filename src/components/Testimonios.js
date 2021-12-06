import { Typography, Grid, CardHeader, Avatar, CardContent } from '@mui/material'
import React, { Component } from 'react'
import { CardTest, GridTesti, DivTesti, TituTesti, ContenedorImg,ImgProyect } from '../style/style'


export default class Testimonios extends Component {
    render() {
        return (
            <DivTesti id={"Testimonios"}>
                <GridTesti container>
                    <TituTesti variant="h3">Testimonios</TituTesti>
                </GridTesti>
                <GridTesti container>
                    <GridTesti item md={4} sm={4}>
                        <CardTest sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe"></Avatar>
                            }
                            title="Juan Antonio"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Tengo algunos años trabajando con Javascript y aún así 
                            aprendí varias cosas importantes de Antonio y como utiliza 
                            Javascript en el día a día.
                            </Typography>
                        </CardContent>
                        </CardTest>
                    </GridTesti>
                    <GridTesti item md={4} sm={4}>
                        <CardTest sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe"></Avatar>
                            }
                            title="Albert Flores"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Me gusto ver el porqué de las cosas del core de React, 
                            saber la magia que ocurre por detrás, excelente profesor 
                            Antonio gran vocación. 
                            </Typography>
                        </CardContent>
                        </CardTest>
                    </GridTesti>
                    <GridTesti item md={4} sm={4}>
                        <CardTest sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe"></Avatar>
                            }
                            title="Darlene Robertson"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Ayuda a entender el porqué de las cosas, lo cual 
                            nos da el poder de aprovechar mejor el lenguaje y 
                            las herramientas que tenemos.
                            </Typography>
                        </CardContent>
                        </CardTest>
                    </GridTesti>
                </GridTesti>
                <GridTesti container>
                    <GridTesti item md={4} sm={4}>
                        <CardTest sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe"></Avatar>
                            }
                            title="Jane Cooper"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            La forma como explica y trabaja los temas Antonio, 
                            me ha ayudado a comprender y sacarle el mayor 
                            provecho a HTML y CSS. 
                            </Typography>
                        </CardContent>
                        </CardTest>
                    </GridTesti>
                    <GridTesti item md={4} sm={4}>
                        <CardTest sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe"></Avatar>
                            }
                            title="Eleanor Pena"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Antonio ha sido de gran ayuda para acelerar ciertos
                             esfuerzos de desarrollo. Lo que nos hubiera llevado 
                             6 meses solo les llevó 1,5 meses. 
                            </Typography>
                        </CardContent>
                        </CardTest>
                    </GridTesti>
                    <GridTesti item md={4} sm={4}>
                        <CardTest sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe"></Avatar>
                            }
                            title="Guy Hawkins"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Antonio ha superado mis expectativas desde el 
                            diseño hasta el desarrollo.
                            </Typography>
                        </CardContent>
                        </CardTest>
                    </GridTesti>
                </GridTesti>
                <Grid container>
                    <Grid item md={12} sm={12}>
                    <ImgProyect src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1638678706/Sin_t%C3%ADtulo_spc3qx.png"></ImgProyect>
                    </Grid>
                </Grid>
            </DivTesti>
            
        )
    }
}
