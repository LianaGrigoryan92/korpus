"use client";

import React, { ReactNode } from "react";
import { MainLayout } from "@/components";
import * as S from "./layout.styled";

interface FAQLayoutProps {
  children: ReactNode;
}

const TermsLayout: React.FC<FAQLayoutProps> = ({ children }) => {
  return (
    <MainLayout>
      <S.FAQContainer>{children}</S.FAQContainer>
    </MainLayout>
  );
};

export default TermsLayout;
