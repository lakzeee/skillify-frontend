import { capitalized } from "@/utils/common_helpers";

export default function Select({ data, content }) {
  return (
    <select key={content} className="select select-bordered" defaultValue="">
      <option value="" disabled>
        {content}
      </option>
      {data &&
        data.length > 0 &&
        data.map((d) => <option key={d}>{capitalized(d)}</option>)}
    </select>
  );
}
