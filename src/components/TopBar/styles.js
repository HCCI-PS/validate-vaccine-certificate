import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
    return {
        logo: {
            display: 'inline',
            marginLeft: 10,
        },
        userDetail: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
            marginRight:10,
        },
        topBar: {
            backgroundColor: '#0088ac',
            backgroundImage: `url(${process.env.PUBLIC_URL}/topbar.png)`,
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
            backgroundSize: '1400px 100%',
            backgroundPosition: 'center',
        },
    };
});