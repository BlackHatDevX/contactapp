import type { Contact } from "./components/ContactDataRenderer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";

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
