import { Grid, Typography, Stack, Pagination } from '@mui/material'
import useNoticias from "../hooks/useNoticias"
import Noticia from './Noticia'

const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()
    
    /* console.log(noticias) */
    const cantNoticiasPagina = 20 // viene definido por la API. Se puede cambiar
    const totalPagina = Math.ceil(totalNoticias / cantNoticiasPagina)


    return (
        <>
            <Typography
                textAlign='center'
                marginY={5}
                variant='h3'
                component='h2'
            >
                Últimas Noticias
            </Typography>
                
            <Grid
                container
                spacing={2}
            >
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>

            <Stack
                spacing={2}
                direction='row'
                justifyContent='center'
                alignItems='center'
                sx={{
                    marginY: 5
                }}
            >
                <Pagination
                    count={totalPagina}
                    color="primary"
                    onChange={handleChangePagina}
                    page={pagina}
                />
            </Stack>
        </>
    )
}

export default ListadoNoticias
