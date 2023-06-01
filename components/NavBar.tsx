import Link from 'next/link';
import { FC } from 'react';

const NavBar: FC = () => {
  return (
    <section className="bg-white lg:border-b lg:border-agray">
      <div className="container">
        <nav className="flex justify-between">
          <div className="relative group">
            <Link
              className="absolute py-6 group-hover:text-ared after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:rounded after:w-0 after:h-[4px] after:bg-ared hover:after:w-full hover:after:transition-all focus:after:w-full"
              href="/"
            >
              Купить
            </Link>
            <nav className="bg-white absolute hidden flex-col gap-y-[14px] top-full p-7 border border-solid border-agray rounded-b-[10px] shadow-[-4px_0px_33px_rgba(52,112,138,0.19)] whitespace-nowrap cursor-default group-hover:flex">
              <Link className="hover:text-ared" href="/">
                Квартира в новостройке
              </Link>
              <Link className="hover:text-ared" href="/">
                Квартира во вторичке
              </Link>
              <Link className="hover:text-ared" href="/">
                Комната
              </Link>
              <Link className="hover:text-ared" href="/">
                Дом, коттедж
              </Link>
              <Link className="hover:text-ared" href="/">
                Таунхаус
              </Link>
              <Link className="hover:text-ared" href="/">
                Участок
              </Link>
              <Link className="hover:text-ared" href="/">
                Часть дома
              </Link>
              <Link className="hover:text-ared" href="/">
                Коммерческая недвижимость
              </Link>
              <Link className="hover:text-ared" href="/">
                Дача
              </Link>
              <Link className="hover:text-ared" href="/">
                Гараж
              </Link>
            </nav>
          </div>

          <div className="relative group">
            <Link
              className="absolute py-6 group-hover:text-ared after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:rounded after:w-0 after:h-[4px] after:bg-ared hover:after:w-full hover:after:transition-all focus:after:w-full"
              href="/"
            >
              Снять
            </Link>
            <nav className="bg-white absolute hidden flex-col gap-y-[14px] top-full p-7 border border-solid border-agray rounded-b-[10px] shadow-[-4px_0px_33px_rgba(52,112,138,0.19)] whitespace-nowrap cursor-default group-hover:flex">
              <Link className="hover:text-ared" href="/">
                Однокомнатная квартира
              </Link>
              <Link className="hover:text-ared" href="/">
                Двухкомнатная квартира
              </Link>
              <Link className="hover:text-ared" href="/">
                Трехкомнатная квартира
              </Link>
              <Link className="hover:text-ared" href="/">
                Дом, коттедж
              </Link>
              <Link className="hover:text-ared" href="/">
                Комната
              </Link>
              <Link className="hover:text-ared" href="/">
                Студия
              </Link>
              <Link className="hover:text-ared" href="/">
                Коммерческая недвижимость
              </Link>
            </nav>
          </div>

          <div className="relative group">
            <Link
              className="absolute py-6 group-hover:text-ared after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:rounded after:w-0 after:h-[4px] after:bg-ared hover:after:w-full hover:after:transition-all focus:after:w-full"
              href="/"
            >
              Услуги
            </Link>
            <nav className="bg-white absolute hidden flex-col gap-y-[14px] top-full p-7 border border-solid border-agray rounded-b-[10px] shadow-[-4px_0px_33px_rgba(52,112,138,0.19)] whitespace-nowrap cursor-default group-hover:flex">
              <Link className="hover:text-ared" href="/">
                Однокомнатная квартира
              </Link>
              <Link className="hover:text-ared" href="/">
                Двухкомнатная квартира
              </Link>
              <Link className="hover:text-ared" href="/">
                Трехкомнатная квартира
              </Link>
              <Link className="hover:text-ared" href="/">
                Дом, коттедж
              </Link>
              <Link className="hover:text-ared" href="/">
                Комната
              </Link>
              <Link className="hover:text-ared" href="/">
                Студия
              </Link>
              <Link className="hover:text-ared" href="/">
                Коммерческая недвижимость
              </Link>
            </nav>
          </div>

          <Link className="py-6 hover:text-ared" href="/">
            Онлайн-ипотека
          </Link>
          <Link className="py-6 hover:text-ared" href="/">
            Франшиза
          </Link>
          <Link className="py-6 hover:text-ared" href="/">
            Заявка на покупку
          </Link>
          <Link className="py-6 hover:text-ared" href="/">
            Заявка на продажу
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
