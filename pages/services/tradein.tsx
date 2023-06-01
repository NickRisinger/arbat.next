import AppLayout from '~/layouts/AppLayout';
import Hero from '~/components/services/Hero';

const TradeInPage: NextPage = () => {
  return (
    <main className="">
      <Hero title="" description=""></Hero>
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
