import React, { Component } from 'react'
import './nature.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      position: 'absolute',
      bottom: -200
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));

  export default function Nature() {
    const classes = useStyles();
    return (
        <div className='nature-container'>
             <div className='nature-hero'>
                 <h1>The Nature</h1>
            </div>
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                         <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
                 </GridList>
    </div>
        </div>
        
      
   )
}
