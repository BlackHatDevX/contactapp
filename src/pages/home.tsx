import { useState } from "react";
import ContactDataRenderer, {
  type Contact,
} from "../components/ContactDataRenderer";

interface HomeProps {
  contacts: Contact[];
}

function Home({ contacts }: HomeProps) {
  // State to manage the filter input
  const [filter, setFilter] = useState("");
  
  // using lowercase for case-insensitive search
  const filteredContacts = contacts.filter((contact) => {
    const search = filter.toLowerCase();
    return (
      contact.name.toLowerCase().includes(search) ||
      contact.email.toLowerCase().includes(search) ||
      contact.phone.includes(search)
    );
  });
  
  return (
    <div>
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
    </div>
  );
}

export default Home;
