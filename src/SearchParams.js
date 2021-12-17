import React from "react";
import { useState } from "react";

const ANIMALS = ["dog", "cat", "bird", "reptile", "fish"];

export default function SearchParams() {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");

  const breeds = [];

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="location"
          />
        </label>
        <label htmlFor="animals">
          Animal
          <select
            value={animal}
            id="animals"
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((an) => (
              <option value={an} key={an}>
                {an}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="animals">
          Breed
          <select
            value={breed}
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((b) => (
              <option value={b} key={b}>
                {b}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}
