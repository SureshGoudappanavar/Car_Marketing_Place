import React from 'react'

function InfoSection() {
  return (
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://media.ed.edmunds-media.com/mercedes-benz/s-class/2024/oem/2024_mercedes-benz_s-class_sedan_amg-s-63-e-performance_fq_oem_1_1600.jpg"
            className="absolute inset-0 h-full w-full object-cover rounded-xl border border-gray-200 shadow-lg"

          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Car: A Versatile Mode of Transportation
          </h2>

          <p className="mt-4 text-gray-600">
          A car, also known as an automobile, is a wheeled motor vehicle designed primarily 
          for passenger transportation. Cars come in various shapes and sizes, ranging from compact
           hatchbacks to large SUVs, catering to different needs and preferences. Powered by internal
            combustion engines or electric motors, cars offer convenience and speed, making them essential 
            in modern society. Beyond daily commuting, cars are used for leisure travel, business purposes, 
            and even sporting events. With technological advancements, modern cars now feature enhanced safety systems,
             infotainment options, and eco-friendly alternatives like hybrid and electric models.
          </p>

         <a
  href="mailto:sureshpg003@gmail.com?subject=Car Inquiry"
  className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
>
  Get in Touch
</a>

        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default InfoSection