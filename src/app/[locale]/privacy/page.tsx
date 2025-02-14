'use client';

import React, { useEffect, useState } from 'react';
import * as S from './page.styled';
import { BookText } from 'lucide-react';

const PrivacyPage = () => {
  const [data, setData] = useState(null);
 
  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <S.PrivacyContainer>
     
     <S.PrivacyTitle>
     Privacy Policy <BookText size={32}/>
        </S.PrivacyTitle>
        <S.PrivacyContent>
        Welcome to Korpus. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, products, and services.
        </S.PrivacyContent>
        <S.PrivacyContent>
        By using our services, you agree to the terms of this Privacy Policy.
        </S.PrivacyContent>
        <S.PrivacySubTitle>
        1. Information We Collect
        </S.PrivacySubTitle>
        <S.PrivacyContent>
        We collect personal information you provide to us when you register an account, make a purchase, or contact us for support. This information may include your name, email address, and payment details.
        </S.PrivacyContent>
        <S.PrivacySubTitleSmall>
        a.Personal Information
        </S.PrivacySubTitleSmall>
        <S.PrivacyList>
          <li>Name, email address, phone number, and billing details.</li>
          <li>Account login details, including username and password.</li>
        </S.PrivacyList>
        <S.PrivacySubTitleSmall>
        b.Non-Personal Information
        </S.PrivacySubTitleSmall>
        <S.PrivacyList>
          <li>Browser type, device information, and IP address.</li>
          <li>Usage data such as pages visited and time spent on our platform.</li>
        </S.PrivacyList>
        <S.PrivacySubTitleSmall>
        c. Cookies and Tracking Technologies
        </S.PrivacySubTitleSmall>
        <S.PrivacyList>
          <li>We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us understand how you interact with our services. You can control the use of cookies through your browser settings.</li>
        </S.PrivacyList>
        <S.PrivacySubTitle>
        2. How We Use Your Information
        </S.PrivacySubTitle>
        <S.PrivacyContent>
        We use your personal information to provide and improve our services, process transactions, and communicate with you. We may also use your information for marketing purposes, but you can opt out at any time.
        </S.PrivacyContent>
        <S.PrivacySubTitle>
        3. How We Share Your Information
        </S.PrivacySubTitle>
        <S.PrivacyContent>
        We do not sell your personal information to third parties. However, we may share your information with trusted partners who assist us in operating our website, conducting our business, or providing services to you, as long as those parties agree to keep this information confidential.
        </S.PrivacyContent>
        <S.PrivacySubTitle>
        4. Data Security
        </S.PrivacySubTitle>
        <S.PrivacyContent>
        We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </S.PrivacyContent>
        <S.PrivacySubTitle>
        5. Your Rights
        </S.PrivacySubTitle>
        <S.PrivacyContent>
        You have the right to access, correct, or delete your personal information. You can also object to the processing of your data or request data portability. To exercise these rights, please contact us at the provided contact information.
        </S.PrivacyContent>
        <S.PrivacySubTitle>
        6. Changes to This Privacy Policy
        </S.PrivacySubTitle>
        <S.PrivacyContent>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
        </S.PrivacyContent>
        <S.PrivacySubTitle>
        7. Contact Us
        </S.PrivacySubTitle>
        <S.PrivacyContent>
        If you have any questions about this Privacy Policy, please contact us at privacy@korpus.com.
        </S.PrivacyContent>
        
  
    </S.PrivacyContainer>
  );
};

export default PrivacyPage;