import React from "react";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import supabase from "./supabase";
import "./style.css";
import LoadedSpinner from "./components/utils/LoadedSpinner";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let query = supabase.from("facts").select("*");
      if (currentCategory !== "All") {
        query = query.eq("category", currentCategory);
      }

      const { data: facts, error } = await query;

      if (!error) setFacts(facts);
      else alert("Problem occur while fetching facts");
      setIsLoading(false);
    };
    fetchData();
  }, [currentCategory]);

  const showFormHandler = () => {
    setShowForm((prev) => !prev);
  };

  const addDataHandler = async (data) => {
    const text = data.fact;
    const source = data.source;
    const category = data.category;

    const { data: newFact, error } = await supabase
      .from("facts")
      .insert([{ text, source, category }])
      .select();

    if (error) alert(error);

    setFacts((pre) => [newFact[0], ...pre]);
  };

  const addCurrentCategoryHandler = (cat) => {
    console.log(cat);
    setCurrentCategory(cat);
  };

  return (
    <>
      <Header onClick={showFormHandler} showForm={showForm} />
      {showForm && (
        <NewFactForm className="fact-form" onAddData={addDataHandler} />
      )}
      <main>
        {isLoading && <LoadedSpinner />}
        {!isLoading && (
          <CategoryFilter onCurrentCategory={addCurrentCategoryHandler} />
        )}
        {!isLoading && <FactList facts={facts} />}
      </main>
    </>
  );
}

export default App;
