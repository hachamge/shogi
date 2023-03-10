import { prnt_grid, en_sqr_chkng } from './config/config_square.js';
import { create_squares } from './config/generate.js';

create_squares().then(prnt_grid().then(en_sqr_chkng));

