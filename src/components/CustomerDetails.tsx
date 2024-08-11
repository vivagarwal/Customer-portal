import React from 'react';
import { Customer } from '../types/customer';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const { photos } = useFetchPhotos(10000); // Fetch photos and extract only the array

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{customer.name}</h2>
      <p className="text-lg">{customer.title}</p>
      <p>{customer.address}</p>
      <PhotoGrid photos={photos} />
    </div>
  );
};

export default React.memo(CustomerDetails);
