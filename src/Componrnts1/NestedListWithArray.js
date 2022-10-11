import React from "react";
import Table from 'react-bootstrap/Table';

export default function NestedListWithArray() {

  const User = [
    {
      name: "Govind",
      salary: 800000,
      company: "credit susis",
      address: [
        { hn: "10", city: "Nodia", country: "india" },
        { hn: "20", city: "Indore", country: "india" },
        { hn: "13", city: "Khopoli", country: "india" },
        { hn: "12", city: "Hosangbad", country: "india" },
      ],
    },
    {
      name: "sakshi",
      salary: 70000,
      company: "Tcs ",
      address: [
        { hn: "101", city: "Nashik", country: "india" },
        { hn: "202", city: "Pune", country: "india" },
        { hn: "133", city: "talegav", country: "india" },
        { hn: "121", city: "patna", country: "india" },
      ],
    },
    {
      name: "yash",
      salary: 800000,
      company: "med",
      address: [
        { hn: "10", city: "dherdun", country: "india" },
        { hn: "20", city: "rishikesh", country: "india" },
        { hn: "13", city: "ramnagar", country: "india" },
        { hn: "12", city: "ujjan", country: "india" },
      ],
    },
    {
      name: "Purvi",
      salary: 400000,
      company: "infosis",
      address: [
        { hn: "10", city: "panvel", country: "india" },
        { hn: "20", city: "vashi", country: "india" },
        { hn: "13", city: "Thane", country: "india" },
        { hn: "12", city: "dadar", country: "india" },
      ],
    },
    {
      name: "montu",
      salary: 360000,
      company: "sony",
      address: [
        { hn: "10", city: "Nodia", country: "india" },
        { hn: "20", city: "delhi", country: "india" },
        { hn: "13", city: "shrinagar", country: "india" },
        { hn: "12", city: "jammu", country: "india" },
      ],
    },
  ];

  return (
    <>
      <div className="App">
        <h1>Nested List with Nested Array</h1>
        <Table striped bordered hover size="sm" variant="dark" style={{marginRight:100}}>
            <tbody>
                <tr>
                    <td>name</td>
                    <td>salary</td>
                    <td>Comapny</td>
                    <td>address</td>
                </tr>
                {
                    User.map((item)=>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.salary}</td>
                        <td>{item.company}</td>
                        <td>{
                        <Table  variant="dark" >
                        <tbody>{
                        item.address.map((data) =>
                            <tr>
                                <td>{data.hn}</td>
                                <td>{data.city}</td>
                                <td>{data.country}</td>
                            </tr>  
                        )}
                        </tbody>
                        </Table>
}
                        </td>
                    </tr>
                    )
                }
            </tbody>
      </Table>
      </div>
    </>
  );
}
