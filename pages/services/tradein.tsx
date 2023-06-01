import AppLayout from '~/layouts/AppLayout';

const TradeInPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      ServicesPage
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
