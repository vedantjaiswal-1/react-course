import React from "react";

const users = [
  {
    id: 1,
    first_name: "Tony",
    last_name: "Strak",
    mobile: 7878778778,
  },
  {
    id: 2,
    first_name: "Elon",
    last_name: "Musk",
    mobile: 8878778778,
  },
  {
    id: 3,
    first_name: "Johny",
    last_name: "Depp",
    mobile: 9078778778,
  },
  {
    id: 4,
    first_name: "Sylvester",
    last_name: "Stallone",
    mobile: 9878778776,
  },
];

export const About = (props: any) => {
  const mobiles = ["Apple", "Samsung", "Vivo", "Asus", "Honor"];

  const numbers = [1, 2, 3, 4, 5];

  const doubled = numbers.map((item: any) => item * 2);
  console.log("Doubled", doubled);

  return (
    <div>
      {/* Simple render list*/}
      <p style={{ color: "orange" }}>Top 5 mobile of 2022</p>
      <ul>
        {mobiles?.map((item: any, index: number) => {
          console.log(item);
          return <li key={index + 1}>{item}</li>;
        })}
      </ul>
      <hr />

      {/* Doubled*/}
      <p style={{ color: "orange" }}>Numbers convert to doubled</p>
      <p>{doubled + ", "}</p>
      <hr />
      {/*Example with JSON*/}
      <p style={{ color: "orange" }}>Users list</p>
      {users?.map((item: any, index: number) => {
        return (
          <div key={item?.id}>
            <p>
              Name: {item?.first_name} {item?.last_name}
            </p>
            <p>Mobile: {item?.mobile}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
