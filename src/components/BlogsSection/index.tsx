'use client';

// styles
import * as S from './BlogsSection.styled';
import { BlogSectionItem } from '@/components';

const blogs = [
  {
    id: '1',
    image: '/images/components/blogs-section/1.png',
    description: `A traditional approach while imagining what the furniture of tomorrow could be, in its use and representation.`,
  },
  {
    id: '2',
    image: '/images/components/blogs-section/2.png',
    description: `A traditional approach while imagining what the furniture of tomorrow could be, in its use and representation.`,
  },
];

export default function BlogsSection() {
  return (
    <S.BlogsContainer>
      <S.BlogsTitle>
        Furniture that fits your style, space and needs
      </S.BlogsTitle>
      <S.Blogs>
        {blogs.map((blog) => (
          <BlogSectionItem
            key={blog.id}
            id={blog.id}
            image={blog.image}
            description={blog.description}
          />
        ))}
      </S.Blogs>
    </S.BlogsContainer>
  );
}
