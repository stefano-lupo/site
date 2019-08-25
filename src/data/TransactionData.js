
import A330 from '../assets/img/transactions/planes/airbus-a330.jpeg';
import AirTransat from '../assets/img/transactions/planes/air-transat.jpeg';
import AtlasGlobal from '../assets/img/transactions/planes/atlas-global.jpeg';
import SurinamAirways from '../assets/img/transactions/planes/surinam-airways.jpeg';

import AirbusLogo from '../assets/img/partner-logos/airbus.png';
import AirTransatLogo from '../assets/img/partner-logos/air-transat.png';
import SurinamAirwaysLogo from '../assets/img/partner-logos/surinam-airways.png';


export default [
  {
    type: 'acquisition',
    asset: 'airplane',
    model: 'a340-300',
    quantity: 2,
    partner: 'airbus',
    date: 'Late 2018',
    imagePath: A330,
    logoPath: AirbusLogo,
  },
  {
    type: 'lease',
    asset: 'airplane',
    model: 'a320-200',
    quantity: 4,
    partner: 'air-transat',
    date: 'Late 2018',
    imagePath: AirTransat,
    logoPath: AirTransatLogo,
  },

  {
    type: 'acquisition',
    asset: 'airplane',
    model: 'a340-300',
    quantity: 1,
    partner: 'airbus',
    date: 'Early 2018',
    imagePath: AtlasGlobal,
    logoPath: AirbusLogo,
  },

  {
    type: 'lease',
    asset: 'airplane',
    model: 'a340-300',
    quantity: 1,
    partner: 'surinam-airways',
    date: 'Early 2018',
    imagePath: SurinamAirways,
    logoPath: SurinamAirwaysLogo,
  },
];