'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MainLayout } from '@/components';
import * as S from './page.styled';

const FAQPage = () => {
  const [data, setData] = useState(null);
 
  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <S.FAQContainer>
      <MainLayout>
        <S.FAQTitle>Frequently Asked Questions</S.FAQTitle>
        <S.FAQItem>
          <S.FAQQuestion>What is the delivery time for furniture?</S.FAQQuestion>
          <S.FAQAnswer>
            Our standard delivery time for furniture is between 2 to 4 weeks, depending on the item and your location. Custom orders may take longer.
          </S.FAQAnswer>
        </S.FAQItem>
        <S.FAQItem>
          <S.FAQQuestion>Do you offer assembly services?</S.FAQQuestion>
          <S.FAQAnswer>
            Yes, we offer assembly services for an additional fee. Our professional team will ensure your furniture is assembled correctly and safely.
          </S.FAQAnswer>
        </S.FAQItem>
        <S.FAQItem>
          <S.FAQQuestion>What is your return policy?</S.FAQQuestion>
          <S.FAQAnswer>
            We accept returns within 30 days of delivery. The item must be in its original condition and packaging. Please contact our customer service team to initiate a return.
          </S.FAQAnswer>
        </S.FAQItem>
        <S.FAQItem>
          <S.FAQQuestion>Do you offer customization options?</S.FAQQuestion>
          <S.FAQAnswer>
            Yes, we offer customization options for many of our furniture pieces. Please contact our customer service team to discuss your specific requirements.
          </S.FAQAnswer>
        </S.FAQItem>
        <S.FAQItem>
          <S.FAQQuestion>How can I track my order?</S.FAQQuestion>
          <S.FAQAnswer>
            Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's website.
          </S.FAQAnswer>
        </S.FAQItem>
      </MainLayout>
      </S.FAQContainer>
  );
};

export default FAQPage;