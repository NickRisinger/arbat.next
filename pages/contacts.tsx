import { useRouter } from 'next/router';
import AppLayout from '~/layouts/AppLayout';

const ContactsPage: NextPage = () => {
  const router = useRouter();
  console.log(router);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test
    </main>
  );
};

ContactsPage.getLayout = (page) => {
  return (
    <AppLayout title="Главная" breadCrumbs={[{ name: 'Контакты' }]}>
      {page}
    </AppLayout>
  );
};

export default ContactsPage;
