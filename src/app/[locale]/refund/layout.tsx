"use client";

import React, { ReactNode } from "react";
import { MainLayout } from "@/components";
import * as S from "./layout.styled";

interface RefundLayoutProps {
  children: ReactNode;
}

const RefundLayout: React.FC<RefundLayoutProps> = ({ children }) => {
  return (
    <MainLayout>
      <S.RefundContainer>{children}</S.RefundContainer>
    </MainLayout>
  );
};

export default RefundLayout;
