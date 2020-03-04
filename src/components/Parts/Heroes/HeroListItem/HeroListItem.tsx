import React from 'react';
import { IHero } from '../../../../models/Hero';

export default function HeroListItem (hero: IHero) {
    
    return(
        <>
          <p>{hero.Name}</p>  
        </>
    )
}