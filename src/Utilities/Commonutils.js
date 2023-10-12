import Home from '../Container/Home/Home';
import AboutMe from '../Container/About/About';
import Resume from '../Container/Resume/Resume';
import Testimonies from '../Container/Testimonies/Testimonies';
import Contact from '../Container/Contact/Contact';

export const TOTAL_SCREENS = [
    {
        screen_name:"Home",
        component:Home,
    },
    {
        screen_name:"AboutMe",
        component:AboutMe,
    },
    {
        screen_name:"Resume",
        component:Resume,
    },
    {
        screen_name:"Testimonial",
        component:Testimonies,
    },
    {
        screen_name:"ContactMe",
        component:Contact,
    },
];

export const GET_SCREEN_INDEX = (screen_name) =>{
    if(!screen_name) return -1;
    for(let i=0; i< TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
};