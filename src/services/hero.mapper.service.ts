export const mapBeHeroToFeHero = (hero) => {
    let _hero = {};
    Object.keys(hero).forEach(prop => Object.assign({}, _hero, _hero[capitalize(prop)] = hero[prop]));
    return _hero;
}

export const mapFeHeroToBeHero = (hero) => {
    let _hero = {};
    Object.keys(hero).forEach(prop => Object.assign({}, _hero, _hero[prop] = hero[prop]));
    return _hero;
}

const capitalize = s => s[0].toUpperCase() + s.substr(1);
const strip = s => s.substr(1);