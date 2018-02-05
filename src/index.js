import React from 'react';
import ReactDOM from 'react-dom';
import SunnyGoRound from './App';

import fontawesome from '@fortawesome/fontawesome'
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';

fontawesome.library.add(faChevronLeft)
fontawesome.library.add(faChevronRight)

ReactDOM.render(<SunnyGoRound />, document.getElementById('sunny-carousel'));
