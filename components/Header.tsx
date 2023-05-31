'use client';

import Link from 'next/link';
import LogoIcon from '~/assets/icons/logo.svg';
import PhoneIcon from '~/assets/icons/phone.svg';
import MapMarkerIcon from '~/assets/icons/mapMarker.svg';
import HeartIcon from '~/assets/icons/heart.svg';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-6 lg:border-b lg:border-agray">
      <div className="container flex justify-between">
        <div className="flex items-center gap-x-[70px]">
          <Link href="/" className="">
            <LogoIcon className="w-[89px] h-[24px] lg:w-[123px] lg:h-[33px]" />
          </Link>
          <div className="flex items-center gap-x-[10px] cursor-pointer">
            <PhoneIcon />
            <span className="text-sm leading-[19px] font-medium lg:text-base lg:leading-[22px] hover:text-ared">
              Кострома
            </span>
          </div>
          <Link
            href="tel:+ 7 (4942) 36-00-61"
            className="flex items-center gap-x-[10px] hover:text-ared"
          >
            <MapMarkerIcon />
            <span className="font-medium leading-[22px]">
              + 7 (4942) 36-00-61
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-x-[10px]">
          <Link href="" className="btn btn-outline p-3">
            <HeartIcon />
          </Link>
          <button disabled className="btn btn-outline px-5 py-3">
            Добавить объявление
          </button>
          <button disabled className="btn btn-fill px-5 py-3">
            Личный кабинет
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
