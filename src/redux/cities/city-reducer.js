
import beverlyHills from '../../assets/cities/bh.jpg';
import encino from '../../assets/cities/bh.jpg';
import losAngeles from '../../assets/cities/la.jpg';
import westHollywood from '../../assets/cities/wh.jpg';

const INITIAL_STATE = {
    sold: [
        {
            title: 'Beverly Hills',
            imageUrl: beverlyHills,
            id: 1,
            linkUrl: '/sold/beverlyHills'
        },
        {
            title: 'Los Angeles',
            imageUrl: losAngeles,
            id: 2,
            linkUrl: '/sold/losAngeles'
        },
        {
            title: 'Encino',
            imageUrl: encino,
            id: 3,
            linkUrl: '/sold/encino'
        },
        {
            title: 'West Hollywood',
            imageUrl: westHollywood,
            id: 4,
            linkUrl: '/sold/westHollywood'
        }
    ]
}

const citiesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default citiesReducer;