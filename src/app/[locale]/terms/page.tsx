'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MainLayout } from '@/components';
import * as S from './page.styled';
import { ReceiptText } from 'lucide-react';

const TermsPage = () => {
  const [data, setData] = useState(null);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <S.TermsContainer>
     
        <S.TermsTitle>
          Terms and Conditions <ReceiptText size={32}/>
        </S.TermsTitle>
        <S.TermsContent>
          Welcome to Korpus! These Terms and Conditions outline the rules and regulations for the use of our website, products, and services.
          By accessing or using our services, you agree to comply with these terms. If you do not agree, please do not use our services.
        </S.TermsContent>
        <S.TermsSubTitle>
          1. Definitions
        </S.TermsSubTitle>
        <S.TermsList>
          <li>Company: Refers to Korpus, located at  Yerevan, Tevosyan 13/11.</li>
          <li>User: Refers to any individual or entity accessing or using our services.</li>
          <li>Services: Includes our website, mobile applications, and other related offerings.</li>
        </S.TermsList>
        <S.TermsSubTitle>
        2. Use of Services
        </S.TermsSubTitle>
        <S.TermsList>
          <li>You must be at least 10 years old to use our services.</li>
          <li>You agree not to use our services for any illegal or unauthorized purposes.</li>
          <li>We reserve the right to suspend or terminate access if you violate these terms.</li>
        </S.TermsList>
        <S.TermsSubTitle>
        3. Intellectual Property
        </S.TermsSubTitle>
        <S.TermsList>
          <li>All content on our platform, including text, images, logos, and software, is owned by Korpus and protected by intellectual property laws.</li>
          <li>You may not copy, modify, or distribute our content without written permission.</li>
        </S.TermsList>
        <S.TermsSubTitle>
        4. User Accounts
        </S.TermsSubTitle>
        <S.TermsList>
          <li>You are responsible for maintaining the confidentiality of your account and password.</li>
          <li>We are not liable for any unauthorized access or use of your account.</li>
        </S.TermsList>
        <S.TermsSubTitle>
        5. Purchases and Payments
        </S.TermsSubTitle>
        <S.TermsList>
          <li>All payments made on our platform are final unless stated otherwise.</li>
          <li>We reserve the right to modify pricing, promotions, and product availability.</li>
        </S.TermsList>
        <S.TermsSubTitle>
        6. Limitation of Liability
        </S.TermsSubTitle>
        <S.TermsList>
          <li>We are not liable for any indirect, incidental, or consequential damages resulting from the use of our services.</li>
          <li>Our total liability shall not exceed the amount paid for our services in the last [timeframe].</li>
        </S.TermsList>
        <S.TermsSubTitle>
        7. Privacy Policy
        </S.TermsSubTitle>
        <S.TermsList>
          <li>Our Privacy Policy explains how we collect, use, and protect your data. By using our services, you agree to our data practices.</li>
        </S.TermsList>
        <S.TermsSubTitle>
        8. Changes to Terms
        </S.TermsSubTitle>
        <S.TermsList>
          <li>We may update these Terms and Conditions at any time. We will notify users of significant changes.</li>
        </S.TermsList>
        <S.TermsSubTitle>
        9. Governing Law
        </S.TermsSubTitle>
        <S.TermsList>
          <li>These terms are governed by the laws of Republic of Armenia. Any disputes shall be resolved in the courts of [Your Jurisdiction].</li>
        </S.TermsList>
        <S.TermsSubTitle>
        10. Contact Information
        </S.TermsSubTitle>
        <S.TermsList>
          <li>If you have any questions about these terms, please contact us at info@korpus.am.</li>
        </S.TermsList>
   
    </S.TermsContainer>
  );
};

export default TermsPage;