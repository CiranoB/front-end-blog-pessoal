import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material'
import './Home.css';


function Home() {
    return (
        <>
            {/* Display da página */}
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className='caixa'
            >

                {/* Primeiro Grid */}

                <Grid alignItems="center" item xs={12} sm={6} >
                    <Box paddingX={20} >

                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            align="center"
                            className='titulo'
                        >Seja bem vindo(a)!
                        </Typography>

                        <Typography
                            variant="h5"
                            gutterBottom
                            color="textPrimary"
                            component="h5"
                            align="center"
                            className='titulo'
                        >Expresse aqui os seus pensamentos e opiniões!
                        </Typography>

                    </Box>

                    <Box  display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>

                        <Button className='verpost'
                            variant="outlined"
                        >Ver Postagens
                        </Button>
                        <p>                         </p>

                    </Box>
                </Grid>

                { /* Segundo Grid */}

                <Grid item xs={12} sm={6} >
                    <Typography align="center">
                    <img src="https://i.imgur.com/zMfC6Ip_d.webp?maxwidth=760&fidelity=grand" alt="" width="500px" height="500px" />
                    </Typography>
                </Grid>

                <Grid xs={12} className='postagens'>
                </Grid>

            </Grid>

        </>
    );
}

export default Home;