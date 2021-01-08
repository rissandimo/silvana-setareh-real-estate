import house1 from '../../assets/houses/walden.jpg';
import house2 from '../../assets/houses/2.jpg';
import house3 from '../../assets/houses/3.jpg';
import house4 from '../../assets/houses/4.jpg';
import house5 from '../../assets/houses/5.jpg';
import house6 from '../../assets/houses/6.jpg';
import house7 from '../../assets/houses/7.jpg';
import house9 from '../../assets/houses/9.jpg';
import house10 from '../../assets/houses/10.jpg';

const SOLD_PROPERTIES_DATA = [
    {
      id: 1,
      title: 'Beverly Hills',
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
            mls: 13645833,
            sold: 1
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
           mls: 9393561,
           sold: 1
        },
        {
           id: 3,
           address: '145 S CLARK Drive. Beverly Hills, CA 90211',
           price: 1750000,
           bedrooms: 3,
           bathrooms: 2,
           image: house4,
           sqft: 1901,
           type: 'Residential',
           mls: 14760641,
           sold: 1
        },
        {
           id: 4,
           address: '320 N MAPLE Drive #503, Beverly Hills, CA 90210',
           price: 1310000,
           bedrooms: 2,
           bathrooms: 3,
           image: house6,
           sqft: 2090,
           type: 'Residential',
           mls: 17258278,
           sold: 1
        },
        {
           id: 5,
           address: '320 N MAPLE Drive #505, Beverly Hills, CA 90210',
           price: 1310000,
           bedrooms: 2,
           bathrooms: 3,
           image: house7,
           sqft: 1989,
           type: 'Residential',
           mls: 13711565,
           sold: 1
        }
      ]
    },
    {
      id: 2,
      title: 'Los Angeles',
      properties: [
        {
          id: 1,
          address: '466 S Holt Ave. Los Angeles, CA 90048',
          price: 1795000,
          bedrooms: 4,
          bathrooms: 4,
          image: house3,
          sqft: 2563,
          type: 'Residential',
          mls: 17230202,
          sold: 1
        },
        {
          id: 2,
          address: '1450 ROXBURY Drive. Los Angeles, CA 90035',
          price: 1550000,
          bedrooms: 3,
          bathrooms: 2,
          image: house5,
          sqft: 1706,
          type: 'Residential',
          mls: 18350564,
          sold: 1
        },
        {
          id: 3,
          address: '865 COMSTOCK Avenue #8D, Los Angeles, CA 90024',
          price: 925000,
          bedrooms: 3,
          bathrooms: 3,
          image: house10,
          sqft: 1937,
          type: 'Residential',
          mls: 15818049,
          sold: 1
        }
      ]
    },
    {
      id: 3,
      title: 'West Hollywood',
      properties: [
        {
          id: 1,
          address: '138 N ALMONT Drive, West Hollywood, CA 90048',
          price: 1000000,
          bedrooms: 3,
          bathrooms: 2,
          image: house9,
          sqft: 1654,
          type: 'Residential',
          mls: 5022723,
          sold: 1
        }
      ]
    },
    {
      id: 4,
      title: 'Encino',
      properties: [
        {
          id: 1,
          address: '138 N ALMONT Drive, West Hollywood, CA 90048',
          price: 1000000,
          bedrooms: 3,
          bathrooms: 2,
          image: house9,
          sqft: 1654,
          type: 'Residential',
          mls: 5022723,
          sold: 1
        }
      ]
    }
  ];
  
  export default SOLD_PROPERTIES_DATA;
  