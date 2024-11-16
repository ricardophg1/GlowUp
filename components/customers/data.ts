export interface Customer {
  id: string
  name: string
  email: string
  status: "active" | "inactive"
  lastContact: string
}

export const customers: Customer[] = [
  {
    id: "728ed52f",
    name: "Tech Solutions Inc",
    email: "contact@techsolutions.com",
    status: "active",
    lastContact: "2024-03-10",
  },
  {
    id: "489e1d42",
    name: "Global Innovations",
    email: "info@globalinnovations.com",
    status: "active",
    lastContact: "2024-03-09",
  },
  {
    id: "573c2b1a",
    name: "Digital Dynamics",
    email: "support@digitaldynamics.com",
    status: "inactive",
    lastContact: "2024-03-05",
  },
  {
    id: "962f4c3d",
    name: "Future Systems",
    email: "hello@futuresystems.com",
    status: "active",
    lastContact: "2024-03-08",
  },
  {
    id: "835a1b9e",
    name: "Smart Solutions Ltd",
    email: "info@smartsolutions.com",
    status: "active",
    lastContact: "2024-03-07",
  },
];