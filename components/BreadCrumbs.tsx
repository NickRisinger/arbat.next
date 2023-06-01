import { FC } from 'react';
import Link from 'next/link';

export interface ICrumb {
  name: string;
  link?: string;
}

interface IBreadCrumbsProps {
  crumbs: Array<ICrumb>;
}

const BreadCrumbs: FC<IBreadCrumbsProps> = ({ crumbs }) => {
  return (
    <section className="mt-12">
      <div className="container">
        <ul className="flex items-center gap-x-3 text-sm text-arbgray leading-[19px]">
          <li>
            <Link href="/" className="hover:text-ared">
              Главная
            </Link>
          </li>
          <span>/</span>
          {crumbs.map((crumb) => (
            <li key={crumb.name} className="">
              {crumb.link ? (
                <>
                  <Link href={crumb.link} className="hover:text-ared">
                    {crumb.name}
                  </Link>
                  <span>/</span>
                </>
              ) : (
                <span>{crumb.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BreadCrumbs;
