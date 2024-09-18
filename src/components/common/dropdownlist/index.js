

import { set } from "date-fns";
import Section from "./index.style";
import React, { useState, useEffect } from "react";
import Link from "next/link";
export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/data/home.json");
        const jsonData = await response.json();
        setData(jsonData.dropdown);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [selectedItem, setSelectedItem] = useState('');
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [id,setId]=useState(0)
  const filteredItems =
    query === ''
      ? data
      : data.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );

  const handleSelect = (item,id) => {
    setSelectedItem(item.name);
    setQuery('');
    setIsOpen(false);
    setId(id)
  };



  return (
    <Section className=" element-container">
      <div className="combobox-container">
        <input
          className="combobox-input"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onClick={() => setIsOpen(!isOpen)}
          placeholder={selectedItem ? selectedItem:"Select an item"}
        />
        {isOpen && (
          <ul className="combobox-options">
            {filteredItems.length === 0 ? (
              <li className="combobox-option">No results found</li>
            ) : (
              filteredItems.map((item) => (
                <li
                  key={item.id}
                  className="combobox-option"
                  onClick={() => handleSelect(item,item.id)}
                >
                  <Link  href={item.url}>
                  {item.name}
                  </Link>

                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </Section>
  );
}
