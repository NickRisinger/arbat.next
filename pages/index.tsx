import AppLayout from '~/layouts/AppLayout';

const IndexPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test
    </main>
  );
};

IndexPage.getLayout = (page) => {
  return <AppLayout title="Главная">{page}</AppLayout>;
};

export default IndexPage;
