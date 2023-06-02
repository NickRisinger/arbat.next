import { FC, PropsWithChildren } from 'react';

interface IHeroProps extends PropsWithChildren {
  title: string;
  description: string;
}

const Hero: FC<IHeroProps> = ({ children, title, description }) => {
  return (
    <section className="mt-6">
      <div className="container">
        <div className="">
          <div className="bg-white rounded-[15px] py-4 px-5 shadow-[-4px_0px_33px_rgba(52,112,138,0.19)]">
            <h1 className="font-bold text-xl leading-[27px]">Trade-in</h1>
            <p className="mt-4 text-sm leading-[17px]">
              Обменяем старую квартиру на новый дом! Специальные условия от
              “Арбат-строй”.
            </p>
          </div>
          <button className="bg-ared w-full py-3 mt-6 rounded-[10px] text-white font-semibold">
            Заказать обратный звонок
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
