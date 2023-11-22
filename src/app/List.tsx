'use client';

import { useEffect } from 'react';

export default function List() {
  const tmp = 'asdf';

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/tmp');
      const data = await res.json();
      console.log(res);
    };

    fetchData();
  });

  return (
    <div>
      <img src="https:" alt="asdf" />
    </div>
  );
}
