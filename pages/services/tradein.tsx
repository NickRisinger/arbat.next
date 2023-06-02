import AppLayout from '~/layouts/AppLayout';
import Hero from '~/components/services/Hero';
import Card from '~/components/services/Card';

const TradeInPage: NextPage = () => {
  const data = [
    {
      title: 'str',
      description: 'string',
      image: 'string',
    },
    {
      title: 'str',
      description: 'string',
      image: 'string',
    },
    {
      title: 'str',
      description: 'string',
      image: 'string',
    },
    {
      title: 'str',
      description: 'string',
      image: 'string',
    },
  ];

  return (
    <main className="">
      <section className="mt-6">
        <div className="container">
          <Hero title="" description=""></Hero>
        </div>
      </section>
      <section className="mt-[78px] lg:mt-36">
        <div className="container">
          <h2 className="font-bold text-xl lg:text-3xl">Как это работает?</h2>
          <div className="grid grid-cols-1 grid-flow-row gap-5 mt-7 lg:grid-cols-2 lg:gap-10 lg:mt-12">
            {data.map((value, index) => (
              <Card
                key={index}
                title={value.title}
                description={value.description}
                image={value.image}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

TradeInPage.getLayout = (page) => {
  return (
    <AppLayout
      title="Главная"
      breadCrumbs={[
        { name: 'Услуги', link: '/services' },
        { name: 'Trade-In' },
      ]}
    >
      {page}
    </AppLayout>
  );
};

export default TradeInPage;
