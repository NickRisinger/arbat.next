import AppLayout from '~/layouts/AppLayout';

const InsurancePage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      ServicesPage
    </main>
  );
};

InsurancePage.getLayout = (page) => {
  return (
    <AppLayout
      title="Главная"
      breadCrumbs={[
        { name: 'Услуги', link: '/services' },
        { name: 'Страхование' },
      ]}
    >
      {page}
    </AppLayout>
  );
};

export default InsurancePage;
