import {
    dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images'

import { TextureLoader } from 'three';

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);   
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const groundTexture = new TextureLoader().load(grassImg);


export {
    dirtTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    logTexture,
    groundTexture,
}