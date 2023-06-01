import AppLayout from '~/layouts/AppLayout';

const UrgentBuyoutPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      ServicesPage
    </main>
  );
};

UrgentBuyoutPage.getLayout = (page) => {
  return (
    <AppLayout
      title="Главная"
      breadCrumbs={[
        { name: 'Услуги', link: '/services' },
        { name: 'Срочный выкуп' },
      ]}
    >
      {page}
    </AppLayout>
  );
};

export default UrgentBuyoutPage;
