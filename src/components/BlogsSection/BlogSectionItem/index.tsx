'use client';

// styles
import * as S from './BlogSectionItem.styled';
import {ArrowRight} from "lucide-react";
import {theme} from "@/styles";

interface BlogSectionItemProps {
  id: string;
  image: string;
  description: string;
}

export default function BlogSectionItem({
  id,
  image,
  description,
}: BlogSectionItemProps) {
  return (
    <S.BlogSectionItemContainer>
      <img src={image} alt="blog-list-image" />
      <S.BlogSectionItemDescription>{description}</S.BlogSectionItemDescription>
        <S.LearnMore>Learn More <ArrowRight size={24} color={theme.palette.common.black}/></S.LearnMore>
    </S.BlogSectionItemContainer>
  );
}
