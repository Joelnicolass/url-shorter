'use client';
import { useEffect } from 'react';
import { URL_BASE } from '../../utils/constants';
import { useRouter } from 'next/navigation';

// TODO -> mover a caso de uso
async function verifyValidRedirection(id: string): Promise<boolean> {
  const url = `${URL_BASE}/${id}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params }: Props) => {
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    verifyValidRedirection(id).then((isValid) => {
      if (isValid) {
        router.push(`${URL_BASE}/${id}`);
      } else {
        router.push('/');
      }
    });
  }, [id, router]);

  return null;
};

export default Page;
