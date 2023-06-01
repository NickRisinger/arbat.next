import AppLayout from '~/layouts/AppLayout';

const ContactsPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test
    </main>
  );
};

ContactsPage.getLayout = (page) => {
  return <AppLayout title="Главная">{page}</AppLayout>;
};

export default ContactsPage;
