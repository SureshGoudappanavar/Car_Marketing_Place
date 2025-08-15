import { db } from './../../configs';
import { CarImages, CarListing } from './../../configs/schema';
import { eq, and, gte, lte } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Service from '@/Shared/Service';
import Header from '@/components/Header';
import Search from '@/components/Search';
import CarItem from '@/components/Caritem';

function SearchByOptions() {
  const [searchParam] = useSearchParams();
  const [carList, setCarList] = useState([]);

  const make = searchParam.get('make');
  const minPrice = searchParam.get('minPrice');
  const maxPrice = searchParam.get('maxPrice');

  useEffect(() => {
    GetCarList();
  }, [make, minPrice, maxPrice]);

  const GetCarList = async () => {
    let conditions = [];

    if (make) {
      conditions.push(eq(CarListing.make, make));
    }

    if (minPrice) {
      conditions.push(gte(CarListing.price, Number(minPrice)));
    }

    if (maxPrice) {
      conditions.push(lte(CarListing.price, Number(maxPrice)));
    }

    const query = db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId));

    if (conditions.length > 0) {
      query.where(and(...conditions));
    }

    const result = await query;
    const resp = Service.FormatResult(result);
    setCarList(resp);
  };

  return (
    <div>
      <Header />
      <div>
        <div className="p-16 bg-black flex justify-center">
          <Search />
        </div>

        <div className="p-10 md:px-20">
          <h2 className="font-bold text-4xl">Search Result</h2>

          {/* Car List */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
            {carList?.length > 0 ? (
              carList.map((item, index) => (
                <div key={index}>
                  <CarItem car={item} />
                </div>
              ))
            ) : (
              <>
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div
                    key={index}
                    className="h-[320px] rounded-xl bg-slate-200 animate-pulse"
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchByOptions;
