'use client';

import { useRouter } from 'next/navigation';

import { ShowMoreProps } from '@/types';
import { updateSearchParams } from '@/utils';
import { CustomButton } from '.';

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;
     // Update the "limit" search parameter in the URL with the new value
     const newPathname = updateSearchParams("limit", `${newLimit}`);
    setLimit(newLimit);
    router.push(newPathname);
  };
  console.log('isNext',isNext)
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          btnType='button'
          title='Xem nhiều xe nữa'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
