import React from 'react';
import { Customer } from '../types/customer';
import CustomerCard from './CustomerCard';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
  return (
    <div className="w-1/3 border-r overflow-y-scroll h-screen">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={customer.id === selectedCustomerId}
          onClick={() => onSelectCustomer(customer.id)}
        />
      ))}
    </div>
  );
};

export default React.memo(CustomerList);
