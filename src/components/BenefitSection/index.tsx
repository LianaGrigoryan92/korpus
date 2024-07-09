'use client';

//styles
import * as S from './BenefitSection.styled';
import { ArrowRight } from 'lucide-react';
import { theme } from '@/styles';

export default function BenefitSection() {
  return (
    <S.Container>
      <S.BenefitSectionImage
        src="/images/components/benefit-section/1.png"
        alt="Benefit Section"
      />
      <S.BenefitSectionContent>
        <S.BenefitSectionTitle>
          What makes Korpus different?
        </S.BenefitSectionTitle>
        <S.BenefitSectionDescription>
          A traditional approach while imagining what the furniture of tomorrow
          could be, in its use and representation.
        </S.BenefitSectionDescription>
        <S.LearnMore>
          Learn More <ArrowRight size={24} color={theme.palette.common.black} />
        </S.LearnMore>
      </S.BenefitSectionContent>
    </S.Container>
  );
}
