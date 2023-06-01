import AppLayout from '~/layouts/AppLayout';

const FaqPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test
    </main>
  );
};

FaqPage.getLayout = (page) => {
  return <AppLayout title="Главная">{page}</AppLayout>;
};

export default FaqPage;
