import React, { useState } from "react";
import Navbar from "./Navbar";
import backgroundImage from "./dashboadbg.jpg";
import { Container } from "react-bootstrap";

function ManageOrder() {
  const [value, setValue] = useState('');
  const options = [
    { label: "Accepted Order", value: "accepted" },
    { label: "Rejected Order", value: "rejected" },
    { label: "Pending Order", value: "pending" },
  ];

  const [disable, setDisable] = useState(true);
  const [todate, setTodate] = useState([]);
  const [fromdate, setFromdate] = useState([]);

  const [todateformat, setTodateformat] = useState("");
  const [fromdateformat, setFromdateformat] = useState("");

  const handletodate = (e) => {
    const gettodatevalue = e.target.value;
    const setdateformat = gettodatevalue.split("-");
    const settoyear = setdateformat[0];
    const settomonth = setdateformat[1];
    const settodate = setdateformat[2];
    const settodateformat = settoyear + "" + settomonth + "" + settodate;
    setTodate(gettodatevalue);
    setTodateformat(settodateformat);
    setDisable(false);
  };

  const handlefromdate = (e) => {
    const getfromdatevalue = e.target.value;
    const setfromformat = getfromdatevalue.split("-");
    const setfromyear = setfromformat[0];
    const setfrommonth = setfromformat[1];
    const setfromdate = setfromformat[2];
    const setfromformatdate =
      setfromyear + "" + setfrommonth + "" + setfromdate;
    setFromdate(getfromdatevalue);
    setFromdateformat(setfromformatdate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todateformat > fromdateformat) {
      alert("Please select a valid date");
    } else {
      alert("Successful! Please set API URL");
    }
  };

  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-screen  font-abc"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />

        <section className="bg-gradient-to-r from-neutral-400 to-neutral-600 opacity-95 rounded-2xl shadow-2xl ml-[10%] h-[70%] mt-16 w-[80%] flex ">
          <div className="row  ml-[38%]  thight flex ">
            <div className="col-sm-8  ">
              <h4 className="mb-4 font-bold te p-4 ">
                Select a Date for Tracking Order
              </h4>
              <form onSubmit={handleSubmit} className=" ml-[-45%]">
                <div className="row mb-4  flex  ">
                <div className="w-5- flex   ">
                  <h4>Select the option:</h4>
                  <select className="From select ml-2 bg-white-100 rounded-md border-solid border-2 border-black-500 " onChange={handleSelect} value={value}>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                <div>
                  <label className="col-sm-1 col-form-label font-medium ml-2">Order No.</label>
                  <input type="number" name="orderno" id="orderno"
                  className="form-control ml-2 bg-white-100 rounded-md border-solid border-2 border-black-500 w-32" />
                </div>
                  
                </div>
                  <label className="col-sm-2 col-form-label font-medium ml-2">
                    To Date<span className="astriccolor">-</span>
                  </label>
                  <div className="col-sm-5 flex">
                    <input
                      type="date"
                      className="form-control ml-2 bg-white-100 rounded-md border-solid border-2 border-black-500"
                      name="todate"
                      placeholder="dd-mm-yyyy"
                      onChange={(e) => handletodate(e)}
                    />
                    <span className="text-danger"> </span>
                  </div>

                  <label className="col-sm-2 col-form-label font-medium ml-2 ">
                    From Date<span className="astriccolor">-</span>
                  </label>
                  <div className="col-sm-5 flex">
                    <input
                      type="date"
                      className="form-control ml-2 bg-white-100 rounded-md border-solid border-2 border-black-500"
                      name="fromdate"
                      placeholder="dd-mm-yyyy"
                      onChange={(e) => handlefromdate(e)}
                    />
                  </div>
                  <div className="row mb-4 flex">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-5 flex">
                      <button className="flex ml-2 text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium absolute rounded-full text-sm px-2 py-1.5 me-2 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 transform transition-transform duration-300">
                        Submit
                      </button>
                      <button className="flex text-white bg-rose-600 focus:ring-4 focus:ring-blue-300 font-medium absolute rounded-full text-sm px-4 py-1.5 me-2 mb-2 ml-[5.5%] dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 transform transition-transform duration-300">
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <section className="shadow-2xl mt-[10%] h-[65%] w-[90%] ml-[-97%] flex rounded-lg bg-neutral-500 opacity-90  "></section>
          
        </section>
      </div>
    </>
  );
}

export default ManageOrder;
