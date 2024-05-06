'use client';
import { URL_BASE } from '../../utils/constants';

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params }: Props) => {
  const { id } = params;
  window.location.href = `${URL_BASE}/${id}`;
};

export default Page;
