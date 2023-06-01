import AppLayout from '~/layouts/AppLayout';

const ServicesPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      ServicesPage
    </main>
  );
};

ServicesPage.getLayout = (page) => {
  return <AppLayout title="Главная">{page}</AppLayout>;
};

export default ServicesPage;
