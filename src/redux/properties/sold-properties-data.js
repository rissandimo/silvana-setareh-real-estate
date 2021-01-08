import house1 from '../../assets/houses/walden.jpg';
import house2 from '../../assets/houses/2.jpg';
import house3 from '../../assets/houses/3.jpg';
import house4 from '../../assets/houses/4.jpg';
import house5 from '../../assets/houses/5.jpg';
import house6 from '../../assets/houses/6.jpg';
import house7 from '../../assets/houses/7.jpg';
import house9 from '../../assets/houses/9.jpg';
import house10 from '../../assets/houses/10.jpg';
import house11 from '../../assets/houses/11.jpg';
import house12 from '../../assets/houses/12.jpg';
import house13 from '../../assets/houses/13.jpg';
import house14 from '../../assets/houses/14.jpg';
import house15 from '../../assets/houses/15.jpg';
import house16 from '../../assets/houses/16.jpg';
import house17 from '../../assets/houses/17.jpg';
import house18 from '../../assets/houses/18.jpg';

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
           type: 'Condominium',
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
           type: 'Condominium',
           mls: 13711565,
           sold: 1
        },
        {
           id: 6,
           address: '248 S DOHENY Drive #7, Beverly Hills, CA 90211',
           price: 3500,
           bedrooms: 1,
           bathrooms: 1,
           image: house16,
           sqft: 1204,
           type: 'Residential Lease',
           mls: 16127112,
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
          address: '466 S Holt Ave Los Angeles, CA 90048',
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
          address: '1450 ROXBURY Drive, Los Angeles, CA 90035',
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
          type: 'Condominium',
          mls: 15818049,
          sold: 1
        },
        {
          id: 4,
          address: '120 N SWALL Drive #302, Los Angeles, CA 90048',
          price: 710000,
          bedrooms: 2,
          bathrooms: 4,
          image: house11,
          sqft: 1607,
          type: 'Condominium',
          mls: 9407607,
          sold: 1
        },
        {
          id: 5,
          address: '100 N WETHERLY Drive #3D, Los Angeles, CA 90048',
          price: 700000,
          bedrooms: 2,
          bathrooms: 2,
          image: house12,
          sqft: 1668,
          type: 'Condominium',
          mls: 13675665,
          sold: 1
        },
        {
          id: 6,
          address: '2169 HERCULES Drive, Los Angeles, CA 90046',
          price: 11000,
          bedrooms: 4,
          bathrooms: 3,
          image: house13,
          sqft: 2948,
          type: 'Residential Lease',
          mls: 14810239,
          sold: 1
        },
        {
          id: 7,
          address: '10390 LA GRANGE Avenue #403, Los Angeles, CA 90025',
          price: 3800,
          bedrooms: 2,
          bathrooms: 2,
          image: house14,
          sqft: undefined,
          type: 'Condominum',
          mls: 8292233,
          sold: 1
        },
        {
          id: 8,
          address: '10390 LA GRANGE Avenue #201, Los Angeles, CA 90025',
          price: 3400,
          bedrooms: 2,
          bathrooms: 2,
          image: house14,
          sqft: 1468,
          type: 'Condominum',
          mls: 8310045,
          sold: 1
        },
        {
          id: 8,
          address: '1840 BENECIA Avenue, Los Angeles, CA 90025',
          price: 2600,
          bedrooms: 3,
          bathrooms: 2,
          image: house17,
          sqft: 1468,
          type: 'Condominum',
          mls: 8310045,
          sold: 1
        },
        {
          id: 9,
          address: '10747 WILSHIRE #802, Los Angeles, CA 90024',
          price: 2100,
          bedrooms: 2,
          bathrooms: 2,
          image: house18,
          sqft: 974,
          type: 'Condominum',
          mls: 11549521,
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
          address: '4734 AQUEDUCT Avenue, Encino, CA 91436',
          price: 3500,
          bedrooms: 3,
          bathrooms: 2,
          image: house15,
          sqft: 1720,
          type: 'Residential Lease',
          mls: 8320809,
          sold: 1
        }
      ]
    }
  ];
  
  export default SOLD_PROPERTIES_DATA;
  