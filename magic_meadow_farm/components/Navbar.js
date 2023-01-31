import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
	return (
		<header>
			<div className='nav-header'>
				<Image
					className='main-nav-image'
					src='/mmf_icon_alpha_nowords_1.png'
					alt='Magic Meadow Farm logo'
					width={55}
					height={55}
					priority
				/>
				<h2>Magic Meadow Mercantile</h2>
				<div className='nav-toggle'>X</div>
			</div>
			<div className='nav-links'>
				<Link className='nav-link' href='/'>
					Home
				</Link>
				<Link className='nav-link' href='/mercantile'>
					Mercantile
				</Link>
				<Link className='nav-link' href='/farm'>
					Farm
				</Link>
				<Link className='nav-link' href='/blog'>
					Blog
				</Link>
				<Link className='nav-link' href='/products'>
					Products
				</Link>
			</div>
		</header>
	);
}
