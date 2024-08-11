import React, { useState, useMemo } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types/customer';

// Mock data for demonstration
const mockCustomers: Customer[] = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Customer ${index + 1}`,
  title: `Title ${index + 1}`,
  address: `Address ${index + 1}`,
}));

const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const selectedCustomer = useMemo(() => {
    return mockCustomers.find((customer) => customer.id === selectedCustomerId) || null;
  }, [selectedCustomerId]);

  return (
    <div className="flex">
      <CustomerList
        customers={mockCustomers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={setSelectedCustomerId}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
