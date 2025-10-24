import { Contact } from "@/types/contact";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Building, Briefcase } from "lucide-react";

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border bg-card">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">{contact.name}</h3>
          {contact.role && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Briefcase className="h-4 w-4" />
              <span>{contact.role}</span>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-foreground/80">
            <Mail className="h-4 w-4 text-primary" />
            <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
              {contact.email}
            </a>
          </div>
          
          <div className="flex items-center gap-3 text-foreground/80">
            <Phone className="h-4 w-4 text-primary" />
            <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
              {contact.phone}
            </a>
          </div>
          
          {contact.company && (
            <div className="flex items-center gap-3 text-foreground/80">
              <Building className="h-4 w-4 text-primary" />
              <span>{contact.company}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
