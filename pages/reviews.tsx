import AppLayout from '~/layouts/AppLayout';

const ReviewsPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test
    </main>
  );
};

ReviewsPage.getLayout = (page) => {
  return (
    <AppLayout title="Главная" breadCrumbs={[{ name: 'Отзывы' }]}>
      {page}
    </AppLayout>
  );
};

export default ReviewsPage;
