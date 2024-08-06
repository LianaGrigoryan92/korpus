interface SubCategory {
  id: number;
  name: string;
  type: string;
  img: any;
}

interface SubCategoryState {
  subCategories: SubCategory[];
}