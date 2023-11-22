import { UserLocation } from './UserLocation';
import S from './page.module.scss';

export default async function Location() {
  return (
    <div className={S.wrapper}>
      <UserLocation />
    </div>
  );
}
