import AppLayout from '~/layouts/AppLayout';

const FamilyPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      ServicesPage
    </main>
  );
};

FamilyPage.getLayout = (page) => {
  return <AppLayout title="Главная">{page}</AppLayout>;
};

export default FamilyPage;
