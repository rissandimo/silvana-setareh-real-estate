import house1 from '../../assets/houses/walden.jpg';
import house2 from '../../assets/houses/2.jpg';
import house3 from '../../assets/houses/3.jpg';

const SOLD_PROPERTIES_DATA = [
    {
      id: 1,
      title: 'Beverly Hills',
      routeName: 'beverlyHills',
      properties: [
        {
            id: 1,
            address: '619 Waldren Dr, Beverly Hills, CA 90211',
            price: 5255000,
            bedrooms: 6,
            bathrooms: 6,
            image: house1,
            sqft: 7195,
            type: 'Residential',
            mls: 13645833
        },
        {
           id: 2,
           address: '1241 Beverly View Dr. Beverly Hills, CA 90211',
           price: 182500,
           bedrooms: 4,
           bathrooms: 4,
           image: house2,
           sqft: 2848,
           type: 'Residential',
           mls: 9393561
        },
      ]
    },
    {
      id: 2,
      title: 'Los Angeles',
      routeName: 'losAngeles',
      properties: [
        {
          id: 3,
          address: '466 S Holt Ave. Los Angeles, CA 90048',
          price: 1795000,
          bedrooms: 4,
          bathrooms: 4,
          image: house3,
          sqft: 2563,
          type: 'Residential',
          mls: 17230202
        }
      ]
    }
  ];
  
  export default SOLD_PROPERTIES_DATA;
  