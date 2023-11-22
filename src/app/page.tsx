import List from './List';
import S from './page.module.scss';

export default async function Page() {
  const res = await fetch('http://localhost:3000/api/tmp');
  const jsonData = await res.json();
  console.log(jsonData);

  return (
    <div className={S.wrapper}>
      {jsonData.res}
      <h1>Hello, Next.js!</h1>
      <input type="radio" />
      <List />
    </div>
  );
}
