import Image from 'next/image';
import S from './page.module.scss';
import logo from '@/assets/image/logo.png';
import DefaultBtn from '@/components/button/DefaultBtn';

export default async function Login() {
  return (
    <div className={S.wrapper}>
      <Image className={S.image} src={logo} alt="logo" width={137}></Image>
      <input className={S.input} placeholder="아이디" />
      <input className={S.input} placeholder="비밀번호" />
      <DefaultBtn size="large" width="80%">
        Login
      </DefaultBtn>
    </div>
  );
}
