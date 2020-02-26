import React from 'react';
import { Hero } from '../../../models/Hero';

export default function HeroListItem (hero: Hero) {
    
    return(
        <>
          <p>{hero.name}</p>  
        </>
    )
}