import uberX from '../assets/rides/taxi.png';
import uberBlack from '../assets/rides/hatchback.png';
import uberBlackSUV from '../assets/rides/suv.png';
import uberSelect from '../assets/rides/sport-car.png';
import uberXL from '../assets/rides/box-truck.png';
import ethLogo from '../assets/ethereum.png';
import Image from 'next/image';

const style = {
	wrapper: `h-full flex flex-col`,
	title: `text-gray-500 text-center text-xs py-2 border-b`,
	carList: `flex flex-col flex-1 overflow-scroll`,
	car: `flex p-3 m-2 items-center border-2 border-white`,
	selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
	carImage: `h-14`,
	carDetails: `ml-2 flex-1`,
	service: `font-medium`,
	time: `text-xs text-blue-500`,
	priceContainer: `flex items-center`,
	price: `mr-[0.1rem]`,
};

const carList = [
	{
		service: 'UberX',
		iconUrl: uberX,
		priceMultiplier: 1,
	},
	{
		service: 'UberBlack',
		iconUrl: uberBlack,
		priceMultiplier: 1.5,
	},
	{
		service: 'UberBlackSUV',
		iconUrl: uberBlackSUV,
		priceMultiplier: 1.5,
	},
	{
		service: 'UberSelect',
		iconUrl: uberSelect,
		priceMultiplier: 1.5,
	},
	{
		service: 'UberXL',
		iconUrl: uberXL,
		priceMultiplier: 1.5,
	},
];

const basePrice = 1542;

const RideSelector = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.title}>Choose a ride, or swipe up for more</div>
			<div className={style.carList}>
				{carList.map((car, index) => (
					<div className={style.car}>
						<Image src={car.iconUrl} className={style.carImage} height={50} width={50} />
						<div className={style.carDetails}>
							<div className={style.service}>{car.service}</div>
							<div className={style.time}>5 min away</div>
						</div>
						<div className={style.priceContainer}>
							<div className={style.price}>{((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}</div>
							<Image src={ethLogo} height={12} width={12} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RideSelector;
