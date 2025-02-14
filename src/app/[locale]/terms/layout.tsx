"use client";

import React, { ReactNode } from "react";
import { MainLayout } from "@/components";
import * as S from "./layout.styled";

interface TermsLayoutProps {
  children: ReactNode;
}

const TermsLayout: React.FC<TermsLayoutProps> = ({ children }) => {
  return (
    <MainLayout>
      <S.TermsContainer>{children}</S.TermsContainer>
    </MainLayout>
  );
};

export default TermsLayout;
