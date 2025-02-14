'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MainLayout } from '@/components';
import * as S from './page.styled';

const RefundPage = () => {
  const [data, setData] = useState(null);
 
  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <S.RefundContainer>
    <MainLayout>
      <S.RefundTitle>Refund Policy</S.RefundTitle>
      <S.RefundContent>
        <S.RefundParagraph>
          At Korpus, we strive to ensure that our customers are satisfied with their purchases. If you are not completely satisfied with your purchase, we are here to help.
        </S.RefundParagraph>
        <S.RefundSubTitle>Returns</S.RefundSubTitle>
        <S.RefundParagraph>
          You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.
        </S.RefundParagraph>
        <S.RefundSubTitle>Refunds</S.RefundSubTitle>
        <S.RefundParagraph>
          Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
        </S.RefundParagraph>
        <S.RefundParagraph>
          If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
        </S.RefundParagraph>
        <S.RefundSubTitle>Shipping</S.RefundSubTitle>
        <S.RefundParagraph>
          You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
        </S.RefundParagraph>
        <S.RefundSubTitle>Contact Us</S.RefundSubTitle>
        <S.RefundParagraph>
          If you have any questions on how to return your item to us, contact us at <S.RefundLink href="mailto:info@korpus.am">info@korpus.am</S.RefundLink>.
        </S.RefundParagraph>
      </S.RefundContent>
    </MainLayout>
  </S.RefundContainer>
  );
};

export default RefundPage;