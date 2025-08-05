import { useState } from "react";
import ContactDataRenderer from "./components/ContactDataRenderer";
import type { Contact } from "./components/ContactDataRenderer";

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
  { id: 4, name: "David", email: "david@example.com", phone: "233-789-0123" },
];

function App() {
  const [filter, setFilter] = useState("");
  const [contacts] = useState<Contact[]>(sampleContacts);

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mr-2 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
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

export default App;
