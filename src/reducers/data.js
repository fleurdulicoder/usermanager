import { uniqueId } from 'lodash';

const data = {
  users: [
    {
      age: 12,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien lorem, tempus sed ultrices nec, lacinia in elit. Suspendisse euismod malesuada lacus vel accumsan. Sed ullamcorper venenatis cursus. Aenean auctor dictum nulla vel viverra. Integer posuere quam sem, vitae lobortis nibh consequat tempus.',
      id: uniqueId(),
      img: '/img/users/user-1.png',
      name: 'Sage Hewett',
      role: 'Development',
      company: 'Orion Health',
      email: 'shewett@orionhealth.com',
      website: 'google.com',
      phone: '480-221-2121',
    },
    {
      age: 22,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien lorem, tempus sed ultrices nec, lacinia in elit. Suspendisse euismod malesuada lacus vel accumsan. Sed ullamcorper venenatis cursus. Aenean auctor dictum nulla vel viverra. Integer posuere quam sem, vitae lobortis nibh consequat tempus.',
      id: uniqueId(),
      img: '/img/users/user-2.png',
      name: 'Dan Miller',
      role: 'Marketing',
      company: 'Orion Health',
      email: 'dmiller@orionhealth.com',
      website: 'google.com',
      phone: '480-444-2132',
    },
    {
      age: 44,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien lorem, tempus sed ultrices nec, lacinia in elit. Suspendisse euismod malesuada lacus vel accumsan. Sed ullamcorper venenatis cursus. Aenean auctor dictum nulla vel viverra. Integer posuere quam sem, vitae lobortis nibh consequat tempus.',
      id: uniqueId(),
      img: '/img/users/user-3.png',
      name: 'Tony Williamson',
      role: 'Management',
      company: 'Orion Health',
      email: 'twilliamson@orionhealth.com',
      website: 'google.com',
      phone: '480-555-3553',
    },
    {
      age: 100,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien lorem, tempus sed ultrices nec, lacinia in elit. Suspendisse euismod malesuada lacus vel accumsan. Sed ullamcorper venenatis cursus. Aenean auctor dictum nulla vel viverra. Integer posuere quam sem, vitae lobortis nibh consequat tempus.',
      id: uniqueId(),
      img: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//pokecoin1600.png',
      name: 'Kate Winsey',
      role: 'HR',
      company: 'Orion Health',
      email: 'kwinsley@orionhealth.com',
      website: 'google.com',
      phone: '480-666-7777',
    },
  ],
};

export default data;
