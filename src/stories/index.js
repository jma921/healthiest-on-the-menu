import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import MenuItemContainer from '../components/MenuItemContainer';

import { Button, Welcome } from '@storybook/react/demo';

import hamburger from '../images/hamburger.jpg';

const menuItem = {
  calories: 230,
  calories_from_fat: 80,
  carbs: 26,
  cholestrol: 30,
  dietary_fiber: 1,
  fat: 8,
  name: 'Hamburger',
  protein: 11,
  saturated_fat: 3,
  sodium: 380,
  sugars: 6,
  trans_fat: 0.5
};

const restraunt = {
  formatted_address: '5076 US-31, Calera, AL 35040, USA',
  formatted_phone_number: '(205) 690-8578',
  icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
  id: 'ce6fa32f9cb518d0e5bc0f6759cf68f93c4ff5f5',
  international_phone_number: '+1 205-690-8578',
  name: 'Burger King',
  place_id: 'ChIJcaprhO0tiYgRqp1Mvut472A',
  price_level: 1,
  rating: 3.1,
  reference:
    'CmRRAAAAkgJ6sI2bmRTwEHlKQWfVTwXgAQ9zt-iJCTehJdlZEE5rFWSrtwo2GmZNDpMozPoWAVdJFEsMSA97KyTAqgIEsXk3f96VR2Odqf47fN7jhkRUB2FcPDiofH5OuvO1pYC-EhCLazrk3krzY9KHKiNw-jGmGhQGtN7Xh8oZHFiarAIYlgz_aAu7Dw',
  url: 'https://maps.google.com/?cid=6984934500980268458',
  utc_offset: -300,
  vicinity: '5076 U.S. 31, Calera',
  website: 'http://www.bk.com/restaurants/al/calera/5076-hwy-31-21983.html'
};

storiesOf('Welcome', module).add('to Storybook', () =>
  <Welcome showApp={linkTo('Button')} />
);
storiesOf('MenuItemContainer', module).add('to Storybook', () =>
  <MenuItemContainer
    menuItem={menuItem}
    sideImage={hamburger}
    restraunt={restraunt}
  />
);

storiesOf('Button', module)
  .add('with text', () =>
    <Button onClick={action('clicked')}>Hello Button</Button>
  )
  .add('with some emoji', () =>
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  );
