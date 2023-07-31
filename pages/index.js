import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Select from "@/components/common/select";
import { MyBarChart } from "@/components/data_vis/barchart";
import {
  jobPositionLevel,
  jobPositions,
  programmingData,
  technologyData,
} from "@/mock_data/data";
import { useEffect, useState } from "react";
import DataHelpers from "@/utils/data_helpers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [filteredTechnologyData, setFilteredTechnologyData] = useState([]);
  function selectedValueChangeHandler(event) {
    const newValue = event.target.value;
    setSelectedType(newValue);
  }

  function selectedKeywordChangeHandler(event) {
    const newValue = event.target.value;
    setSelectedKeyword(newValue);
  }

  const technologyDataHelper = new DataHelpers(technologyData);

  useEffect(() => {
    setFilteredTechnologyData(technologyDataHelper.filterBy());
  }, []);

  useEffect(() => {
    if (selectedType === "Language") {
      setKeywords(technologyDataHelper.getAllLanguagesAsList());
    } else if (selectedType === "Category") {
      setKeywords(technologyDataHelper.getAllCategoriesAsList());
    } else {
      setKeywords([]);
    }
  }, [selectedType]);

  useEffect(() => {
    console.log(selectedType, selectedKeyword);
    const newFilteredData = technologyDataHelper.filterBy(
      selectedType,
      selectedKeyword.toLowerCase()
    );
    setFilteredTechnologyData(newFilteredData);
  }, [selectedKeyword]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral flex flex-col relative overflow-hidden md:px-32 px-8 pt-24">
        <div className="flex gap-1">
          <Select data={jobPositions} content={"Select a job title"} />
          <Select data={jobPositionLevel} content={"Select a level"} />
        </div>

        <div className="py-2" />
        <MyBarChart
          title="Most frequent programming langues"
          subtitle={
            "Base on the search result, the most popular job description programing languages are"
          }
          index={"name"}
          categories={"times"}
          chartData={programmingData}
        />
        <div className="py-2" />
        <MyBarChart
          title="Most frequent technology"
          subtitle={
            "Base on the search result, the most popular job description tech stack and technology are"
          }
          index={"name"}
          categories={"times"}
          chartData={filteredTechnologyData}
          enableSelect={true}
          keywords={keywords}
          selectedType={selectedType}
          handleSelectedTypeChange={selectedValueChangeHandler}
          selectedKeyword={selectedKeyword}
          handleSelectedKeywordChange={selectedKeywordChangeHandler}
        />
      </div>
      <Footer />
    </>
  );
}
