import React, { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./Filters";
import Chart from "./Chart";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    year: "",
    topic: "",
    sector: "",
    region: "",
    pest: "",
    source: "",
    swot: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/data", { params: filters });
        if (Array.isArray(result.data)) {
          setData(result.data);
        } else {
          setData([]);
          console.error("Fetched data is not an array:", result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };
    fetchData();
  }, [filters]);

  return (
    <div className=" bg-gray-800 text-center text-white">
      <div className="bg-white p-5 shadow-md ">
        <h1 className="text-purple-600 text-4xl font-bold text-center">
          Data Visualization Dashboard
        </h1>
      </div>
      <Filters setFilters={setFilters} />
      <Chart data={data} />
    </div>
  );
};

export default Dashboard;
