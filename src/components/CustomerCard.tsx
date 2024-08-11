import React from 'react';
import { Customer } from '../types/customer';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onClick: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 border-b cursor-pointer ${isSelected ? 'bg-blue-200' : 'bg-white'}`}
    >
      <h3 className="font-bold">{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  );
};

export default React.memo(CustomerCard);
