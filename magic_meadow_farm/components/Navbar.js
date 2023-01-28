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
					width={85}
					height={85}
				/>
				<h2>Magic Meadow Farm</h2>
				<div className='nav-toggle'>X</div>
				<div className='nav-links'>
					<Link href='/'>Home</Link>
					<Link href='/mercantile'>Market</Link>
					<Link href='/farm'>Farm</Link>
					<Link href='/blog'>Blog</Link>
				</div>
			</div>
		</header>
	);
}
