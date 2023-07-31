import { technologyData } from "@/mock_data/data";

export default class DataHelpers {
  constructor(data) {
    this.data = data;
  }
  filterBy(type, keyword) {
    if (type === "Language") {
      return this.data.filter((technology) => technology.language === keyword);
    } else if (type === "Category") {
      return this.data.filter((technology) => technology.category === keyword);
    } else {
      return this.data;
    }
  }

  getAllLanguagesAsList() {
    const uniqueLanguages = new Set();
    this.data.forEach((technology) => {
      uniqueLanguages.add(technology.language);
    });
    return Array.from(uniqueLanguages);
  }

  getAllCategoriesAsList() {
    const uniqueCategories = new Set();
    this.data.forEach((technology) => {
      uniqueCategories.add(technology.category);
    });
    return Array.from(uniqueCategories);
  }
}
