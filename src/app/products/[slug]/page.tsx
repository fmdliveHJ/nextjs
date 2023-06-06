import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const Pants = ({ params }: Props) => {
  if (params.slug === 'nothing') {
    notFound();
  }
  return <div>{params.slug} 제품 설명 페이지 </div>;
};

export default Pants;

// 다이나믹 페이지에서 미리 만들어 놓고 싶은 페이지
export function generateStaticParams() {
  const products = ['pants', 'skirt'];

  return products.map((product) => ({
    slug: product,
  }));
}
