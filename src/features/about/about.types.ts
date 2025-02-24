interface About {
  id: number;
  about_info_block: AboutInfoBlock;
  about_questions: AboutQuestions;
  learn_more_block: LearnMoreBlock[];
}

interface AboutInfoBlock {
  id: number;
  firstContent: string;
  firstImage: any;
  secondaryContent: string;
  secondaryImage: any;
  lastContent: string;
  lastImage: any;
}

interface AboutQuestions {
  id: number;
  questions: QuestionItem[];
  about_questions_image: any;
}

interface QuestionItem {
  id: number;
  question: string;
  answer: string;
}
interface About {
  id: number;
  about_info_block: AboutInfoBlock;
  about_questions: AboutQuestions;
  learn_more_block: LearnMoreBlock[];
}

interface AboutInfoBlock {
  id: number;
  firstContent: string;
  firstImage: any;
  secondaryContent: string;
  secondaryImage: any;
  lastContent: string;
  lastImage: any;
}

interface AboutQuestions {
  id: number;
  questions: QuestionItem[];
  about_questions_image: any;
}

interface QuestionItem {
  id: number;
  question: string;
  answer: string;
}

interface LearnMoreBlock {
  title: string;
  description: string;
  image: any;
}

