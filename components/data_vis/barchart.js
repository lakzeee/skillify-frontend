import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import { capitalized } from "@/utils/common_helpers";

export function MyBarChart({
  title,
  subtitle,
  chartData,
  categories,
  index,
  enableSelect = false,
  selectedType,
  handleSelectedTypeChange,
  keywords,
  selectedKeyword,
  handleSelectedKeywordChange,
}) {
  function dataFormatter(number) {
    return Intl.NumberFormat("us").format(number).toString();
  }

  return (
    <Card key={title}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {enableSelect && (
        <>
          <select
            className="select select-bordered select-sm my-2 mr-2"
            value={selectedType}
            onChange={handleSelectedTypeChange}
          >
            <option value="" disabled>
              Select a type
            </option>
            <option>Language</option>
            <option>Category</option>
          </select>
          <select
            className="select select-bordered select-sm my-2"
            value={selectedKeyword}
            onChange={handleSelectedKeywordChange}
            disabled={false}
          >
            <option value="" disabled>
              Select a type
            </option>
            {keywords &&
              keywords.length >= 0 &&
              keywords.map((keyword) => (
                <option key={keyword}>{capitalized(keyword)}</option>
              ))}
          </select>
        </>
      )}
      <BarChart
        className={enableSelect ? `mt-0` : `mt-6`}
        data={chartData}
        index={index}
        categories={[categories]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
}
