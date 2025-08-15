import React, { useState } from 'react';
import { IoCalendarOutline, IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { TbCheckbox } from "react-icons/tb";
import { MdLocalOffer } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CarSpecification from '@/Shared/CarSpecification';
import { db } from './../../../configs';
import { CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';

function CarDetailsPage({ carDetail }) {
  const [carPrice, setCarPrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const CalculateMonthlyPayment = () => {
    const Principal = carPrice - downPayment;
    const MonthlyInterestRate = interestRate / 1200;
    const MonthlyPayment =
      (Principal * MonthlyInterestRate * Math.pow(1 + MonthlyInterestRate, loanTerm)) /
      (Math.pow(1 + MonthlyInterestRate, loanTerm) - 1);
    setMonthlyPayment(MonthlyPayment.toFixed(2));
  };

  const handleOffer = async () => {
    let offerPrice = prompt('Enter your offer price in Dollar:');
    if (offerPrice && offerPrice.trim() !== '') {
      try {
        const result = await db
          .update(CarListing)
          .set({ offerPrice })
          .where(eq(CarListing.id, carDetail.id))
          .returning({ id: CarListing.id, offerPrice: CarListing.offerPrice });
        console.log('Offer updated successfully:', result);
      } catch (error) {
        console.error('Error updating offer:', error);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

      {/* Image */}
      <div>
        <img
          src={carDetail?.images?.[0]?.imageUrl}
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl"
          alt="Car"
        />
      </div>

      {/* Header */}
      {carDetail?.vehicleModel ? (
        <div>
          <h2 className="font-bold text-2xl sm:text-3xl">{carDetail.vehicleModel}</h2>
          <p className="text-sm">Luxury Car For Sale</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              { icon: <IoCalendarOutline />, label: carDetail?.year },
              { icon: <IoIosColorPalette />, label: carDetail?.color },
              { icon: <GiGearStickPattern />, label: carDetail?.mileage },
              { icon: <BsFillFuelPumpFill />, label: carDetail?.fuelType }
            ].map((item, i) => (
              <div key={i} className="flex gap-2 items-center bg-blue-50 rounded-full p-1 px-3">
                <span className="text-primary">{item.icon}</span>
                <span className="text-primary text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-pulse"></div>
      )}

      {/* Description */}
      {carDetail?.description ? (
        <div className="p-4 sm:p-5 rounded-xl bg-white shadow-md border">
          <h2 className="my-2 font-medium text-xl sm:text-2xl">Description</h2>
          <p className="text-sm sm:text-base">{carDetail.description}</p>
        </div>
      ) : (
        <div className="w-full h-[100px] bg-slate-200 animate-pulse rounded-xl"></div>
      )}

      {/* Features */}
      {carDetail?.features && (
        <div className="p-4 sm:p-5 border shadow-md rounded-xl">
          <h2 className="font-medium text-xl sm:text-2xl">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-3">
            {Object.entries(carDetail.features).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <TbCheckbox className="text-lg bg-blue-100 text-primary" />
                <span className="text-sm sm:text-base">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Specifications */}
  <div className="p-4 sm:p-6 border shadow-md rounded-xl">
  <h2 className="font-medium text-xl sm:text-2xl mb-4">Specifications</h2>

  {carDetail ? (
    CarSpecification.map((item, index) => (
      <div
        key={index}
        className="py-2 flex justify-between items-center border-b last:border-b-0 text-sm sm:text-base"
      >
        <h2 className="flex gap-2 items-center font-medium text-gray-700">
          <IoMdStarOutline className="text-gray-500" /> {item?.label}
        </h2>
        <span className="text-gray-900 text-right">{carDetail?.[item?.name]}</span>
      </div>
    ))
  ) : (
    <div className="w-full h-[300px] bg-slate-200 animate-pulse rounded-xl mt-4"></div>
  )}
</div>


      {/* Pricing */}
      <div className="p-4 sm:p-6 rounded-xl border shadow-md">
        <h2 className="text-lg sm:text-xl mb-1">Our Price</h2>
        <h2 className="font-bold text-3xl sm:text-4xl">${carDetail?.sellingPrice}</h2>
        <Button className="w-full mt-6" size="lg" onClick={handleOffer}>
          <MdLocalOffer className="text-lg mr-2" /> Make An Offer Price
        </Button>
      </div>

      {/* Financial Calculator */}
      <div className="p-4 sm:p-10 border rounded-xl shadow-md">
        <h2 className="font-medium text-xl sm:text-2xl">Financial Calculator</h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-5">
          <div className="w-full">
            <label>Price $</label>
            <Input type="number" onChange={(e) => setCarPrice(Number(e.target.value))} />
          </div>
          <div className="w-full">
            <label>Interest Rate</label>
            <Input type="number" onChange={(e) => setInterestRate(Number(e.target.value))} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-5">
          <div className="w-full">
            <label>Loan Term (months)</label>
            <Input type="number" onChange={(e) => setLoanTerm(Number(e.target.value))} />
          </div>
          <div className="w-full">
            <label>Down Payment</label>
            <Input type="number" onChange={(e) => setDownPayment(Number(e.target.value))} />
          </div>
        </div>
        {monthlyPayment > 0 && (
          <h2 className="font-medium text-xl sm:text-2xl mt-5">
            Your Monthly Payment is:
            <span className="text-3xl sm:text-4xl font-bold"> ${monthlyPayment}</span>
          </h2>
        )}
        <Button className="w-full mt-5" size="lg" onClick={CalculateMonthlyPayment}>
          Calculate
        </Button>
      </div>

      {/* Owner Details */}
      <div className="p-4 sm:p-6 border rounded-xl shadow-md">
        <h2 className="font-medium text-xl sm:text-2xl mb-3">Owner / Dealer</h2>
        <div className="flex flex-col items-center text-center">
          <img src={carDetail?.userImageUrl} className="w-[70px] h-[70px] rounded-full" alt="Owner" />
          <h2 className="mt-2 font-bold text-lg sm:text-xl">{carDetail?.userName}</h2>
          <p className="mt-1 text-sm text-gray-500">{carDetail?.createdBy}</p>
          <Button
            className="w-full sm:w-1/2 mt-6"
            onClick={() => window.location.href = `mailto:${carDetail?.createdBy}`}
          >
            Message Owner
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CarDetailsPage;
