import { uniqueId } from 'lodash';

const data = {
  users: [
      {
        id: uniqueId(),
        name: 'Sage Hewett',
        role: 'Development',
        age: 12,
        img: '/img/users/user-1.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien lorem, tempus sed ultrices nec, lacinia in elit. Suspendisse euismod malesuada lacus vel accumsan. Sed ullamcorper venenatis cursus. Aenean auctor dictum nulla vel viverra. Integer posuere quam sem, vitae lobortis nibh consequat tempus.'
      },
      {
        id: uniqueId(),
        name: 'Dan Miller',
        age: 22,
        role: 'Marketing',
        img: '/img/users/user-2.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien lorem, tempus sed ultrices nec, lacinia in elit. Suspendisse euismod malesuada lacus vel accumsan. Sed ullamcorper venenatis cursus. Aenean auctor dictum nulla vel viverra. Integer posuere quam sem, vitae lobortis nibh consequat tempus.'
      },
      {
        id: uniqueId(),
        name: 'Tony Williamson',
        age: 45,
        role: 'Management',
        img: '/img/users/user-3.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien lorem, tempus sed ultrices nec, lacinia in elit. Suspendisse euismod malesuada lacus vel accumsan. Sed ullamcorper venenatis cursus. Aenean auctor dictum nulla vel viverra. Integer posuere quam sem, vitae lobortis nibh consequat tempus.'
      },
      {
        id: uniqueId(),
        name: 'Kate Winsey',
        role: 'HR',
        age: 100,
        img: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//pokecoin1600.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien lorem, tempus sed ultrices nec, lacinia in elit. Suspendisse euismod malesuada lacus vel accumsan. Sed ullamcorper venenatis cursus. Aenean auctor dictum nulla vel viverra. Integer posuere quam sem, vitae lobortis nibh consequat tempus.'
    }
  ]
};

export default data;
