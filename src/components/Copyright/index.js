import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const Copyright = () => {
    return (
        <Typography
            variant="body2"
            style={ { color: 'white' } }
            align="center">
            { `Copyright © `}
             <Link
                color="inherit"
                href="https://hexagon.com/">
                Hexagon
            </Link> 
            { ` ${ new Date().getFullYear() }.` }
        </Typography>
    );
}
