import { FC } from 'react';

interface ICardProps {
  title: string;
  description: string;
  image: string;
}

const Card: FC<ICardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-arbatgray h-[134px] rounded-[15px] px-5 py-4 lg:grid lg:grid-rows-[100px_100px] lg:grid-flow-col lg:h-full lg:px-10 lg:py-9">
      <span className="font-semibold lg:text-[28px] lg:leading-[38px]">
        {title}
      </span>
      <p className="text-sm leading-[17px] lg:text-xl lg:leading-[27px]">
        {description}
      </p>
    </div>
  );
};

export default Card;
