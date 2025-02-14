"use client";

import React, { ReactNode } from "react";
import { MainLayout } from "@/components";
import * as S from "./layout.styled";

interface PrivacyLayoutProps {
  children: ReactNode;
}

const TermsLayout: React.FC<PrivacyLayoutProps> = ({ children }) => {
  return (
    <MainLayout>
      <S.PrivacyContainer>{children}</S.PrivacyContainer>
    </MainLayout>
  );
};

export default TermsLayout;
