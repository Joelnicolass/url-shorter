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
      throw new Error(response.status.toString());
    }

    return true;
  } catch (error) {
    if ((error as Error).message === '404') {
      return false;
    }

    return true;
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

  // TODO -> agregar spinner
  return null;
};

export default Page;
