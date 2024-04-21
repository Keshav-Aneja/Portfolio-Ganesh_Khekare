import React from "react";
interface Props {
  data: {
    headers: string[];
    row: string[];
  };
  countPerRow?: number;
}
const Table = ({ data, countPerRow = 5 }: Props) => {
  const indexCount = Math.ceil(data.headers.length / countPerRow);
  return (
    <div className="w-full  font-poppins overflow-hidden">
      {[...Array(indexCount)].map((_, global_index) => {
        const startIndex = global_index * countPerRow;
        const endIndex = Math.min(
          startIndex + countPerRow,
          data.headers.length
        );

        return (
          <section
            className="flex flex-col w-full mb-4 md:mb-8  rounded-lg overflow-hidden text-xs md:text-sm lg:text-base"
            key={global_index}
          >
            <div className="--headers w-full flex flex-wrap">
              {data.headers.slice(startIndex, endIndex).map((header, index) => (
                <span
                  className={"bg-primary text-white p-2 "}
                  style={{ width: `${100 / countPerRow}%` }}
                  key={index}
                >
                  {header}
                </span>
              ))}
            </div>
            <div className="--headers w-full flex flex-wrap">
              {data.row.slice(startIndex, endIndex).map((row_data, index) => (
                <span
                  className="bg-background text-black p-2 "
                  style={{ width: `${100 / countPerRow}%` }}
                  key={index}
                >
                  {row_data}
                </span>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Table;
