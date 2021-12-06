import { Typography, Grid, TextField, Button, TextareaAutosize } from '@mui/material'
import React, { Component } from 'react'
import { GridForm, TituForm, FormDatos, AreaDatos } from '../style/style'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xdobnqja");
    if (state.succeeded) {
        return (
        <GridForm container id={"Contacto"}>
            <FormDatos>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TituForm variant="h4">¡Enviado!</TituForm>
                        <p>El correo fue enviado de manera exitosa</p>
                    </Grid>
                </Grid>
            </FormDatos>
        </GridForm>
        );
    }
    return (
        <div>
            <GridForm container id={"Contacto"}>
                <FormDatos onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TituForm variant="h4">Contacto</TituForm>
                            <p>Si está interesado en 
                            trabajar conmigo en su próximo 
                            proyecto, no dude en ponerse en contacto.</p>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Nombre Completo"
                                variant="outlined"
                                required
                                id="name"
                                type="name" 
                                name="name"/>
                        
                            <ValidationError 
                                prefix="name" 
                                field="name"
                                errors={state.errors}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Correo electrónico"
                                variant="outlined"
                                required
                                id="email"
                                type="email" 
                                name="email"/>
                        
                            <ValidationError 
                                prefix="email" 
                                field="email"
                                errors={state.errors}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <AreaDatos
                            id="message"
                            name="message"
                            minRows={4}
                            placeholder="Mensaje"
                            />

                            <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth variant="contained" 
                                type="submit" 
                                disabled={state.submitting}
                                color="primary">
                                Enviar Mensaje
                            </Button>
                        </Grid>
                    </Grid>
                </FormDatos>
            </GridForm>
      </div>
    );
  }
  function Formulario() {
    return (
      <ContactForm />
    );
  }
  export default Formulario;