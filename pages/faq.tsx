import AppLayout from '~/layouts/AppLayout';

const FaqPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test
    </main>
  );
};

FaqPage.getLayout = (page) => {
  return (
    <AppLayout title="Главная" breadCrumbs={[{ name: 'Вопросы и ответы' }]}>
      {page}
    </AppLayout>
  );
};

export default FaqPage;
