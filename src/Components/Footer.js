import React from "react";

const Footer = () => {
  const columnData = [
    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5"],
    ["Data 6", "Data 7", "Data 8", "Data 9", "Data 10"],
    ["Data 11", "Data 12", "Data 13", "Data 14", "Data 15"],
    ["Data 16", "Data 17", "Data 18", "Data 19", "Data 20"],
  ];

  return (
    <footer className="bg-gray-100 w-full pt-12">
      <div className="px-24 max-sm:px-6">
        <hr className=""/>
       <h2 className="font-semibold text-2xl py-4">Explore other options in and around València</h2>
        <div className="grid grid-cols-4 ">
          {columnData.map((column, index) => (
            <div className="column " key={index}>
              <h3 className="font-semibold">Column {index + 1}</h3>
              <ul>
                {column.map((data, dataIndex) => (
                  <li className="pt-2 text-base" key={dataIndex}>{data}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
