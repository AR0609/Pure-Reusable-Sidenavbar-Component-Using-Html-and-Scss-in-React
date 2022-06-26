import React from 'react';
import Sidenavbarpresentational from './sidenavbarpresentational';
import { menus } from './menu-constant';

const Sidenavbarfunctional = () => {
	return (
		<div>
			<Sidenavbarpresentational menus={menus} />
		</div>
	);
};

export default Sidenavbarfunctional;
