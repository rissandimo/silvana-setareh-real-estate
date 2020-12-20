const INITIAL_STATE = {
    cities: [
        {
            title: 'Beverly Hills',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1
        },
        {
            title: 'Los Angeles',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2
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