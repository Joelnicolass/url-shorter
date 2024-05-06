'use client';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params }: Props) => {
  const { id } = params;
  window.location.href = 'http://localhost:8080/' + id;
};

export default Page;
