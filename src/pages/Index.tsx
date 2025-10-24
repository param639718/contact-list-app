import { useState } from "react";
import { Contact } from "@/types/contact";
import { ContactCard } from "@/components/ContactCard";
import { SearchBar } from "@/components/SearchBar";
import { AddContactDialog } from "@/components/AddContactDialog";
import { Users } from "lucide-react";

// Initial sample contacts
const initialContacts: Contact[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@techcorp.com",
    phone: "+1 (555) 123-4567",
    company: "TechCorp Solutions",
    role: "Senior Developer",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@innovate.io",
    phone: "+1 (555) 234-5678",
    company: "Innovate Labs",
    role: "Product Manager",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.r@design.co",
    phone: "+1 (555) 345-6789",
    company: "Design Co.",
    role: "UX Designer",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@startup.xyz",
    phone: "+1 (555) 456-7890",
    company: "Startup XYZ",
    role: "CTO",
  },
  {
    id: "5",
    name: "Jessica Martinez",
    email: "jess.m@datatech.com",
    phone: "+1 (555) 567-8901",
    company: "DataTech Analytics",
    role: "Data Scientist",
  },
  {
    id: "6",
    name: "Robert Thompson",
    email: "r.thompson@cloudserv.net",
    phone: "+1 (555) 678-9012",
    company: "CloudServ Inc.",
    role: "DevOps Engineer",
  },
];

const Index = () => {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddContact = (newContact: Omit<Contact, "id">) => {
    const contact: Contact = {
      ...newContact,
      id: Date.now().toString(),
    };
    setContacts([contact, ...contacts]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <div className="container max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl mb-4 shadow-lg">
            <Users className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-primary to-primary-glow bg-clip-text text-transparent mb-3">
            Contact Manager
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage and organize your professional contacts in one beautiful place
          </p>
        </div>

        {/* Search and Add Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <AddContactDialog onAddContact={handleAddContact} />
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredContacts.length} {filteredContacts.length === 1 ? "contact" : "contacts"} found
          </p>
        </div>

        {/* Contact Grid */}
        {filteredContacts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No contacts found</h3>
            <p className="text-muted-foreground">
              {searchQuery
                ? "Try adjusting your search query"
                : "Add your first contact to get started"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
