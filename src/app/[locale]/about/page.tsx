"use client";

import React, { useState } from 'react';

// styles & images
import * as S from './page.styled';
import { MainLayout } from '@/components';
import { useGetAboutContentQuery } from '@/features/about/about.api';
import { getImageUrl } from '@/utils/getImageFullUrl';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import styled from 'styled-components';
import { useClientMediaQuery } from '@/hooks/useClientMediaQuery';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

function About() {
  const { data, isLoading } = useGetAboutContentQuery();
  const [expanded, setExpanded] = useState<number | false>(false);
  const isMobile = useClientMediaQuery('(max-width: 1200px)');

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log({ data, isLoading });

  return (
    <S.AboutContainer>
      <MainLayout>
        <S.AboutFirstContent>
          <S.AboutFirstInfoContent dangerouslySetInnerHTML={{ __html: data?.about_info_block.firstContent || '' }} />
          <S.AboutFirstImage src={getImageUrl(data?.about_info_block.firstImage)} />
        </S.AboutFirstContent>
        <S.AboutSecondaryContent>
          <S.AboutSecondaryImage src={getImageUrl(data?.about_info_block.secondaryImage)} />
          <S.AboutSecondaryInfoContent dangerouslySetInnerHTML={{ __html: data?.about_info_block.secondaryContent || '' }} />
        </S.AboutSecondaryContent>
        <S.AboutLastContent>
          <S.AboutLastInfoContent dangerouslySetInnerHTML={{ __html: data?.about_info_block.lastContent || '' }} />
          <S.AboutLastImages>
            {data?.about_info_block.lastImage.data.map((image: any) => (
              <S.AboutLastImage key={image} src={getImageUrl({data: image})} />
            ))}
          </S.AboutLastImages>
        </S.AboutLastContent>
        <S.Questions>
         <S.QuestionsBLock>
            {data?.about_questions.questions.map((item: QuestionItem, index: number) => (
              <Accordion 
                key={item.id} 
                className='accordion' 
                expanded={expanded === index} 
                onChange={handleChange(index)}
              >
                <AccordionSummary
                  className='accordion-summary'
                  expandIcon={expanded === index ? <Minus size={28} strokeWidth={2} /> : <Plus size={28} strokeWidth={2} />}
                >
                 {item.question}
                </AccordionSummary>
                <AccordionDetails className='accordion-details'>
                  {item.answer}
                </AccordionDetails>
              </Accordion>
            ))}
          </S.QuestionsBLock>     
          <S.Image src={getImageUrl(data?.about_questions.about_questions_image)} alt='about-korpus'/>
      </S.Questions>
      <S.AboutBlog>
        {isMobile && <S.AboutBlogTitle>{data?.learn_more_block[0].title}</S.AboutBlogTitle>}
        <S.AboutBlogImage src={getImageUrl(data?.learn_more_block[0].image)} alt='Korpus About blog image'/>
        {!isMobile && <S.AboutBlogContent>
          <S.AboutBlogTitle>{data?.learn_more_block[0].title}</S.AboutBlogTitle>
          <S.AboutBlogDescription>{data?.learn_more_block[0].description}</S.AboutBlogDescription>
          <S.AboutBlogButton>
            <span>Learn More</span>
            <ArrowRight size={24} />
          </S.AboutBlogButton>
        </S.AboutBlogContent>}
        {isMobile && <>
          <S.AboutBlogContent>
            <S.AboutBlogDescription>{data?.learn_more_block[0].description}</S.AboutBlogDescription>
            <S.AboutBlogButton>
              <span>Learn More</span>
              <ArrowRight size={24} />
            </S.AboutBlogButton>
          </S.AboutBlogContent>
        </>}
      </S.AboutBlog>
      </MainLayout>
    </S.AboutContainer>
  );
}

export default About;
