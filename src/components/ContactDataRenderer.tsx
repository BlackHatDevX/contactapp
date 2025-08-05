import React from "react";

export type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

interface ContactDataRendererProps {
  contacts: Contact[];
}

const ContactDataRenderer: React.FC<ContactDataRendererProps> = ({ contacts }) => {
  if (contacts.length === 0) {
    return <div className="text-gray-500">No contacts found.</div>;
  }
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div key={contact.id} className="p-4 border rounded shadow-sm bg-white">
          <div className="font-bold text-lg">{contact.name}</div>
          <div className="text-gray-700">Email: {contact.email}</div>
          <div className="text-gray-700">Phone: {contact.phone}</div>
        </div>
      ))}
    </div>
  );
};

export default ContactDataRenderer;
