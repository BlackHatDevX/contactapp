import { useState } from "react";
import ContactDataRenderer from "./components/ContactDataRenderer";
import type { Contact } from "./components/ContactDataRenderer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Define contacts in App
const sampleContacts: Contact[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "123-456-7890",
  },
  { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "234-567-8901" },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "345-678-9012",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    phone: "456-789-0123",
  },
  { id: 5, name: "David", email: "david@example.com", phone: "233-789-0123" },
];

function Home({ contacts }: { contacts: Contact[] }) {
  const [filter, setFilter] = useState("");
  const filteredContacts = contacts.filter((contact) => {
    const search = filter.toLowerCase();
    return (
      contact.name.toLowerCase().includes(search) ||
      contact.email.toLowerCase().includes(search) ||
      contact.phone.includes(search)
    );
  });
  return (
    <div className="max-w-xl mx-auto p-6">
      <div className=" flex flex-row items-center mb-6">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mr-2 pb-2 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-4">Contact List</h1>
      </div>
      <input
        type="text"
        placeholder="Filter by name, email, or phone..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 w-full p-2 border rounded"
      />
      <ContactDataRenderer contacts={filteredContacts} />
    </div>
  );
}

function About() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="text-gray-700">
        This is a simple contact app built with React, TypeScript, and Vite. It
        demonstrates a contact list with filter functionality and React Router
        navigation.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-100 p-4 mb-6 flex gap-4 justify-center">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-600 hover:underline">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home contacts={sampleContacts} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
