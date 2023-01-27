import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const MENU_LIST = [
	{ text: 'Home', href: '/' },
	{ text: 'About Us', href: '/about' },
	{ text: 'Mercantile', href: '/mercantile' },
];
const Navbar = () => {
	const [navActive, setNavActive] = useState(null);
	const [activeIdx, setActiveIdx] = useState(-1);

	return (
		<header>
			<div className='nav-header'>
				<Image
					className='main-nav-image'
					src='/mmf_icon_alpha_nowords_1.png'
					alt='Magic Meadow Farm logo'
					width={65}
					height={65}
				/>
				<h2>Magic Meadow Farm</h2>
				<div>X</div>
				<div>
					<Link href='/'>Home</Link>
					<Link href='/mercantile'>Market</Link>
					<Link href='/farm'>Farm</Link>
					<Link href='/blog'>Blog</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
