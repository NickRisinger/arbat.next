import { useEffect, useState } from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import AppLayout from '~/layouts/AppLayout';
import { useRouter } from 'next/router';

const IndexPage: NextPage = () => {
  const router = useRouter();
  console.log(router);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  useEffect(() => {
    if ('geolocation' in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      longitude - {location?.longitude}
      <br />
      latitude - {location?.latitude}
      <br />
      {location && (
        <YMaps>
          <Map
            defaultState={{
              center: [location.latitude, location.longitude],
              zoom: 9,
            }}
          >
            <Placemark
              defaultGeometry={[location.latitude, location.longitude]}
            />
            <Placemark
              defaultGeometry={[location.latitude + 1, location.longitude]}
            />
          </Map>
        </YMaps>
      )}
    </main>
  );
};

IndexPage.getLayout = (page) => {
  return <AppLayout title="Главная">{page}</AppLayout>;
};

export default IndexPage;
