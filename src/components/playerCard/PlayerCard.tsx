import React from 'react';
import './style.scss';


export interface PlayerCardViewModel { 
    id?: number; 
    commonName?: string; 
    firstName?: string; 
    lastName?: string; 
    name?: string; 
    leagueId?: number; 
    nationId?: number; 
    clubId?: number; 
    clubImageUrl?: string; 
    nationImageUrl?: string; 
    imageUrl?: string; 
    position?: string; 
    playStyle?: string; 
    isIcon?: boolean; 
    quality?: string; 
    isSpecialType?: boolean; 
    baseId?: number; 
    rating?: number; 
}

export interface CardProps extends PlayerCardViewModel{
    children?:React.ReactNode;
}

export function PlayerCard(props: CardProps) {
    var isSpecial = false;
    if(props.imageUrl){
        var tokens = props.imageUrl.split('/');
        isSpecial = tokens[tokens.length - 1].startsWith('p');
    }
    var cardCss = 'player-card kind-' + (props.quality ? props.quality.toLowerCase().replace(/ /g, '-') : '');
    if(isSpecial){
        cardCss += ' special-player-card'
    }
    return (
        <div className={cardCss}>
            {isSpecial && <div className="top-overlay" />}
            <div className="info rating">{props.rating}</div>
            <div className="info position">{props.position}</div>
            <div className="image">
                <img src={props.imageUrl} />
            </div>
            <div className="club">
                <img src={props.clubImageUrl} />
            </div>
            <div className="country">
                <img src={props.nationImageUrl} />
            </div>
            <div className="name">{props.name}</div>
            <div className="meta">
                {props.children}
            </div>
        </div>
    )
}